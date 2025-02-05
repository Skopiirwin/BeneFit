// src/services/measurements/MLPrediction.js
import * as tf from '@tensorflow/tfjs'

class MLPredictionError extends Error {
  constructor(message, type) {
    super(message)
    this.name = 'MLPredictionError'
    this.type = type
  }
}

export default class MLPrediction {
  constructor() {
    this.model = null
    this.isModelLoaded = false
    this.modelPath = 'localstorage://measurement-model'
    this.referenceHeight = 170 // cm
    this.backend = null
  }

  async initialize() {
    try {
      await tf.ready()
      
      // Force CPU backend initially
      await tf.setBackend('cpu')
      console.log('Using CPU backend for initialization')
      
      this.model = await this.loadOrCreateModel()
      this.isModelLoaded = true
      
      // Try upgrading to WebGL after model is loaded
      try {
        const webglAvailable = await tf.ready().then(() => {
          return tf.getBackend() === 'webgl';
        });
        if (webglAvailable) {
          await tf.setBackend('webgl')
          console.log('Successfully upgraded to WebGL backend')
          this.backend = 'webgl'
        }
      } catch (e) {
        console.warn('WebGL not available, continuing with CPU backend')
        this.backend = 'cpu'
      }
      
      // Warmup the model with the current backend
      await this.warmupModel()
    } catch (error) {
      throw new MLPredictionError(
        `Failed to initialize ML model: ${error.message}`,
        'INIT_ERROR'
      )
    }
  }

  async loadOrCreateModel() {
    try {
      // Try to load existing model
      return await tf.loadLayersModel(this.modelPath)
    } catch {
      // Create new model if loading fails
      return this.createModel()
    }
  }

  createModel() {
    const model = tf.sequential()
    // Simplified architecture that works better with CPU
    model.add(tf.layers.dense({
      units: 64,
      activation: 'relu',
      inputShape: [33 * 4],
      kernelInitializer: 'glorotUniform'  // Use simpler initialization
    }))
    model.add(tf.layers.dense({
      units: 32,
      activation: 'relu',
      kernelInitializer: 'glorotUniform'
    }))
    model.add(tf.layers.dense({
      units: 6,
      kernelInitializer: 'glorotUniform'
    }))
    model.compile({
      optimizer: tf.train.adam(0.0001),
      loss: 'meanSquaredError'
    })
    return model
  }

  async predictMeasurements(landmarks) {
    if (!this.isModelLoaded) {
      throw new MLPredictionError(
        'ML model not initialized',
        'MODEL_NOT_READY'
      )
    }

    try {
      // Process tensors with memory management
      return await tf.tidy(() => {
        // Prepare input data
        const inputTensor = this.prepareLandmarkData(landmarks)

        // Normalize coordinates to [0,1] range
        const normalizedTensor = tf.div(inputTensor, tf.scalar(1))

        // Extract visibility scores
        const visibilityWeights = tf.slice(normalizedTensor, [0, 3], [-1, 1])

        // Get coordinates
        const coordinates = tf.slice(normalizedTensor, [0, 0], [-1, 3])

        // Apply visibility weights to coordinates
        const weightedCoords = tf.mul(coordinates, visibilityWeights)

        // Remove noise from low confidence points
        const denoised = tf.where(
          tf.greater(visibilityWeights, tf.scalar(0.5)),
          weightedCoords,
          tf.zerosLike(weightedCoords)
        )

        // Calculate relative positions for more stable measurements
        const meanPos = tf.mean(denoised, 0)
        const relativePos = tf.sub(denoised, meanPos)

        // Make prediction
        const prediction = this.model.predict(relativePos)
        const results = prediction.dataSync()

        // Process and return results
        return this.processPrediction(Array.from(results))
      })
    } catch (error) {
      throw new MLPredictionError(
        `Prediction failed: ${error.message}`,
        'PREDICTION_ERROR'
      )
    }
  }

  prepareLandmarkData(landmarks) {
    // Flatten landmarks into a single array
    const flattenedData = landmarks.reduce((acc, landmark) => {
      acc.push(landmark.x, landmark.y, landmark.z, landmark.visibility || 0)
      return acc
    }, [])

    // Convert to tensor
    return tf.tensor2d([flattenedData])
  }

  processPrediction(rawPrediction) {
    // Convert normalized predictions to actual measurements
    return {
      height: this.scaleHeight(rawPrediction[0]),
      chest: this.scaleCircumference(rawPrediction[1]),
      waist: this.scaleCircumference(rawPrediction[2]),
      hips: this.scaleCircumference(rawPrediction[3]),
      inseam: this.scaleLength(rawPrediction[4]),
      shoulder: this.scaleLength(rawPrediction[5])
    }
  }

  scaleHeight(normalizedValue) {
    return (normalizedValue * this.referenceHeight).toFixed(1)
  }

  scaleCircumference(normalizedValue) {
    return (normalizedValue * this.referenceHeight * 0.5).toFixed(1)
  }

  scaleLength(normalizedValue) {
    return (normalizedValue * this.referenceHeight * 0.25).toFixed(1)
  }

  async trainModel(trainingData, epochs = 100) {
    if (!this.isModelLoaded) {
      throw new MLPredictionError(
        'ML model not initialized',
        'MODEL_NOT_READY'
      )
    }

    try {
      const { inputs, labels } = this.prepareTrainingData(trainingData)

      // Train the model
      await this.model.fit(inputs, labels, {
        epochs,
        batchSize: 32,
        validationSplit: 0.2,
        callbacks: {
          onEpochEnd: async (epoch, logs) => {
            console.log(`Epoch ${epoch + 1}: loss = ${logs.loss.toFixed(4)}`)
          }
        }
      })

      // Save the trained model
      await this.saveModel()

      // Clean up tensors
      inputs.dispose()
      labels.dispose()
    } catch (error) {
      throw new MLPredictionError(
        `Training failed: ${error.message}`,
        'TRAINING_ERROR'
      )
    }
  }

  prepareTrainingData(data) {
    const inputs = []
    const labels = []

    data.forEach(sample => {
      inputs.push(this.flattenLandmarks(sample.landmarks))
      labels.push([
        sample.measurements.height / this.referenceHeight,
        sample.measurements.chest / (this.referenceHeight * 0.5),
        sample.measurements.waist / (this.referenceHeight * 0.5),
        sample.measurements.hips / (this.referenceHeight * 0.5),
        sample.measurements.inseam / (this.referenceHeight * 0.25),
        sample.measurements.shoulder / (this.referenceHeight * 0.25)
      ])
    })

    return {
      inputs: tf.tensor2d(inputs),
      labels: tf.tensor2d(labels)
    }
  }

  async warmupModel() {
    // Run a dummy prediction to warm up the model
    const dummyInput = tf.zeros([1, 33 * 4])
    await this.model.predict(dummyInput).data()
    dummyInput.dispose()
  }

  async saveModel() {
    try {
      await this.model.save(this.modelPath)
    } catch (error) {
      throw new MLPredictionError(
        `Failed to save model: ${error.message}`,
        'SAVE_ERROR'
      )
    }
  }

  async evaluateModel(testData) {
    if (!this.isModelLoaded) {
      throw new MLPredictionError(
        'ML model not initialized',
        'MODEL_NOT_READY'
      )
    }

    try {
      const { inputs, labels } = this.prepareTrainingData(testData)
      const evaluation = await this.model.evaluate(inputs, labels)
      
      const results = {
        loss: await evaluation[0].data(),
        mse: await evaluation[1].data()
      }

      // Clean up
      inputs.dispose()
      labels.dispose()
      evaluation[0].dispose()
      evaluation[1].dispose()

      return results
    } catch (error) {
      throw new MLPredictionError(
        `Evaluation failed: ${error.message}`,
        'EVALUATION_ERROR'
      )
    }
  }

  dispose() {
    if (this.model) {
      this.model.dispose()
    }
    this.isModelLoaded = false
  }
}