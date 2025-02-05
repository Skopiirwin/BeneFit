class CacheService {
  constructor() {
    this.CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    this.CACHE_KEY = 'benefit-app';
    this.AUTH_CACHE_KEY = 'auth-cache';
  }

  getCacheTimestamp() {
    const cache = localStorage.getItem(this.CACHE_KEY);
    if (!cache) return null;
    
    try {
      const parsed = JSON.parse(cache);
      return parsed._timestamp;
    } catch {
      return null;
    }
  }

  isCacheExpired() {
    const timestamp = this.getCacheTimestamp();
    if (!timestamp) return true;
    
    const now = Date.now();
    return (now - timestamp) > this.CACHE_DURATION;
  }

  clearCache() {
    localStorage.removeItem(this.CACHE_KEY);
  }

  clearAuthCache() {
    localStorage.removeItem(this.AUTH_CACHE_KEY);
    localStorage.removeItem('user');
  }

  getAuthCache() {
    try {
      const authCache = localStorage.getItem(this.AUTH_CACHE_KEY);
      return authCache ? JSON.parse(authCache) : null;
    } catch {
      return null;
    }
  }

  updateAuthCache(headers, userData) {
    localStorage.setItem(this.AUTH_CACHE_KEY, JSON.stringify({ headers, userData }));
  }

  updateCacheTimestamp() {
    const cache = localStorage.getItem(this.CACHE_KEY);
    if (!cache) return;

    try {
      const parsed = JSON.parse(cache);
      parsed._timestamp = Date.now();
      localStorage.setItem(this.CACHE_KEY, JSON.stringify(parsed));
    } catch {
      this.clearCache();
    }
  }
}

export default new CacheService();