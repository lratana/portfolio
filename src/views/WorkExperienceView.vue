<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { fetchWorkExperience } from '@/api/workExperience'

const repos = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    repos.value = await fetchWorkExperience()
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section class="py-20 px-5 bg-white">
    <div class="max-w-[1100px] mx-auto">
      <h2 class="text-4xl font-extrabold mb-8">Work Experience (GitHub API)</h2>
      <div v-if="loading" class="text-center py-10">Loading…</div>
      <div v-else-if="error" class="text-center text-red-500 py-10">{{ error }}</div>
      <div v-else>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="repo in repos" :key="repo.id" class="border rounded-lg p-6 bg-gray-50">
            <h3 class="font-bold text-xl mb-2">{{ repo.name }}</h3>
            <p class="text-gray-700 mb-2">{{ repo.description }}</p>
            <a :href="repo.html_url" target="_blank" class="text-brand-600 underline"
              >View on GitHub</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <RouterView />
</template>

<style scoped>
/* Tailwind handles all styling */
</style>
