import { measurementService } from '@/services/measurements'

const state = {
  measurements: [],
  currentMeasurement: null,
  faceShape: null,
  frameRecommendations: [],
  confidence: 0,
  processingStatus: null
}

const getters = {
  getAllMeasurements: state => state.measurements,
  getCurrentMeasurement: state => state.currentMeasurement,
  getFaceShape: state => state.faceShape,
  getFrameRecommendations: state => state.frameRecommendations,
  getConfidence: state => state.confidence
}

const actions = {
  async fetchMeasurements({ commit }) {
    try {
      commit('SET_LOADING', true, { root: true })
      const response = await measurementService.getByType('eyewear')
      commit('SET_MEASUREMENTS', response.data)
    } catch (error) {
      commit('SET_ERROR', error.message, { root: true })
      throw error
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async processMeasurement({ commit }, measurementData) {
    try {
      commit('SET_LOADING', true, { root: true })
      const processedData = await measurementService.processEyewearMeasurement(measurementData)
      commit('SET_CURRENT_MEASUREMENT', processedData)
      commit('SET_FACE_SHAPE', processedData.faceShape)
      commit('SET_FRAME_RECOMMENDATIONS', processedData.recommendations)
      commit('SET_CONFIDENCE', processedData.confidence)
      return processedData
    } catch (error) {
      commit('SET_ERROR', error.message, { root: true })
      throw error
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },

  async saveMeasurement({ commit }, measurementData) {
    try {
      commit('SET_LOADING', true, { root: true })
      const response = await measurementService.create({
        ...measurementData,
        type: 'eyewear'
      })
      commit('ADD_MEASUREMENT', response.data)
      return response.data
    } catch (error) {
      commit('SET_ERROR', error.message, { root: true })
      throw error
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  }
}

const mutations = {
  SET_MEASUREMENTS(state, measurements) {
    state.measurements = measurements
  },
  SET_CURRENT_MEASUREMENT(state, measurement) {
    state.currentMeasurement = measurement
  },
  SET_FACE_SHAPE(state, shape) {
    state.faceShape = shape
  },
  SET_FRAME_RECOMMENDATIONS(state, recommendations) {
    state.frameRecommendations = recommendations
  },
  SET_CONFIDENCE(state, score) {
    state.confidence = score
  },
  ADD_MEASUREMENT(state, measurement) {
    state.measurements.push(measurement)
  },
  RESET_STATE(state) {
    state.currentMeasurement = null
    state.faceShape = null
    state.frameRecommendations = []
    state.confidence = 0
    state.processingStatus = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}