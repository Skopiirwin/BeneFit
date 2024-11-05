<template>
  <div>
    <video ref="video" width="640" height="480" autoplay></video>
    <canvas ref="canvas" width="640" height="480" @click="handleCanvasClick"></canvas>

    <div>
      <button @click="capturePose('front')">Capture Front</button>
      <button @click="capturePose('side')">Capture Side</button>
      <button @click="capturePose('back')">Capture Back</button>
    </div>

    <button @click="processAllPoses" :disabled="!allPosesCaptured">Process All Poses</button>

    <div v-if="!isCalibrating">
      <button @click="startCalibration">Calibrate</button>
    </div>
    <div v-else>
      <p>Click two points to measure your credit card width.</p>
    </div>

    <div v-if="scanFileKey">
      <img v-lazy="`/path/to/body-scans/${scanFileKey}`" alt="Body Scan Image" />
    </div>

    <!-- FileUpload is commented until implemented -->
    <!-- <FileUpload @file-uploaded="handleFileUploaded" /> -->
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue';
// import FileUpload from './FileUpload.vue'; // Uncomment if implemented
// import { Calibration } from './path-to-calibration'; // Uncomment if implemented

export default {
  components: {
    // FileUpload, // Uncomment if implemented
  },
  setup() {
    const video = ref(null);
    const canvas = ref(null);
    const poses = reactive({
      front: null,
      side: null,
      back: null,
    });
    const scanFileKey = ref(null);
    const allPosesCaptured = computed(() => poses.front && poses.side && poses.back);

    const capturePose = (poseType) => {
      const ctx = canvas.value.getContext('2d');
      ctx.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
      poses[poseType] = canvas.value.toDataURL();
    };

    const processAllPoses = async () => {
      if (!allPosesCaptured.value) return;
      try {
        const measurements = await performPoseEstimation();
        console.log('Body measurements:', measurements);
        scanFileKey.value = "users/1234/body_scan.png"; // Replace with actual S3 key
      } catch (error) {
        console.error('Error processing poses:', error);
      }
    };

    const performPoseEstimation = () => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(new URL('../workers/poseEstimationWorker.js', import.meta.url));
        worker.onmessage = (e) => resolve(e.data);
        worker.onerror = (error) => reject(error);

        const imageData = {
          front: poses.front,
          side: poses.side,
          back: poses.back,
        };
        worker.postMessage(imageData);
      });
    };

    const handleFileUploaded = (fileKey) => {
      scanFileKey.value = fileKey;
    };

    const startCalibration = () => {
      // calibration.start(); // Uncomment when implemented
    };

    const handleCanvasClick = (event) => {
      const { offsetX, offsetY } = event; // eslint-disable-line no-unused-vars
      // Uncomment and implement calibration point logic if needed
      // calibration.addPoint({ x: offsetX, y: offsetY });
    };

    return {
      video,
      canvas,
      poses,
      allPosesCaptured,
      capturePose,
      processAllPoses,
      startCalibration,
      handleCanvasClick,
      scanFileKey,
      handleFileUploaded,
    };
  },
};
</script>
