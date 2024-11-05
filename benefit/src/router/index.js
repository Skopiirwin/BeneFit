import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue');
const AuthForm = () => import(/* webpackChunkName: "auth" */ '../components/AuthForm.vue');
const AppDashboard = () => import(/* webpackChunkName: "dashboard" */ '../views/AppDashboard.vue');
const UserMeasurements = () => import(/* webpackChunkName: "measurements" */ '../components/UserMeasurements.vue');
const BodyScanComponent = () => import(/* webpackChunkName: "bodyscan" */ '../components/BodyScanComponent.vue');
const SizeRecommendationComponent = () => import(/* webpackChunkName: "sizerecommendation" */ '../components/ClothingItems.vue');
const MeasurementProcess = () => import(/* webpackChunkName: "measurementprocess" */ '../components/MeasurementProcess.vue');
const AboutView = () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue');

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthForm,
    meta: { requiresGuest: true }, // Prevent authenticated users from accessing auth page
  },
  {
    path: '/dashboard',
    name: 'AppDashboard',
    component: AppDashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/measurements',
    name: 'Measurements',
    component: UserMeasurements,
    meta: { requiresAuth: true },
  },
  {
    path: '/body-scan',
    name: 'BodyScan',
    component: BodyScanComponent,
    meta: { requiresAuth: true },
  },
  {
    path: '/size-recommendation',
    name: 'SizeRecommendation',
    component: SizeRecommendationComponent,
    meta: { requiresAuth: true },
  },
  {
    path: '/measurement-process',
    name: 'MeasurementProcess',
    component: MeasurementProcess,
    meta: { requiresAuth: true },
  },
  {
    path: '/measurements/new',
    name: 'NewMeasurement',
    component: () => import('../views/NewMeasurement.vue'),
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Enhanced navigation guard
router.beforeEach(async (to, from, next) => {
  // Try to restore auth state from localStorage
  await store.dispatch('auth/checkAuth');
  
  const isAuthenticated = store.getters['auth/isAuthenticated'];
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest);

  if (requiresAuth && !isAuthenticated) {
    // Save the intended destination
    next({ 
      name: 'Auth', 
      query: { redirect: to.fullPath } 
    });
  } else if (requiresGuest && isAuthenticated) {
    next({ name: 'AppDashboard' });
  } else {
    next();
  }
});

export default router;