<script setup>
import { useI18n } from 'vue-i18n'

const props = defineProps({
  footer: { type: Object, required: true },
  cta: { type: Object, required: true },
})

const { t } = useI18n()
</script>

<template>
  <footer class="border-t border-gray-200 bg-white">
    <!-- CTA Section with gradient background -->
    <section
      class="py-20 md:py-28 px-5 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-purple relative overflow-hidden"
    >
      <!-- Enhanced decorative elements -->
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-3xl"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"
      ></div>

      <div class="max-w-[1200px] mx-auto text-center relative z-10">
        <h3
          class="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
        >
          {{ t('cta.heading') }}
        </h3>
        <p class="text-xl md:text-2xl text-white/95 mb-2">
          {{ t('cta.subheading') }}
          <a
            :href="cta.primary?.href"
            class="inline-flex items-center gap-2 text-white font-black hover:gap-3 transition-all duration-300 underline decoration-4 underline-offset-8 hover:scale-105 group ml-2"
          >
            {{ t('cta.getInTouch') }}
            <span class="text-3xl group-hover:rotate-12 transition-transform duration-300">→</span>
          </a>
        </p>
      </div>
    </section>

    <!-- Info Section with better layout -->
    <div class="max-w-[1200px] mx-auto px-5 py-16 bg-gradient-to-b from-gray-50 to-white">
      <div class="grid md:grid-cols-2 gap-12 mb-12">
        <!-- Information Column -->
        <div>
          <h4
            class="text-2xl font-bold bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent mb-6"
          >
            {{ t('footer.information') }}
          </h4>
          <div class="space-y-4">
            <div
              class="flex items-start gap-3 text-gray-700 group hover:text-brand-700 transition-colors duration-300"
            >
              <span class="text-brand-500 text-xl mt-0.5">📍</span>
              <span class="leading-relaxed">{{ footer.address?.line1 }}</span>
            </div>
            <a
              href="tel:+85596727581"
              class="flex items-center gap-3 text-gray-700 group hover:text-brand-700 transition-colors duration-300"
            >
              <span class="text-brand-500 text-xl">📞</span>
              <span>(+855) 96 72 75 814</span>
            </a>
            <a
              href="mailto:lratana85@gmail.com"
              class="flex items-center gap-3 text-gray-700 group hover:text-brand-700 transition-colors duration-300"
            >
              <span class="text-brand-500 text-xl">📩</span>
              <span>lratana85@gmail.com</span>
            </a>
            <a
              href="https://t.me/lratana"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-3 text-gray-700 group hover:text-brand-700 transition-colors duration-300"
            >
              <span class="text-brand-500 text-xl">➤</span>
              <span>Telegram</span>
            </a>
          </div>
        </div>

        <!-- Quick Links Column -->
        <div>
          <h4
            class="text-2xl font-bold bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent mb-6"
          >
            {{ t('footer.quickLinks') }}
          </h4>
          <nav class="grid grid-cols-2 gap-4">
            <a
              href="#skills"
              class="text-gray-700 font-medium hover:text-brand-700 transition-all duration-300 hover:translate-x-2 relative group flex items-center gap-2"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-brand-300 group-hover:bg-brand-600 transition-colors duration-300"
              ></span>
              <span class="relative">
                {{ t('nav.skills') }}
                <span
                  class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-600 to-accent-purple group-hover:w-full transition-all duration-300"
                ></span>
              </span>
            </a>
            <a
              href="#works"
              class="text-gray-700 font-medium hover:text-brand-700 transition-all duration-300 hover:translate-x-2 relative group flex items-center gap-2"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-brand-300 group-hover:bg-brand-600 transition-colors duration-300"
              ></span>
              <span class="relative">
                {{ t('nav.works') }}
                <span
                  class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-600 to-accent-purple group-hover:w-full transition-all duration-300"
                ></span>
              </span>
            </a>
            <a
              href="#education"
              class="text-gray-700 font-medium hover:text-brand-700 transition-all duration-300 hover:translate-x-2 relative group flex items-center gap-2"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-brand-300 group-hover:bg-brand-600 transition-colors duration-300"
              ></span>
              <span class="relative">
                {{ t('nav.education') }}
                <span
                  class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-600 to-accent-purple group-hover:w-full transition-all duration-300"
                ></span>
              </span>
            </a>
            <a
              href="#experience"
              class="text-gray-700 font-medium hover:text-brand-700 transition-all duration-300 hover:translate-x-2 relative group flex items-center gap-2"
            >
              <span
                class="w-1.5 h-1.5 rounded-full bg-brand-300 group-hover:bg-brand-600 transition-colors duration-300"
              ></span>
              <span class="relative">
                {{ t('nav.experience') }}
                <span
                  class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-600 to-accent-purple group-hover:w-full transition-all duration-300"
                ></span>
              </span>
            </a>
          </nav>
        </div>
      </div>

      <!-- Divider -->
      <div
        class="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"
      ></div>

      <!-- Legal Section -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
        <span class="text-gray-700 font-semibold flex items-center gap-2">
          <span class="text-brand-600">©</span>
          {{ t('footer.copyright') }}
        </span>
        <span class="text-gray-600 flex items-center gap-2">
          {{ t('footer.credits') }}
          <span class="text-red-500 animate-pulse">❤️</span>
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Tailwind handles all styling */
</style>
