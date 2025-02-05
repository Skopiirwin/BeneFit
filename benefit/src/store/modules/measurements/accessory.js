import { measurementService } from '@/services/measurements'

const state = {
  measurements: [],
  currentMeasurement: null,
  sizeRecommendations: {
    watch: null,
    bracelet: null
  },
  confidence: 0,
  processingStatus: null
}

const getters = {
  getAllMeasurements: state => state.measurements,
  getCurrentMeasurement: state => state.currentMeasurement,
  getSizeRecommendations: state => state.sizeRecommendations,
  getConfidence: state => state.confidence
}

const actions = {
  async fetchMeasurements({ commit }) {
    try {
      commit('SET_LOADING', true, { root: true })
      const response = await measurementService.getByType('accessory')
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
      const processedData = await measurementService.processAccessoryMeasurement(measurementData)
      commit('SET_CURRENT_MEASUREMENT', processedData)
      commit('SET_SIZE_RECOMMENDATIONS', processedData.recommendations)
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
        type: 'accessory'
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
  SET_SIZE_RECOMMENDATIONS(state, recommendations) {
    state.sizeRecommendations = recommendations
  },
  SET_CONFIDENCE(state, score) {
    state.confidence = score
  },
  ADD_MEASUREMENT(state, measurement) {
    state.measurements.push(measurement)
  },
  RESET_STATE(state) {
    state.currentMeasurement = null
    state.sizeRecommendations = {
      watch: null,
      bracelet: null
    }
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