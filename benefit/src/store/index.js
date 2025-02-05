import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

// Core modules
import auth from './modules/auth';
import errors from './modules/errors';
import loading from './modules/loading';

// Measurement modules
import measurements from './modules/measurements';
import eyewear from './modules/measurements/eyewear';
import footwear from './modules/measurements/footwear';
import accessory from './modules/measurements/accessory';
import clothingItems from './modules/clothingItems';

// Cache configuration
const vuexLocal = new VuexPersistence({
  key: 'benefit-app',
  storage: window.localStorage,
  modules: ['measurements', 'eyewear', 'footwear', 'accessory'],
  reducer: (state) => ({
    measurements: {
      selectedType: state.measurements?.selectedType,
      isCalibrated: state.measurements?.isCalibrated,
      calibrationData: state.measurements?.calibrationData
    },
    eyewear: {
      measurements: state.eyewear?.measurements || [],
      lastUpdated: state.eyewear?.lastUpdated
    },
    footwear: {
      measurements: state.footwear?.measurements || [],
      lastUpdated: state.footwear?.lastUpdated
    },
    accessory: {
      measurements: state.accessory?.measurements || [],
      lastUpdated: state.accessory?.lastUpdated
    }
  }),
  filter: (mutation) => {
    const blacklist = [
      'SET_ERROR',
      'SET_LOADING',
      'RESET_STATE',
      'SET_PROCESSING_STATUS',
      'SET_TEMPORARY_DATA'
    ];
    return !blacklist.includes(mutation.type);
  }
});

// Create store with modules explicitly defined
const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  
  modules: {
    auth,
    errors,
    loading,
    measurements,
    eyewear,
    footwear,
    accessory,
    clothingItems
  },

  // Root state
  state: {
    version: '1.0.0'
  },

  // Root getters
  getters: {
    version: state => state.version
  },

  plugins: [vuexLocal.plugin]
});

// Plugin to clear certain cached data on logout
store.subscribe((mutation) => {
  if (mutation.type === 'auth/SET_USER' && mutation.payload === null) {
    store.commit('measurements/RESET_STATE');
    store.commit('eyewear/RESET_STATE');
    store.commit('footwear/RESET_STATE');
    store.commit('accessory/RESET_STATE');
  }
});

// Development helpers
if (process.env.NODE_ENV === 'development') {
  window.$store = store;
}

export default store;