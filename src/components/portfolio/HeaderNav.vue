<script setup>
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const props = defineProps({
  site: { type: Object, required: true },
})

const { t } = useI18n()

const navItems = [
  { key: 'home', to: '#hero' },
  { key: 'skills', to: '#skills' },
  { key: 'works', to: '#works' },
  { key: 'education', to: '#education' },
  { key: 'experience', to: '#experience' },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-xl border-b border-gray-800 shadow-lg transition-all duration-300"
  >
    <div class="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between gap-6">
      <!-- Logo Section -->
      <div class="flex items-center gap-3 group cursor-pointer">
        <div class="relative w-12 h-12">
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-br from-brand-600 to-accent-purple opacity-70 group-hover:opacity-90 transition-opacity duration-300"
          ></div>
          <div
            class="absolute inset-0 rounded-full ring-2 ring-brand-400/40 group-hover:ring-brand-300/70 transition-all duration-300"
          ></div>
          <img
            v-if="site.brand?.logo"
            :src="site.brand.logo"
            :alt="site.brand?.name || 'Logo'"
            class="relative w-12 h-12 rounded-full p-2 object-contain bg-white/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span
          v-if="site.brand?.name"
          class="text-white font-bold text-lg tracking-wide hidden sm:block"
        >
          {{ t('name') }}
        </span>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-2">
        <a
          v-for="(item, i) in navItems"
          :key="i"
          :href="item.to"
          class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 relative group"
        >
          {{ t(`nav.${item.key}`) }}
        </a>
      </nav>

      <!-- Right Section: Language Switcher + Contact Button -->
      <div class="flex items-center gap-3">
        <LanguageSwitcher />
        <a
          :href="`mailto:${site.contact?.email}`"
          class="px-6 py-2.5 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-brand-500/50 hover:scale-105 transition-all duration-300"
        >
          {{ t('nav.contact') }}
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Tailwind handles all styling */
</style>
