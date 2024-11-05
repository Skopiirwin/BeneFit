<template>
  <div class="file-upload">
    <input type="file" @change="handleFileChange" />
    <button @click="uploadFile" :disabled="!selectedFile">Upload File</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileChange(event) {
      this.selectedFile = event.target.files[0];
    },
    async uploadFile() {
      if (!this.selectedFile) return;

      try {
        // Assuming you are using AWS S3 or a similar service
        const formData = new FormData();
        formData.append('file', this.selectedFile);

        // Replace with actual upload logic
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        this.$emit('file-uploaded', data.fileKey); // Emit file key to parent component
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    },
  },
};
</script>

<style scoped>
.file-upload {
  margin: 10px 0;
}
</style>
