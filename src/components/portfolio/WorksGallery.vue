<script setup>
const props = defineProps({ works: { type: Object, required: true } })
</script>

<template>
  <section id="works" class="py-20 px-5 bg-white">
    <div class="max-w-[1200px] mx-auto">
      <div class="flex items-end justify-between mb-12">
        <div>
          <h2 class="text-4xl md:text-5xl font-extrabold mb-2">
            <span class="gradient-text">{{ works.title }}</span>
          </h2>
          <p class="text-gray-600">{{ works.note }}</p>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="(w, idx) in works.items"
          :key="w.id"
          :class="[
            'group relative border border-gray-200 rounded-card-lg overflow-hidden bg-white hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 animate-scale-in',
            w.grid === 'wide' ? 'lg:col-span-2' : '',
          ]"
          :style="`animation-delay: ${idx * 0.1}s`"
        >
          <div class="relative w-full h-[240px] overflow-hidden">
            <img
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              :src="w.cover"
              :alt="w.title"
            />
            <!-- Gradient overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <!-- View project button on hover -->
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
            >
              <span
                class="px-6 py-3 bg-white text-brand-700 font-bold rounded-xl shadow-lg hover:shadow-glow transition-all duration-300"
              >
                View Project →
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3
              class="font-bold text-xl mb-1 group-hover:text-brand-700 transition-colors duration-300"
            >
              {{ w.title }}
            </h3>
            <p class="text-sm text-gray-600 mb-4">{{ w.subtitle }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="(t, i) in w.tags"
                :key="i"
                class="text-xs px-3 py-1.5 bg-gradient-to-r from-brand-50 to-accent-purple/10 text-brand-700 font-medium rounded-full border border-brand-200 hover:border-brand-400 hover:shadow-sm transition-all duration-300"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* No component-scoped CSS: Tailwind handles layout */
</style>
