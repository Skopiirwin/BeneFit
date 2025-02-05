<template>
  <div class="dashboard-container min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center h-64">
        <div class="text-gray-500">Loading...</div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="bg-red-50 p-4 rounded-md">
        <p class="text-red-700">{{ error }}</p>
      </div>

      <!-- Content -->
      <div v-else>
        <!-- Welcome Section -->
        <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div>
              <h1 class="text-3xl font-bold text-gray-900">
                Welcome back, {{ currentUser?.name || 'User' }}!
              </h1>
              <p class="mt-2 text-sm text-gray-600">
                Here's what's happening with your measurements and recommendations
              </p>
            </div>
            <div class="mt-4 sm:mt-0">
              <router-link
                to="/measurements/new"
                class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Add New Measurements
              </router-link>
            </div>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <div v-for="stat in statistics" :key="stat.name" 
               class="bg-white overflow-hidden shadow-sm rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <component 
                    :is="stat.icon" 
                    class="h-6 w-6 text-gray-400" 
                    aria-hidden="true"
                  />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      {{ stat.name }}
                    </dt>
                    <dd class="flex items-baseline">
                      <div class="text-2xl font-semibold text-gray-900">
                        {{ stat.value }}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <!-- Recent Measurements -->
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6">
              <h2 class="text-lg font-medium text-gray-900">Recent Measurements</h2>
              <div v-if="recentMeasurements.length === 0" class="mt-6 text-gray-500">
                No measurements recorded yet
              </div>
              <div v-else class="mt-6 flow-root">
                <ul role="list" class="-my-5 divide-y divide-gray-200">
                  <li v-for="measurement in recentMeasurements" 
                      :key="measurement.id" 
                      class="py-5">
                    <div class="flex items-center space-x-4">
                      <div class="flex-shrink-0">
                        <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <scale-icon class="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate">
                          {{ measurement.measurement_summary }}
                        </p>
                        <p class="text-sm text-gray-500">
                          Recorded on {{ measurement.formatted_date }}
                        </p>
                      </div>
                      <div>
                        <router-link
                          :to="`/measurements/${measurement.id}`"
                          class="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                        >
                          View
                        </router-link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Profile Completion -->
          <div class="bg-white rounded-lg shadow-sm">
            <div class="p-6">
              <h2 class="text-lg font-medium text-gray-900">Profile Completion</h2>
              <div class="mt-6">
                <div class="relative pt-1">
                  <div class="flex mb-2 items-center justify-between">
                    <div>
                      <span class="text-xs font-semibold inline-block text-blue-600">
                        {{ profileCompletion }}% Complete
                      </span>
                    </div>
                  </div>
                  <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-100">
                    <div
                      :style="{ width: `${profileCompletion}%` }"
                      class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { mapGetters } from 'vuex'
import { ScaleIcon, ChartBarIcon, ClockIcon, UserIcon } from '@heroicons/vue/24/outline'
import { measurementService } from '@/services/measurements'

export default {
  name: 'AppDashboard',
  
  components: {
    ScaleIcon,
    ChartBarIcon,
    ClockIcon,
    UserIcon
  },

  setup() {
    const loading = ref(false)
    const error = ref(null)
    const recentMeasurements = ref([])
    const statistics = ref([])
    const profileCompletion = ref(0)

const fetchDashboardData = async () => {
  loading.value = true
  error.value = null
  
  try {
    const { measurements, stats } = await measurementService.getRecent()
    
    recentMeasurements.value = measurements
    profileCompletion.value = stats.profile_completion

    statistics.value = [
      {
        name: 'Total Measurements',
        value: stats.total_measurements.toString(),
        icon: ChartBarIcon
      },
      {
        name: 'Last Updated',
        value: stats.last_updated || 'Never',
        icon: ClockIcon
      },
      {
        name: 'Profile Completion',
        value: `${stats.profile_completion}%`,
        icon: UserIcon
      }
    ]
  } catch (err) {
    error.value = 'Failed to load dashboard data. Please try again.'
    console.error('Dashboard data error:', err)
  } finally {
    loading.value = false
  }
}

    onMounted(() => {
      fetchDashboardData()
    })

    return {
      loading,
      error,
      recentMeasurements,
      statistics,
      profileCompletion,
      fetchDashboardData
    }
  },

  computed: {
    ...mapGetters('auth', ['currentUser'])
  }
}
</script>

<style scoped>
.dashboard-container {
  min-height: calc(100vh - 64px); /* Adjust based on your navbar height */
  background-color: #f9fafb;
}
</style>