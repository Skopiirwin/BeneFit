// src/store/modules/auth.js
export default {
  namespaced: true,
  
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
    isAuthenticated: false
  },

  getters: {
    isAuthenticated: state => state.isAuthenticated,
    currentUser: state => state.user,
    isLoading: state => state.loading,
    error: state => state.error
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
    SET_AUTHENTICATED(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    }
  },

  actions: {
    async login({ commit }, credentials) {
      commit('SET_LOADING', true);
      commit('SET_ERROR', null);
      
      try {
        const response = await this.$axios.post('/auth/sign_in', { 
          session: {
            user: {
              email: credentials.email,
              password: credentials.password
            }
          }
        });

        if (response.headers['access-token']) {
          const authHeaders = {
            'access-token': response.headers['access-token'],
            'token-type': response.headers['token-type'],
            'client': response.headers['client'],
            'expiry': response.headers['expiry'],
            'uid': response.headers['uid']
          };
          localStorage.setItem('auth-headers', JSON.stringify(authHeaders));
        }

        if (response.data?.status === 'success' && response.data.data?.user) {
          const userData = response.data.data.user;
          commit('SET_USER', userData);
          commit('SET_AUTHENTICATED', true);
          return response.data;
        } else {
          throw new Error(response.data?.errors?.[0] || 'Login failed');
        }
      } catch (error) {
        commit('SET_USER', null);
        commit('SET_AUTHENTICATED', false);
        const errorMessage = error.response?.data?.errors?.[0] || 
                           error.message || 
                           'Login failed';
        commit('SET_ERROR', errorMessage);
        throw error;
      } finally {
        commit('SET_LOADING', false);
      }
    },

    async logout({ commit }) {
      try {
        const headers = JSON.parse(localStorage.getItem('auth-headers') || '{}');
        await this.$axios.delete('/auth/sign_out', { headers });
      } catch (error) {
        console.error('Logout error:', error);
      } finally {
        commit('SET_USER', null);
        commit('SET_AUTHENTICATED', false);
        localStorage.removeItem('auth-headers');
      }
    },

    // Check authentication status
    async checkAuth({ commit }) {
      const authHeaders = localStorage.getItem('auth-headers');
      const userData = localStorage.getItem('user');
      
      if (authHeaders && userData) {
        commit('SET_USER', JSON.parse(userData));
        commit('SET_AUTHENTICATED', true);
      } else {
        commit('SET_USER', null);
        commit('SET_AUTHENTICATED', false);
      }
    }
  }
}