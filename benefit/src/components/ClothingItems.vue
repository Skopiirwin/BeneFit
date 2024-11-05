<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Clothing Items</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="item in clothingItems" :key="item.id" class="bg-white shadow-md rounded-lg p-4">
        <h3 class="text-lg font-semibold mb-2">{{ item.name }}</h3>
        <p class="text-gray-600 mb-4">Category: {{ item.category }}</p>
        <button @click="recommendSize(item.id)" class="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Recommend Size
        </button>
      </div>
    </div>
    <div v-if="recommendedSize" class="mt-8 p-4 bg-green-100 border-l-4 border-green-500 text-green-700">
      <p class="font-bold">Recommended Size: {{ recommendedSize }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ClothingItems',
  setup() {
    const clothingItems = ref([
      { id: 1, name: 'T-Shirt', category: 'Tops' },
      { id: 2, name: 'Jeans', category: 'Bottoms' },
      // Add more items as needed
    ]);
    const recommendedSize = ref(null);

    const recommendSize = async (itemId) => {
      try {
        // Use itemId in the fetchRecommendedSize function
        const size = await fetchRecommendedSize(itemId);
        recommendedSize.value = size;
      } catch (error) {
        console.error('Error fetching recommended size:', error);
        recommendedSize.value = 'Unable to recommend size';
      }
    };

    const fetchRecommendedSize = async (itemId) => {
      // Simulating an API call that uses the itemId
      console.log(`Fetching size recommendation for item ${itemId}`);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      const sizes = ['XS', 'S', 'M', 'L', 'XL'];
      return sizes[Math.floor(Math.random() * sizes.length)]; // Random size for demonstration
    };

    return {
      clothingItems,
      recommendedSize,
      recommendSize,
    };
  },
};
</script>