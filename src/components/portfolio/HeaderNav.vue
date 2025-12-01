<script setup>
const props = defineProps({
  site: { type: Object, required: true },
})
</script>

<template>
  <header
    class="sticky top-0 z-50 glass backdrop-blur-xl border-b border-white/20 transition-all duration-300 shadow-sm"
  >
    <div class="max-w-[1200px] mx-auto px-5 py-4 flex items-center gap-4">
      <div class="flex items-center gap-2.5 font-bold animate-slide-in-left">
        <img
          v-if="site.brand?.logo"
          :src="site.brand.logo"
          :alt="site.brand?.name || 'Logo'"
          class="w-10 h-10 object-contain hover:scale-110 transition-transform duration-300"
        />
        <span v-else class="text-xl gradient-text">{{ site.brand?.name }}</span>
      </div>
      <nav class="flex gap-6 ml-auto animate-fade-in">
        <a
          v-for="(item, i) in site.navigation"
          :key="i"
          :href="item.to"
          class="text-sm font-medium text-[var(--color-text)] opacity-80 hover:opacity-100 hover:text-brand-600 transition-all duration-300 relative group"
        >
          <span class="relative z-10">{{ item.label }}</span>
          <span
            class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-600 to-accent-purple group-hover:w-full transition-all duration-300"
          ></span>
        </a>
      </nav>
      <a
        :href="`mailto:${site.contact?.email}`"
        class="ml-2 px-5 py-2.5 bg-gradient-to-r from-brand-600 to-brand-700 text-white text-sm font-semibold rounded-xl hover:shadow-glow hover:scale-105 transition-all duration-300 animate-slide-in-right"
      >
        Contact
      </a>
    </div>
  </header>
</template>

<style scoped>
/* Tailwind handles all styling */
</style>
