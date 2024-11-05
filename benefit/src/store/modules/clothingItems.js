import axiosInstance from '../../utils/axios';

const state = {
  clothingItems: [],
  currentItem: null,
  recommendedSize: null,
};

const getters = {
  allClothingItems: state => state.clothingItems,
  currentItem: state => state.currentItem,
  recommendedSize: state => state.recommendedSize,
};

const actions = {
  async fetchClothingItems({ commit }) {
    try {
      const response = await axiosInstance.get('/api/v1/clothing_items');
      commit('setClothingItems', response.data);
    } catch (error) {
      console.error('Error fetching clothing items:', error);
      throw error;
    }
  },

  async fetchClothingItem({ commit }, id) {
    try {
      const response = await axiosInstance.get(`/api/v1/clothing_items/${id}`);
      commit('setCurrentItem', response.data);
    } catch (error) {
      console.error('Error fetching clothing item:', error);
      throw error;
    }
  },

  async recommendSize({ commit }, id) {
    try {
      const response = await axiosInstance.get(`/api/v1/clothing_items/${id}/recommend_size`);
      commit('setRecommendedSize', response.data.recommended_size);
    } catch (error) {
      console.error('Error recommending size:', error);
      throw error;
    }
  },
};

const mutations = {
  setClothingItems(state, items) {
    state.clothingItems = items;
  },
  setCurrentItem(state, item) {
    state.currentItem = item;
  },
  setRecommendedSize(state, size) {
    state.recommendedSize = size;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};