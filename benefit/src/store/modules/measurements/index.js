import eyewearModule from './eyewear'
import footwearModule from './footwear'
import accessoryModule from './accessory'
import { measurementService } from '@/services/measurements'

const state = {
  selectedType: null,
  isCalibrated: false,
  currentStep: 0,
  calibrationData: null,
  loading: false,
  error: null
}

const getters = {
  getSelectedType: state => state.selectedType,
  getCalibrationStatus: state => state.isCalibrated,
  getCurrentStep: state => state.currentStep,
  isLoading: state => state.loading,
  getError: state => state.error,
  canProceed: state => step => {
    switch (step) {
      case 1: return !!state.selectedType
      case 2: return state.isCalibrated
      case 3: return state.selectedType && state.isCalibrated
      default: return true
    }
  }
}

const actions = {
  async selectMeasurementType({ commit }, type) {
    try {
      commit('SET_LOADING', true)
      commit('SET_SELECTED_TYPE', type)
      commit('SET_CURRENT_STEP', 1)
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async setCalibration({ commit }, data) {
    try {
      commit('SET_LOADING', true)
      commit('SET_CALIBRATION_DATA', data)
      commit('SET_CALIBRATION_STATUS', true)
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  },

  setStep({ commit }, step) {
    commit('SET_CURRENT_STEP', step)
  },

  resetMeasurementProcess({ commit }) {
    commit('RESET_STATE')
  },

  clearError({ commit }) {
    commit('SET_ERROR', null)
  }
}

const mutations = {
  SET_SELECTED_TYPE(state, type) {
    state.selectedType = type
  },
  SET_CALIBRATION_STATUS(state, status) {
    state.isCalibrated = status
  },
  SET_CALIBRATION_DATA(state, data) {
    state.calibrationData = data
  },
  SET_CURRENT_STEP(state, step) {
    state.currentStep = step
  },
  SET_LOADING(state, status) {
    state.loading = status
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  RESET_STATE(state) {
    state.selectedType = null
    state.isCalibrated = false
    state.currentStep = 0
    state.calibrationData = null
    state.error = null
  }
}

export default {
  namespaced: true,
  modules: {
    eyewear: eyewearModule,
    footwear: footwearModule,
    accessory: accessoryModule
  },
  state,
  getters,
  actions,
  mutations
}