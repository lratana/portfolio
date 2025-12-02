<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({ education: { type: Object, required: true } })
const { t } = useI18n()

// Map known education entries to i18n keys
const educationKeyMap = new Map([
  ['Advanced Microsoft Excel Course', 'education.entries.advancedExcel'],
  ['Computer Graphic Design', 'education.entries.graphicDesign'],
  ['Bachelor Degree in Computer Science', 'education.entries.bachelorCS'],
  ['High School Diploma', 'education.entries.highSchool'],
  ['Secondary School Certificate', 'education.entries.secondarySchool'],
])

function translateEducationField(item, field) {
  const base = educationKeyMap.get(item.degree)
  if (!base) return item[field]
  const key = `${base}.${field}`
  const translated = t(key)
  return translated || item[field]
}
</script>

<template>
  <section id="education" class="py-20 px-5 bg-white">
    <div class="max-w-[1100px] mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up">
          <span class="gradient-text">{{ t('education.title') }}</span>
        </h2>
        <div
          class="w-20 h-1 bg-gradient-to-r from-brand-600 to-accent-purple mx-auto rounded-full"
        ></div>
      </div>

      <div class="space-y-8">
        <div
          v-for="(item, i) in education.timeline"
          :key="i"
          class="relative pl-8 md:pl-12 border-l-2 border-brand-300 hover:border-brand-600 transition-all duration-500 animate-slide-in-left group"
          :style="`animation-delay: ${i * 0.1}s`"
        >
          <!-- Timeline dot -->
          <div
            class="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-brand-600 to-accent-purple border-4 border-white shadow-lg group-hover:scale-125 group-hover:shadow-glow transition-all duration-500"
          ></div>

          <div
            class="bg-gradient-to-br from-white to-gray-50 rounded-card-lg p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-x-2 border border-gray-100 group-hover:border-brand-300 overflow-hidden"
          >
            <!-- Decorative corner -->
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-100 to-accent-purple/10 rounded-bl-full opacity-50 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"
            ></div>

            <div class="relative z-10">
              <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div class="flex-1">
                  <h3 class="text-2xl font-bold text-gray-900 mb-1">{{ translateEducationField(item, 'degree') }}</h3>
                  <p class="text-brand-700 font-semibold flex items-center gap-2">
                    <span class="text-lg">🎓</span>
                    {{ translateEducationField(item, 'institution') }}
                  </p>
                </div>
                <span
                  class="text-sm font-bold bg-gradient-to-r from-brand-600 to-accent-purple text-white px-4 py-2 rounded-full shadow-sm whitespace-nowrap"
                >
                  {{ translateEducationField(item, 'year') }}
                </span>
              </div>

              <p class="text-gray-700 leading-relaxed">{{ translateEducationField(item, 'description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tailwind handles all styling */
</style>
