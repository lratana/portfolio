<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({ skills: { type: Object, required: true } })
const { t } = useI18n()

// Map category names to i18n keys
const categoryKeyMap = new Map([
  ['Microsoft Office', 'skills.categories.microsoftOffice'],
  ['Web Design', 'skills.categories.webDesign'],
  ['Database', 'skills.categories.database'],
  ['Framework', 'skills.categories.framework'],
  ['Front-end', 'skills.categories.frontEnd'],
  ['Back-end', 'skills.categories.backEnd'],
  ['Programming', 'skills.categories.programming'],
])

// Map skill names to i18n keys
const skillKeyMap = new Map([
  ['Word', 'skills.items.word'],
  ['Excel', 'skills.items.excel'],
  ['PowerPoint', 'skills.items.powerpoint'],
  ['Access', 'skills.items.access'],
  ['HTML', 'skills.items.html'],
  ['CSS', 'skills.items.css'],
  ['Bootstrap', 'skills.items.bootstrap'],
  ['MySQL', 'skills.items.mysql'],
  ['SQL Server', 'skills.items.sqlserver'],
  ['Flutter', 'skills.items.flutter'],
  ['Vue.js', 'skills.items.vuejs'],
  ['JavaScript', 'skills.items.javascript'],
  ['jQuery', 'skills.items.jquery'],
  ['Node.js', 'skills.items.nodejs'],
  ['C#', 'skills.items.csharp'],
  ['VB.NET', 'skills.items.vbnet'],
  ['Java', 'skills.items.java'],
])

function translateCategory(name) {
  const key = categoryKeyMap.get(name)
  return key ? t(key) : name
}

function translateSkill(name) {
  const key = skillKeyMap.get(name)
  return key ? t(key) : name
}
</script>

<template>
  <section id="skills" class="py-20 px-5 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up">
          <span class="gradient-text">{{ t('skills.title') }}</span>
        </h2>
        <div
          class="w-20 h-1 bg-gradient-to-r from-brand-600 to-accent-purple mx-auto rounded-full"
        ></div>
      </div>

      <!-- Skills Categories Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div
          v-for="(category, idx) in skills.categories"
          :key="idx"
          class="group bg-white rounded-card-lg p-6 border-2 border-gray-100 hover:border-brand-300 hover:shadow-card-hover transition-all duration-500 animate-scale-in"
          :style="`animation-delay: ${idx * 0.1}s`"
        >
          <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span
              class="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-brand-600 to-accent-purple group-hover:scale-150 transition-transform duration-300"
            ></span>
            {{ translateCategory(category.name) }}
          </h3>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, i) in category.skills"
              :key="i"
              class="px-3 py-1.5 bg-gradient-to-r from-brand-50 to-accent-purple/10 text-brand-700 text-sm font-medium rounded-full border border-brand-200 hover:border-brand-400 hover:shadow-sm hover:scale-105 transition-all duration-300 cursor-default"
            >
              {{ translateSkill(skill) }}
            </span>
          </div>
        </div>
      </div>

      <div
        v-if="skills.languages"
        class="bg-white rounded-card-lg border-2 border-gray-100 overflow-hidden shadow-lg animate-fade-in"
      >
        <div class="bg-gradient-to-r from-brand-600 to-accent-purple px-8 py-6">
          <h3 class="text-2xl font-bold text-white flex items-center justify-center gap-3">
            <span class="text-3xl">💬</span>
            {{ t('skills.languages') }}
          </h3>
        </div>
        <div class="p-8">
          <div class="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <!-- Khmer Language -->
            <div
              class="flex items-center gap-4 p-5 bg-gradient-to-br from-brand-50 to-white rounded-xl border border-brand-100 hover:shadow-md transition-all duration-300 group"
            >
              <div class="text-6xl group-hover:scale-110 transition-transform duration-300">🇰🇭</div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-gray-900 mb-1">{{ t('skills.khmer') }}</h4>
                <div class="flex items-center gap-2">
                  <div class="flex gap-1">
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
                  </div>
                  <span class="text-sm font-semibold text-brand-700">{{
                    t('skills.excellent')
                  }}</span>
                </div>
              </div>
            </div>

            <!-- English Language -->
            <div
              class="flex items-center gap-4 p-5 bg-gradient-to-br from-accent-purple/5 to-white rounded-xl border border-accent-purple/20 hover:shadow-md transition-all duration-300 group"
            >
              <div class="text-6xl group-hover:scale-110 transition-transform duration-300">🇬🇧</div>
              <div class="flex-1">
                <h4 class="text-lg font-bold text-gray-900 mb-1">{{ t('skills.english') }}</h4>
                <div class="flex items-center gap-2">
                  <div class="flex gap-1">
                    <span class="w-2.5 h-2.5 rounded-full bg-accent-purple"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-accent-purple"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-accent-purple"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-accent-purple"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
                  </div>
                  <span class="text-sm font-semibold text-accent-purple">{{
                    t('skills.good')
                  }}</span>
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
