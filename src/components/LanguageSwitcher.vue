<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/i18n'

const { locale } = useI18n()
const isOpen = ref(false)

function switchLanguage(lang) {
  setLocale(lang)
  isOpen.value = false
}

const languages = {
  en: { flag: '🇬🇧', label: 'EN' },
  km: { flag: '🇰🇭', label: 'KH' },
}
</script>

<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="flex items-center gap-2 px-3 py-2 border border-gray-300/50 rounded-lg hover:bg-white/10 transition-all duration-200"
    >
      <span class="text-base">🌐</span>

      <span class="text-sm font-medium text-white">{{ languages[locale].label }}</span>
      <svg
        :class="[
          'w-4 h-4 text-gray-300 transition-transform duration-200',
          isOpen ? 'rotate-180' : '',
        ]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-show="isOpen"
      class="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50"
    >
      <button
        v-for="(lang, key) in languages"
        :key="key"
        @click="switchLanguage(key)"
        :class="[
          'w-full px-4 py-2.5 flex items-center gap-2 transition-colors duration-200',
          locale === key ? 'bg-brand-600 text-white' : 'text-gray-700 hover:bg-gray-50',
        ]"
      >
        <span class="text-base">{{ lang.flag }}</span>
        <span class="text-sm font-medium">{{ lang.label }}</span>
      </button>
    </div>
  </div>
</template>
