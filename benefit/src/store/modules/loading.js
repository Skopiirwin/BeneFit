// store/modules/loading.js
const state = {
  globalLoading: false,
  loadingStates: {},
  loadingMessages: {}
};

const getters = {
  isLoading: state => state.globalLoading,
  getLoadingState: state => actionKey => state.loadingStates[actionKey] || false,
  getLoadingMessage: state => actionKey => state.loadingMessages[actionKey] || ''
};

const actions = {
  startLoading({ commit }, { actionKey, message = '' }) {
    commit('SET_LOADING_STATE', { actionKey, isLoading: true });
    if (message) {
      commit('SET_LOADING_MESSAGE', { actionKey, message });
    }
  },

  stopLoading({ commit }, actionKey) {
    commit('SET_LOADING_STATE', { actionKey, isLoading: false });
    commit('CLEAR_LOADING_MESSAGE', actionKey);
  },

  setGlobalLoading({ commit }, isLoading) {
    commit('SET_GLOBAL_LOADING', isLoading);
  }
};

const mutations = {
  SET_GLOBAL_LOADING(state, isLoading) {
    state.globalLoading = isLoading;
  },

  SET_LOADING_STATE(state, { actionKey, isLoading }) {
    state.loadingStates = {
      ...state.loadingStates,
      [actionKey]: isLoading
    };

    // Update global loading state
    state.globalLoading = Object.values(state.loadingStates).some(state => state);
  },

  SET_LOADING_MESSAGE(state, { actionKey, message }) {
    state.loadingMessages = {
      ...state.loadingMessages,
      [actionKey]: message
    };
  },

  CLEAR_LOADING_MESSAGE(state, actionKey) {
    // Create new object without the specified key
    state.loadingMessages = Object.fromEntries(
      Object.entries(state.loadingMessages)
        .filter(([key]) => key !== actionKey)
    );
  },

  RESET_LOADING_STATES(state) {
    state.globalLoading = false;
    state.loadingStates = {};
    state.loadingMessages = {};
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};