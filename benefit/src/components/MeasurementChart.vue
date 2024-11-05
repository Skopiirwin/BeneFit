<template>
  <div class="chart-container">
    <LineChart :chart-data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { LineChart } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale);

export default defineComponent({
  name: 'MeasurementChart',
  components: { LineChart },
  props: {
    measurements: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const chartData = computed(() => {
      const labels = props.measurements.map(m => new Date(m.created_at).toLocaleDateString());
      const datasets = [
        {
          label: 'Weight (kg)',
          data: props.measurements.map(m => m.weight),
          borderColor: '#4c51bf',
          fill: false,
        },
        {
          label: 'Chest (cm)',
          data: props.measurements.map(m => m.chest),
          borderColor: '#ed64a6',
          fill: false,
        },
        // Add more datasets for other measurements if necessary
      ];
      return { labels, datasets };
    });

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };

    return { chartData, chartOptions };
  }
});
</script>

<style>
.chart-container {
  height: 400px;
}
</style>
