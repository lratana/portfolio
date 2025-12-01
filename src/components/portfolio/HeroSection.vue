<script setup>
const props = defineProps({ hero: { type: Object, required: true } })
</script>

<template>
  <section id="hero" class="relative py-16 md:py-24 px-5 overflow-hidden">
    <!-- Background gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-accent-purple/5 -z-10"
    ></div>

    <div
      class="max-w-[1200px] mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-16 items-center"
    >
      <div class="order-2 md:order-1 space-y-6">
        <p
          class="text-brand-700 font-bold tracking-wider uppercase text-sm animate-slide-in-left flex items-center gap-2"
        >
          <span
            class="inline-block w-8 h-0.5 bg-gradient-to-r from-brand-600 to-transparent"
          ></span>
          {{ hero.greeting }}
        </p>

        <h1
          class="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-slide-up"
          style="animation-delay: 0.1s"
        >
          <span class="gradient-text">{{ hero.name }}</span>
        </h1>

        <p
          class="text-xl md:text-2xl text-gray-700 font-medium animate-fade-in"
          style="animation-delay: 0.2s"
        >
          {{ hero.tagline }}
        </p>

        <p
          class="text-[var(--vt-c-text-light-2)] text-lg leading-relaxed animate-fade-in"
          style="animation-delay: 0.3s"
        >
          {{ hero.bio }}
        </p>

        <div class="flex gap-8 my-8 animate-slide-up" style="animation-delay: 0.4s">
          <div v-for="(s, i) in hero.stats" :key="i" class="group cursor-default">
            <div
              class="text-4xl md:text-5xl font-black bg-gradient-to-br from-brand-600 to-accent-purple bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
            >
              {{ s.value }}<span v-if="s.suffix">{{ s.suffix }}</span>
            </div>
            <div class="text-xs text-gray-600 uppercase tracking-wider font-semibold mt-1">
              {{ s.label }}
            </div>
          </div>
        </div>

        <a
          :href="`mailto:${hero.email}`"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-accent-purple text-white font-bold text-lg hover:shadow-glow-lg hover:scale-105 transition-all duration-300 animate-bounce-subtle group"
          style="animation-delay: 0.5s; background-size: 200% 100%"
        >
          <span>Say hello</span>
          <span class="text-2xl group-hover:rotate-12 transition-transform duration-300">👋</span>
        </a>
      </div>

      <div
        class="order-1 md:order-2 flex justify-center md:justify-end animate-scale-in"
        style="animation-delay: 0.2s"
      >
        <div class="relative">
          <div
            class="absolute inset-0 bg-gradient-to-br from-brand-400 to-accent-purple rounded-3xl blur-2xl opacity-30 animate-pulse-slow"
          ></div>
          <img
            v-if="hero.avatar"
            :src="hero.avatar"
            alt="Profile"
            class="relative w-full max-w-[300px] md:max-w-[400px] rounded-3xl shadow-2xl hover:scale-105 hover:rotate-3 transition-all duration-500 animate-float"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tailwind handles all styling */
</style>
