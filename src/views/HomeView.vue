<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { usePortfolioData } from '@/composables/usePortfolioData'
import HeaderNav from '@/components/portfolio/HeaderNav.vue'
import HeroSection from '@/components/portfolio/HeroSection.vue'
import ServicesSection from '@/components/portfolio/ServicesSection.vue'
import SkillsSection from '@/components/portfolio/SkillsSection.vue'
import EducationSection from '@/components/portfolio/EducationSection.vue'
import ExperienceTimeline from '@/components/portfolio/ExperienceTimeline.vue'
import WorksGallery from '@/components/portfolio/WorksGallery.vue'
import TestimonialsSection from '@/components/portfolio/TestimonialsSection.vue'
import WorkExperienceAPI from '@/components/portfolio/WorkExperienceAPI.vue'
import FooterSection from '@/components/portfolio/FooterSection.vue'

const { data, loading, error, load } = usePortfolioData()
onMounted(() => {
  load()
})
</script>

<template>
  <div>
    <div v-if="loading" class="loading">Loading…</div>
    <div v-else-if="error" class="error">{{ error.message }}</div>
    <template v-else-if="data">
      <HeaderNav :site="data.site" />
      <HeroSection :hero="data.hero" />
      <ServicesSection :services="data.services" />
      <SkillsSection v-if="data.skills" :skills="data.skills" />
      <WorksGallery :works="data.works" />
      <EducationSection v-if="data.education" :education="data.education" />
      <ExperienceTimeline :experience="data.experience" />
      <WorkExperienceAPI />
      <TestimonialsSection :testimonials="data.testimonials" />
      <FooterSection :footer="data.footer" :cta="data.cta" />
    </template>
    <RouterView />
  </div>
</template>

<style scoped>
.loading,
.error {
  padding: 40px;
  text-align: center;
}
</style>
