// utils/errorHandlers.js
import { ErrorTypes, ErrorSeverity } from './errorTypes';
import router from '@/router';

export class AppError extends Error {
  constructor(type, message, severity = ErrorSeverity.MEDIUM, originalError = null) {
    super(message);
    this.type = type;
    this.severity = severity;
    this.originalError = originalError;
    this.timestamp = new Date();
  }
}

export const errorHandlers = {
  [ErrorTypes.NETWORK]: () => ({
    message: 'Network connection error. Please check your internet connection.',
    severity: ErrorSeverity.HIGH,
    recoverable: true,
    recovery: () => window.location.reload()
  }),

  [ErrorTypes.AUTHENTICATION]: () => ({
    message: 'Authentication error. Please log in again.',
    severity: ErrorSeverity.HIGH,
    recoverable: true,
    recovery: () => router.push('/auth')
  }),

  [ErrorTypes.VALIDATION]: (error) => ({
    message: error.message || 'Validation error. Please check your input.',
    severity: ErrorSeverity.LOW,
    recoverable: true,
    recovery: null
  }),

  [ErrorTypes.SERVER]: () => ({
    message: 'Server error. Please try again later.',
    severity: ErrorSeverity.HIGH,
    recoverable: false,
    recovery: null
  }),

  [ErrorTypes.MEASUREMENT]: (error) => ({
    message: error.message || 'Measurement error. Please try again.',
    severity: ErrorSeverity.MEDIUM,
    recoverable: true,
    recovery: () => router.push('/measurement-process')
  }),

  [ErrorTypes.CAMERA]: (error) => ({
    message: error.message || 'Camera error. Please check camera permissions.',
    severity: ErrorSeverity.HIGH,
    recoverable: true,
    recovery: () => window.location.reload()
  }),

  [ErrorTypes.CALIBRATION]: (error) => ({
    message: error.message || 'Calibration error. Please recalibrate.',
    severity: ErrorSeverity.MEDIUM,
    recoverable: true,
    recovery: null
  }),

  [ErrorTypes.UNKNOWN]: () => ({
    message: 'An unexpected error occurred. Please try again.',
    severity: ErrorSeverity.MEDIUM,
    recoverable: true,
    recovery: null
  })
};
