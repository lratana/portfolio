<script setup>
const props = defineProps({ skills: { type: Object, required: true } })
</script>

<template>
  <section id="skills" class="py-20 px-5 bg-gradient-to-b from-white to-gray-50">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold mb-4 animate-slide-up">
          <span class="gradient-text">{{ skills.title }}</span>
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
            {{ category.name }}
          </h3>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="(skill, i) in category.skills"
              :key="i"
              class="px-3 py-1.5 bg-gradient-to-r from-brand-50 to-accent-purple/10 text-brand-700 text-sm font-medium rounded-full border border-brand-200 hover:border-brand-400 hover:shadow-sm hover:scale-105 transition-all duration-300 cursor-default"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

      <!-- Languages Section -->
      <div
        v-if="skills.languages"
        class="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-purple rounded-card-lg p-8 md:p-10 text-white shadow-glow animate-fade-in"
      >
        <h3 class="text-2xl md:text-3xl font-bold mb-6 text-center">Languages</h3>
        <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-5xl mb-3">🇰🇭</div>
            <h4 class="text-xl font-bold mb-2">Khmer</h4>
            <p class="text-white/90 text-lg font-semibold">{{ skills.languages.khmer }}</p>
          </div>
          <div class="text-center">
            <div class="text-5xl mb-3">🇬🇧</div>
            <h4 class="text-xl font-bold mb-2">English</h4>
            <p class="text-white/90 text-lg font-semibold">{{ skills.languages.english }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tailwind handles all styling */
</style>
