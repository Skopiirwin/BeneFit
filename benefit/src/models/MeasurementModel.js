// MeasurementModel.js
import * as tf from '@tensorflow/tfjs';

export class MeasurementModel {
  constructor() {
    this.model = null;
  }

  async createModel() {
    this.model = tf.sequential();
    this.model.add(tf.layers.dense({ units: 64, activation: 'relu', inputShape: [6] }));
    this.model.add(tf.layers.dense({ units: 32, activation: 'relu' }));
    this.model.add(tf.layers.dense({ units: 6 }));

    this.model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });
  }

  async train(inputData, outputData, epochs = 100) {
    const xs = tf.tensor2d(inputData);
    const ys = tf.tensor2d(outputData);

    await this.model.fit(xs, ys, {
      epochs: epochs,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          console.log(`Epoch ${epoch}: loss = ${logs.loss}`);
        }
      }
    });

    xs.dispose();
    ys.dispose();
  }

  async predict(inputData) {
    const input = tf.tensor2d([inputData]);
    const prediction = this.model.predict(input);
    const result = await prediction.array();
    input.dispose();
    prediction.dispose();
    return result[0];
  }

  async saveModel(path) {
    await this.model.save(`localstorage://${path}`);
  }

  async loadModel(path) {
    this.model = await tf.loadLayersModel(`localstorage://${path}`);
  }
}
