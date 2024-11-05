import axiosInstance from '../../utils/axios';

const state = {
  measurements: [],
  currentMeasurement: null,
};

const getters = {
  allMeasurements: state => state.measurements,
  currentMeasurement: state => state.currentMeasurement,
};

const actions = {
  async fetchMeasurements({ commit }) {
    try {
      const response = await axiosInstance.get('/api/v1/user_measurements');
      commit('setMeasurements', response.data);
    } catch (error) {
      console.error('Error fetching measurements:', error);
      throw error;
    }
  },

  async createMeasurement({ commit }, measurementData) {
    try {
      const response = await axiosInstance.post('/api/v1/user_measurements', measurementData);
      commit('addMeasurement', response.data);
    } catch (error) {
      console.error('Error creating measurement:', error);
      throw error;
    }
  },

  async updateMeasurement({ commit }, { id, measurementData }) {
    try {
      const response = await axiosInstance.put(`/api/v1/user_measurements/${id}`, measurementData);
      commit('updateMeasurement', response.data);
    } catch (error) {
      console.error('Error updating measurement:', error);
      throw error;
    }
  },

  async deleteMeasurement({ commit }, id) {
    try {
      await axiosInstance.delete(`/api/v1/user_measurements/${id}`);
      commit('removeMeasurement', id);
    } catch (error) {
      console.error('Error deleting measurement:', error);
      throw error;
    }
  },
};

const mutations = {
  setMeasurements(state, measurements) {
    state.measurements = measurements;
  },
  addMeasurement(state, measurement) {
    state.measurements.push(measurement);
  },
  updateMeasurement(state, updatedMeasurement) {
    const index = state.measurements.findIndex(m => m.id === updatedMeasurement.id);
    if (index !== -1) {
      state.measurements.splice(index, 1, updatedMeasurement);
    }
  },
  removeMeasurement(state, id) {
    state.measurements = state.measurements.filter(m => m.id !== id);
  },
  setCurrentMeasurement(state, measurement) {
    state.currentMeasurement = measurement;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};