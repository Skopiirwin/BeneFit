// store/modules/errors.js
import { ErrorTypes, ErrorSeverity } from '@/utils/errorTypes';
import { errorHandlers } from '@/utils/errorHandlers';

const state = {
  currentError: null,
  errorHistory: [],
  isRecovering: false
};

const getters = {
  hasError: state => !!state.currentError,
  currentError: state => state.currentError,
  errorHistory: state => state.errorHistory,
  isRecovering: state => state.isRecovering
};

const actions = {
  handleError({ commit }, error) {
    const errorType = error.type || ErrorTypes.UNKNOWN;
    const handler = errorHandlers[errorType];
    const handledError = handler(error);

    commit('SET_ERROR', {
      ...handledError,
      originalError: error
    });

    // For now, just log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', error);
    }

    return handledError;
  },

  async recoverFromError({ commit, state }) {
    if (!state.currentError?.recoverable) return;

    commit('SET_RECOVERING', true);
    
    try {
      if (state.currentError.recovery) {
        await state.currentError.recovery();
      }
      commit('CLEAR_ERROR');
    } catch (error) {
      commit('SET_ERROR', {
        type: ErrorTypes.UNKNOWN,
        message: 'Recovery failed',
        severity: ErrorSeverity.HIGH,
        originalError: error
      });
    } finally {
      commit('SET_RECOVERING', false);
    }
  },

  clearError({ commit }) {
    commit('CLEAR_ERROR');
  }
};

const mutations = {
  SET_ERROR(state, error) {
    state.currentError = error;
    state.errorHistory.push({
      ...error,
      timestamp: new Date()
    });
  },

  CLEAR_ERROR(state) {
    state.currentError = null;
  },

  SET_RECOVERING(state, isRecovering) {
    state.isRecovering = isRecovering;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};