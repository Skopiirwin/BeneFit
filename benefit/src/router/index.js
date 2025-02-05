import { createRouter, createWebHistory } from 'vue-router';
import store from '../store';

// Main Views
const HomeView = () => import('@/views/HomeView.vue');
const AuthForm = () => import('@/components/AuthForm.vue');
const AppDashboard = () => import('@/views/AppDashboard.vue');
const AboutView = () => import('@/views/AboutView.vue');
const NotFound = () => import('@/views/NotFound.vue');

// Measurement Process and Steps
const MeasurementProcess = () => import('@/components/measurements/MeasurementProcess.vue');
const InitialSetupStep = () => import('@/components/measurements/steps/InitialSetupStep.vue');
const CalibrationStep = () => import('@/components/measurements/steps/CalibrationStep.vue');
const ProcessingStep = () => import('@/components/measurements/steps/ProcessingStep.vue');
const ResultsStep = () => import('@/components/measurements/steps/ResultsStep.vue');
const CompletionStep = () => import('@/components/measurements/steps/CompletionStep.vue');

// Measurement Types
const EyewearMeasurement = () => import('@/components/measurements/types/eyewear/EyewearMeasurement.vue');
const FootwearMeasurement = () => import('@/components/measurements/types/footwear/FootwearMeasurement.vue');
const AccessoryMeasurement = () => import('@/components/measurements/types/accessory/AccessoryMeasurement.vue');

const measurementGuard = async (to, from, next) => {
  const currentStep = store.state.measurements.currentStep;
  const hasType = store.state.measurements.selectedType;
  const isCalibrated = store.state.measurements.isCalibrated;
  const hasMeasurements = store.state.measurements.currentMeasurement;

  // Always allow access to type selection
  if (to.name === 'measurement-type-selection') {
    next();
    return;
  }

  // Check for measurement type
  if (!hasType && to.name !== 'measurement-type-selection') {
    next({ name: 'measurement-type-selection' });
    return;
  }

  // Define step order
  const stepOrder = {
    'measurement-type-selection': 0,
    'measurement-calibration': 1,
    'eyewear-measurement': 2,
    'footwear-measurement': 2,
    'accessory-measurement': 2,
    'measurement-processing': 3,
    'measurement-results': 4,
    'measurement-completion': 5
  };

  const targetStep = stepOrder[to.name];

  // Prevent skipping steps
  if (targetStep > currentStep + 1) {
    next(false);
    return;
  }

  // Check calibration requirement
  if (targetStep >= 2 && !isCalibrated && to.name !== 'measurement-calibration') {
    next({ name: 'measurement-calibration' });
    return;
  }

  // Check measurements requirement
  if (targetStep >= 3 && !hasMeasurements) {
    next({ name: 'measurement-type-selection' });
    return;
  }

  next();
};

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthForm,
    meta: { requiresGuest: true }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AppDashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/measurement-process',
    component: MeasurementProcess,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'measurement-type-selection',
        component: InitialSetupStep,
        meta: { step: 0 }
      },
      {
        path: 'calibration',
        name: 'measurement-calibration',
        component: CalibrationStep,
        meta: { 
          step: 1,
          requiresType: true
        }
      },
      {
        path: 'eyewear',
        name: 'eyewear-measurement',
        component: EyewearMeasurement,
        meta: { 
          step: 2,
          requiresType: true,
          requiresCalibration: true,
          measurementType: 'eyewear'
        }
      },
      {
        path: 'footwear',
        name: 'footwear-measurement',
        component: FootwearMeasurement,
        meta: { 
          step: 2,
          requiresType: true,
          requiresCalibration: true,
          measurementType: 'footwear'
        }
      },
      {
        path: 'accessory',
        name: 'accessory-measurement',
        component: AccessoryMeasurement,
        meta: { 
          step: 2,
          requiresType: true,
          requiresCalibration: true,
          measurementType: 'accessory'
        }
      },
      {
        path: 'processing',
        name: 'measurement-processing',
        component: ProcessingStep,
        meta: { 
          step: 3,
          requiresType: true,
          requiresCalibration: true,
          requiresMeasurements: true
        }
      },
      {
        path: 'results',
        name: 'measurement-results',
        component: ResultsStep,
        meta: { 
          step: 4,
          requiresType: true,
          requiresCalibration: true,
          requiresMeasurements: true
        }
      },
      {
        path: 'completion',
        name: 'measurement-completion',
        component: CompletionStep,
        meta: { 
          step: 5,
          requiresType: true,
          requiresCalibration: true,
          requiresMeasurements: true
        }
      }
    ],
    beforeEnter: measurementGuard
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// Global navigation guard
router.beforeEach(async (to, from, next) => {
  if (from.name === to.name) {
    next(false);
    return;
  }
  
  try {
    await store.dispatch('auth/checkAuth');
    const isAuthenticated = store.getters['auth/isAuthenticated'];

    // Auth route protection
    if (to.meta.requiresAuth && !isAuthenticated) {
      next({ 
        name: 'auth', 
        query: { redirect: to.fullPath } 
      });
      return;
    }

    // Guest route protection
    if (to.meta.requiresGuest && isAuthenticated) {
      next({ name: 'dashboard' });
      return;
    }

    // Reset measurement process when leaving it
    if (from.path.startsWith('/measurement-process') && !to.path.startsWith('/measurement-process')) {
      await store.dispatch('measurements/resetMeasurementProcess');
    }

    next();
  } catch (error) {
    console.error('Navigation error:', error);
    next({ name: 'not-found' });
  }
});

export default router;