// src/components/BodyScanDisplay.vue
<template>
  <div>
    <img v-if="scanUrl" :src="scanUrl" alt="Body Scan" />
    <p v-else-if="error">{{ error }}</p>
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import fileService from '@/services/fileService';

export default {
  name: 'BodyScanDisplay',
  props: {
    fileKey: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      scanUrl: null,
      error: null
    };
  },
  async mounted() {
    try {
      this.scanUrl = await fileService.displayFile(this.fileKey);
    } catch (error) {
      this.error = 'Error loading body scan image';
    }
  }
};
</script>
