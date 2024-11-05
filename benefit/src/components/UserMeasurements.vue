<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-4">Your Measurements</h2>
    <Form @submit="submitMeasurement" :validation-schema="schema" v-slot="{ errors }">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(value, key) in formValues" :key="key" class="mb-4">
          <label :for="key" class="block text-sm font-medium text-gray-700">{{ formLabels[key] }}:</label>
          <Field :name="key" type="number" :id="key" v-model="formValues[key]" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          <ErrorMessage :name="key" class="text-red-500 text-xs mt-1" />
        </div>
      </div>
      <button type="submit" :disabled="Object.keys(errors).length > 0" class="mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
        {{ isEditing ? 'Update' : 'Add' }} Measurement
      </button>
    </Form>

    <h3 class="text-xl font-bold my-6">Measurement History</h3>
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th v-for="label in Object.values(formLabels)" :key="label" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              {{ label }}
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="measurement in measurements" :key="measurement.id">
            <td v-for="(value, key) in measurement" :key="key" class="px-6 py-4 whitespace-nowrap">
              {{ value }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
              <button @click="editMeasurement(measurement)" class="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
              <button @click="deleteMeasurement(measurement.id)" class="text-red-600 hover:text-red-900">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <AppModal v-if="showDeleteModal" @close="showDeleteModal = false">
      <h3 class="text-lg font-medium leading-6 text-gray-900 mb-4">Confirm Deletion</h3>
      <p class="text-sm text-gray-500 mb-4">Are you sure you want to delete this measurement? This action cannot be undone.</p>
      <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <button @click="confirmDelete" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700">
          Delete
        </button>
        <button @click="showDeleteModal = false" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50">
          Cancel
        </button>
      </div>
    </AppModal>
  </div>
</template>

<script>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import AppModal from '@/components/AppModal.vue';

export default {
  components: { Form, Field, ErrorMessage, AppModal },
  setup() {
    const measurements = ref([]);
    const isEditing = ref(false);
    const editingId = ref(null);
    const showDeleteModal = ref(false);
    const deletingId = ref(null);

    const formValues = ref({
      weight: '',
      height: '',
      chest: '',
      waist: '',
      hips: ''
    });

    const formLabels = {
      weight: 'Weight (kg)',
      height: 'Height (cm)',
      chest: 'Chest (cm)',
      waist: 'Waist (cm)',
      hips: 'Hips (cm)',
    };

    const schema = yup.object().shape({
      weight: yup.number().positive().required('Weight is required'),
      height: yup.number().positive().required('Height is required'),
      chest: yup.number().positive().required('Chest is required'),
      waist: yup.number().positive().required('Waist is required'),
      hips: yup.number().positive().required('Hips are required'),
    });

    const submitMeasurement = async (values) => {
      try {
        if (isEditing.value) {
          await updateMeasurement(editingId.value, values);
        } else {
          await addMeasurement(values);
        }
        resetForm();
        fetchMeasurements();
      } catch (error) {
        console.error('Error submitting measurement:', error);
      }
    };

    const editMeasurement = (measurement) => {
      isEditing.value = true;
      editingId.value = measurement.id;
      formValues.value = { ...measurement };
    };

    const deleteMeasurement = (id) => {
      showDeleteModal.value = true;
      deletingId.value = id;
    };

    const confirmDelete = async () => {
      try {
        await deleteMeasurementFromAPI(deletingId.value);
        showDeleteModal.value = false;
        fetchMeasurements();
      } catch (error) {
        console.error('Error deleting measurement:', error);
      }
    };

    const resetForm = () => {
      isEditing.value = false;
      editingId.value = null;
      formValues.value = { weight: '', height: '', chest: '', waist: '', hips: '' };
    };

    const fetchMeasurements = async () => {
      // Simulating API call
      measurements.value = [
        { id: 1, weight: 70, height: 175, chest: 100, waist: 80, hips: 95 },
        { id: 2, weight: 65, height: 170, chest: 95, waist: 75, hips: 90 },
      ];
    };

    const addMeasurement = async (measurement) => {
      // Simulating API call
      console.log('Adding measurement:', measurement);
      // In a real scenario, you would send this to your backend
    };

    const updateMeasurement = async (id, measurement) => {
      // Simulating API call
      console.log(`Updating measurement ${id}:`, measurement);
      // In a real scenario, you would send this to your backend
    };

    const deleteMeasurementFromAPI = async (id) => {
      // Simulating API call
      console.log(`Deleting measurement ${id}`);
      // In a real scenario, you would send this to your backend
    };

    // Initial fetch
    fetchMeasurements();

    return {
      measurements,
      formValues,
      formLabels,
      schema,
      isEditing,
      showDeleteModal,
      submitMeasurement,
      editMeasurement,
      deleteMeasurement,
      confirmDelete,
    };
  },
};
</script>