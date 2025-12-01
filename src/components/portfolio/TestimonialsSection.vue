<script setup>
const props = defineProps({ testimonials: { type: Object, required: true } })
</script>

<template>
  <section id="testimonials" class="py-20 px-5 bg-white">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up">
          <span class="gradient-text">{{ testimonials.title }}</span>
        </h2>
        <div
          class="w-20 h-1 bg-gradient-to-r from-brand-600 to-accent-purple mx-auto rounded-full"
        ></div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(t, i) in testimonials.items"
          :key="i"
          class="group relative border-2 border-gray-100 rounded-card-lg p-6 bg-gradient-to-br from-white to-gray-50 hover:border-transparent hover:shadow-card-hover hover:-translate-y-3 transition-all duration-500 animate-scale-in overflow-hidden"
          :style="`animation-delay: ${i * 0.1}s`"
        >
          <!-- Gradient border on hover -->
          <div
            class="absolute inset-0 rounded-card-lg bg-gradient-to-br from-brand-500 to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
          ></div>
          <div
            class="absolute inset-[2px] rounded-card-lg bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-brand-50 transition-all duration-500 -z-10"
          ></div>

          <div class="relative z-10">
            <div class="flex gap-4 items-center mb-5">
              <div class="relative">
                <div
                  class="absolute inset-0 rounded-full bg-gradient-to-br from-brand-500 to-accent-purple opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
                ></div>
                <img
                  :src="t.avatar"
                  :alt="t.name"
                  class="relative w-14 h-14 rounded-full object-cover bg-gray-200 ring-2 ring-gray-200 group-hover:ring-4 group-hover:ring-brand-300 transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div class="flex-1">
                <strong
                  class="block font-bold text-lg group-hover:text-brand-700 transition-colors duration-300"
                  >{{ t.name }}</strong
                >
                <div class="text-xs text-gray-600 font-medium">{{ t.role }}</div>
                <div class="text-xs text-gray-500">{{ t.company }}</div>
              </div>
            </div>

            <!-- Quote mark -->
            <div
              class="text-6xl text-brand-200 leading-none mb-2 group-hover:text-brand-400 transition-colors duration-500"
            >
              "
            </div>

            <p class="text-gray-700 leading-relaxed italic relative z-10">
              {{ t.quote }}
            </p>

            <!-- Bottom accent -->
            <div
              class="mt-4 w-12 h-1 bg-gradient-to-r from-brand-500 to-accent-purple rounded-full opacity-0 group-hover:opacity-100 group-hover:w-20 transition-all duration-500"
            ></div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tailwind handles all styling */
</style>
