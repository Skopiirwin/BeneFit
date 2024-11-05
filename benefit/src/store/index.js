import { createStore } from 'vuex';
import auth from './modules/auth';
import measurements from './modules/measurements';
import clothingItems from './modules/clothingItems';

export default createStore({
  modules: {
    auth,
    measurements,
    clothingItems,
  },
});
