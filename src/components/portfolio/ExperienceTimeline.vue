<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({ experience: { type: Object, required: true } })
const { t } = useI18n()

// Map known companies to i18n base keys for entry-specific translation
const companyKeyMap = new Map([
  ['Ministry of Health', 'experience.entries.ministryOfHealth'],
  ['Ecoinsoft Company CO.,Ltd', 'experience.entries.ecoinsoft'],
  ['PT Prak Chantoeun CO.,Ltd', 'experience.entries.prakChantoeun'],
  ['Svay Rieng University', 'experience.entries.svayRiengUniversity'],
])

function translateEntryField(entry, field) {
  const base = companyKeyMap.get(entry.company)
  if (!base) return entry[field]
  const key = `${base}.${field}`
  const translated = t(key)
  return translated || entry[field]
}

function translateRoleField(entry, roleIndex, field) {
  const base = companyKeyMap.get(entry.company)
  if (!base) return entry.roles[roleIndex][field]
  const key = `${base}.roles.${roleIndex}.${field}`
  const translated = t(key)
  return translated || entry.roles[roleIndex][field]
}

function translateHighlight(entry, roleIndex, highlightIndex, fallback) {
  const base = companyKeyMap.get(entry.company)
  if (!base) return fallback
  const key = `${base}.roles.${roleIndex}.highlights.${highlightIndex}`
  const translated = t(key)
  return translated || fallback
}
</script>

<template>
  <section id="experience" class="py-20 px-5 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-[1100px] mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up">
          <span class="gradient-text">{{ t('experience.title') }}</span>
        </h2>
        <div
          class="w-20 h-1 bg-gradient-to-r from-brand-600 to-accent-purple mx-auto rounded-full"
        ></div>
      </div>

      <div class="space-y-10">
        <div
          v-for="(entry, i) in experience.timeline"
          :key="i"
          class="relative pl-8 md:pl-12 border-l-2 border-gradient-to-b from-brand-300 to-accent-purple/30 hover:border-brand-600 transition-all duration-500 animate-slide-in-left group"
          :style="`animation-delay: ${i * 0.15}s`"
        >
          <!-- Timeline dot with pulse effect -->
          <div
            class="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-brand-600 to-accent-purple border-4 border-white shadow-lg group-hover:scale-125 group-hover:shadow-glow transition-all duration-500 animate-pulse-slow"
          ></div>

          <!-- Connecting line glow effect -->
          <div
            class="absolute -left-[2px] top-8 w-0.5 h-full bg-gradient-to-b from-brand-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div
            class="relative bg-white rounded-card-lg p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-x-2 overflow-hidden group"
          >
            <!-- Decorative gradient corner -->
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-100 to-accent-purple/10 rounded-bl-full opacity-50 transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"
            ></div>

            <div class="relative z-10">
              <div class="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div>
                  <h3
                    class="text-2xl font-bold bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent"
                  >
                    {{ translateEntryField(entry, 'company') }}
                  </h3>
                  <span
                    v-if="entry.location"
                    class="text-sm text-gray-600 flex items-center gap-1 mt-1"
                  >
                    <span class="text-brand-500">📍</span>
                    {{ translateEntryField(entry, 'location') }}
                  </span>
                </div>
                <span
                  class="text-xs font-semibold bg-gradient-to-r from-brand-600 to-accent-purple text-white px-4 py-2 rounded-full shadow-sm"
                >
                  {{ translateEntryField(entry, 'period') }}
                </span>
              </div>

              <div class="space-y-6">
                <div v-for="(r, j) in entry.roles" :key="j">
                  <h4 class="text-xl font-bold text-brand-700 mb-2">
                    {{ translateRoleField(entry, j, 'title') }}
                  </h4>
                  <p class="text-gray-700 leading-relaxed mb-4">
                    {{ translateRoleField(entry, j, 'summary') }}
                  </p>

                  <ul class="space-y-2.5">
                    <li
                      v-for="(h, k) in r.highlights"
                      :key="k"
                      class="flex items-start gap-3 text-gray-700 hover:text-brand-700 hover:translate-x-2 transition-all duration-300 group/item"
                    >
                      <span
                        class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-brand-500 to-accent-purple text-white text-xs font-bold mt-0.5 group-hover/item:scale-110 transition-transform duration-300 flex-shrink-0"
                        >✓</span
                      >
                      <span class="flex-1">{{ translateHighlight(entry, j, k, h) }}</span>
                    </li>
                  </ul>
                </div>
              </div>
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
