export default {
  namespaced: true,
  
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
    isAuthenticated: false,
    checkingAuth: false
  },

  getters: {
    isAuthenticated: state => state.isAuthenticated,
    currentUser: state => state.user,
    isLoading: state => state.loading,
    error: state => state.error,
    isCheckingAuth: state => state.checkingAuth
  },

  mutations: {
    SET_USER(state, userData) {
      state.user = userData;
      state.isAuthenticated = !!userData;
      if (userData) {
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        localStorage.removeItem('user');
      }
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_CHECKING_AUTH(state, status) {
      state.checkingAuth = status;
    },
    CLEAR_AUTH_STATE(state) {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.removeItem('user');
      localStorage.removeItem('auth-headers');
    }
  },

  actions: {
    async checkAuth({ commit }) {
      try {
        const response = await this.$axios.get('/api/v1/user_measurements/recent');
        return response.status === 200;
      } catch (error) {
        commit('CLEAR_AUTH_STATE');
        return false;
      }
    },

    async login({ commit }, credentials) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      
      try {
        const response = await this.$axios.post('/api/auth/sign_in', { user: credentials });
        
        if (response.headers['access-token']) {
          const authHeaders = {
            'access-token': response.headers['access-token'],
            'client': response.headers.client,
            'uid': response.headers.uid
          };
          localStorage.setItem('auth-headers', JSON.stringify(authHeaders));
        }
        
        commit('SET_USER', response.data.data.user);
        return { status: 'success', data: response.data.data };
      } catch (error) {
        console.error('Login error:', error);
        commit('SET_ERROR', error.response?.data?.status?.message || 'Authentication failed');
        commit('CLEAR_AUTH_STATE');
        throw error;
      } finally {
        commit('SET_LOADING', false);
      }
    },
    
    async register({ commit }, userData) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      
      try {
        const response = await this.$axios.post('/api/auth', { user: userData });
        
        if (response.headers['access-token']) {
          const authHeaders = {
            'access-token': response.headers['access-token'],
            'client': response.headers.client,
            'uid': response.headers.uid
          };
          localStorage.setItem('auth-headers', JSON.stringify(authHeaders));
        }
        
        commit('SET_USER', response.data.data.user);
        return { status: 'success', data: response.data.data };
      } catch (error) {
        console.error('Registration error:', error);
        commit('SET_ERROR', error.message);
        throw error;
      } finally {
        commit('SET_LOADING', false);
      }
    },

    async logout({ commit }) {
      commit('SET_LOADING', true);
      
      try {
        await this.$axios.delete('/api/auth/sign_out');
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        commit('CLEAR_AUTH_STATE');
        commit('SET_LOADING', false);
      }
    },

    clearError({ commit }) {
      commit('SET_ERROR', null);
    }
  }
}