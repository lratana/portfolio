<script setup>
const props = defineProps({ services: { type: Object, required: true } })

const icons = ['🌐', '📱', '🎨']
</script>

<template>
  <section id="services" class="py-20 px-5 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up">
          <span class="gradient-text">{{ services.title }}</span>
        </h2>
        <div
          class="w-20 h-1 bg-gradient-to-r from-brand-600 to-accent-purple mx-auto rounded-full"
        ></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(s, idx) in services.items"
          :key="s.id"
          class="group relative border border-gray-200 p-8 rounded-card-lg bg-white hover:bg-gradient-to-br hover:from-white hover:to-brand-50 hover:shadow-card-hover hover:border-brand-300 hover:-translate-y-3 transition-all duration-500 cursor-pointer animate-scale-in overflow-hidden"
          :style="`animation-delay: ${idx * 0.1}s`"
        >
          <!-- Shimmer effect on hover -->
          <div
            class="absolute inset-0 shimmer-bg animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          ></div>

          <div class="relative z-10">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-purple flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-glow"
            >
              {{ icons[idx] || '●' }}
            </div>

            <h3
              class="text-2xl font-bold mb-3 group-hover:text-brand-700 transition-colors duration-300"
            >
              {{ s.title }}
            </h3>

            <p class="text-gray-600 leading-relaxed mb-4">
              {{ s.description }}
            </p>

            <div
              class="flex items-center gap-2 text-sm font-bold text-brand-600 group-hover:text-accent-purple transition-colors duration-300"
            >
              <span
                class="inline-block w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-xs"
                >{{ s.projects }}</span
              >
              <span>Projects Completed</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tailwind handles all styling */
</style>
