<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { fetchWorkExperience } from '@/api/workExperience'

const { t } = useI18n()
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
  <section id="work-experience-api" class="py-20 px-5 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up">
          <span class="gradient-text">{{ t('githubProjects.title') }}</span>
        </h2>
        <div
          class="w-20 h-1 bg-gradient-to-r from-brand-600 to-accent-purple mx-auto rounded-full"
        ></div>
      </div>

      <div v-if="loading" class="text-center py-10">
        <div
          class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-600"
        ></div>
        <p class="mt-4 text-gray-600">{{ t('githubProjects.loading') }}</p>
      </div>

      <div v-else-if="error" class="text-center text-red-500 py-10 bg-red-50 rounded-lg">
        <p class="text-lg font-semibold">{{ error }}</p>
      </div>

      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(repo, idx) in repos"
          :key="repo.id"
          class="group bg-white rounded-card-lg p-6 border-2 border-gray-100 hover:border-brand-300 hover:shadow-card-hover transition-all duration-500 animate-scale-in"
          :style="`animation-delay: ${idx * 0.05}s`"
        >
          <div class="flex items-start justify-between mb-4">
            <h3
              class="text-xl font-bold text-gray-900 group-hover:text-brand-700 transition-colors duration-300 flex-1"
            >
              {{ repo.name }}
            </h3>
            <span
              v-if="repo.stargazers_count > 0"
              class="flex items-center gap-1 text-sm text-gray-600"
            >
              ⭐ {{ repo.stargazers_count }}
            </span>
          </div>

          <p class="text-gray-700 text-sm mb-4 line-clamp-3">
            {{ repo.description || t('githubProjects.noDescription') }}
          </p>

          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-if="repo.language"
              class="px-3 py-1 bg-gradient-to-r from-brand-50 to-accent-purple/10 text-brand-700 text-xs font-medium rounded-full border border-brand-200"
            >
              {{ repo.language }}
            </span>
          </div>

          <a
            :href="repo.html_url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold text-sm transition-all duration-300 hover:gap-3"
          >
            {{ t('githubProjects.viewOnGithub') }}
            <span>→</span>
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
