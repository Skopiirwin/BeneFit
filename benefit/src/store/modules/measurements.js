import { measurementService } from '@/services/measurements';

export default {
  namespaced: true,
  
  state: {
    measurements: [],
    currentMeasurement: null,
    selectedType: null,
    cameraReady: false,
    currentStep: 0,
    calibrationData: null,
    error: null,
    isLoading: false,
  },

  getters: {
    getAllMeasurements: state => state.measurements,
    getCurrentMeasurement: state => state.currentMeasurement,
    getSelectedType: state => state.selectedType,
    getCalibrationStatus: state => state.calibrationData !== null,
    getCurrentStep: state => state.currentStep,
    getCameraReady: state => state.cameraReady
  },

  actions: {
    async updateCameraState({ commit }, status) {
      commit('SET_CAMERA_READY', status);
    },
    async getRecentMeasurements({ commit }) {
      try {
        commit('SET_LOADING', true);
        const response = await measurementService.getRecent();
        return response;
      } catch (error) {
        commit('SET_ERROR', error.message);
        throw error;
      } finally {
        commit('SET_LOADING', false);
      }
    },
    async selectMeasurementType({ commit }, type) {
      commit('SET_SELECTED_TYPE', type);
    },
    async setCalibration({ commit }, data) {
      commit('SET_CALIBRATION_DATA', data);
    },

    async setStep({ commit }, step) {
      commit('SET_STEP', step);
    },

    resetMeasurementProcess({ commit }) {
      commit('RESET_STATE');
    },
  },

  mutations: {
    SET_CAMERA_READY(state, status) {
      state.cameraReady = status;
      console.log('Camera Ready State Updated:', status); // Debug log
    },
    SET_MEASUREMENTS(state, measurements) {
      state.measurements = measurements;
    },
    SET_CURRENT_MEASUREMENT(state, measurement) {
      state.currentMeasurement = measurement;
    },
    SET_SELECTED_TYPE(state, type) {
      state.selectedType = type;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_STEP(state, step) {
      state.currentStep = step;
    },
    SET_CALIBRATION_DATA(state, data) {
      state.calibrationData = data;
    },
    RESET_STATE(state) {
      state.currentMeasurement = null;
      state.selectedType = null;
      state.cameraReady = false;
      state.currentStep = 0;
      state.calibrationData = null;
    }
  }
};