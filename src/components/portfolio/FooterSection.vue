<script setup>
const props = defineProps({
  footer: { type: Object, required: true },
  cta: { type: Object, required: true },
})
</script>

<template>
  <footer class="pt-12 border-t border-gray-200">
    <!-- CTA Section with gradient background -->
    <section
      class="py-16 md:py-20 px-5 bg-gradient-to-br from-brand-600 via-brand-500 to-accent-purple animate-fade-in relative overflow-hidden"
    >
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div
        class="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
      ></div>

      <div class="max-w-[1200px] mx-auto text-center relative z-10">
        <h3
          class="text-3xl md:text-5xl font-extrabold text-white mb-4 animate-slide-up leading-tight"
        >
          {{ cta.heading }}
        </h3>
        <p class="text-lg md:text-xl text-white/90 animate-slide-up" style="animation-delay: 0.1s">
          {{ cta.subheading }}
          <a
            :href="cta.primary?.href"
            class="inline-flex items-center gap-2 text-white font-extrabold hover:gap-3 transition-all duration-300 underline decoration-2 underline-offset-4 hover:scale-105 group"
          >
            {{ cta.primary?.label }}
            <span class="text-2xl group-hover:rotate-12 transition-transform duration-300">→</span>
          </a>
        </p>
      </div>
    </section>

    <!-- Info Section -->
    <div
      class="max-w-[1200px] mx-auto px-5 py-10 flex flex-col md:flex-row justify-between gap-8 animate-slide-up bg-white"
    >
      <div>
        <strong
          class="block mb-3 text-lg font-bold bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent"
          >Information</strong
        >
        <div class="text-gray-600 leading-relaxed flex items-start gap-2">
          <span class="text-brand-500 mt-1">📍</span>
          <span>{{ footer.address?.line1 }}</span>
        </div>
      </div>

      <nav class="flex flex-wrap gap-6">
        <a
          v-for="(l, i) in footer.quickLinks"
          :key="i"
          :href="l.to"
          class="text-gray-600 font-medium hover:text-brand-700 transition-all duration-300 hover:-translate-y-1 relative group"
        >
          <span class="relative z-10">{{ l.label }}</span>
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-600 to-accent-purple group-hover:w-full transition-all duration-300"
          ></span>
        </a>
      </nav>
    </div>

    <!-- Legal Section -->
    <div
      class="max-w-[1200px] mx-auto px-5 py-6 flex flex-col md:flex-row justify-between gap-3 border-t border-gray-200 text-sm bg-gray-50"
    >
      <span class="text-gray-600 font-medium">{{ footer.copyright }}</span>
      <span class="text-gray-500">{{ footer.credits }}</span>
    </div>
  </footer>
</template>

<style scoped>
/* Tailwind handles all styling */
</style>
