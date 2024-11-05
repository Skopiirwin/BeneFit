// src/services/fileService.js
import axios from 'axios';

export default {
  async getSecureFileUrl(fileKey) {
    try {
      const response = await axios.get(`/files/${encodeURIComponent(fileKey)}`);
      return response.data.url;
    } catch (error) {
      console.error('Error getting secure file URL:', error);
      throw error;
    }
  },

  async displayFile(fileKey) {
    try {
      const secureUrl = await this.getSecureFileUrl(fileKey);
      return secureUrl;
    } catch (error) {
      console.error('Error displaying file:', error);
      throw error;
    }
  }
};
