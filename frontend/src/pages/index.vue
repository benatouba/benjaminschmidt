<script setup lang="ts">
import CareerSection from "@/components/sections/CareerSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import ImpactHighlightsSection from "@/components/sections/ImpactHighlightsSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const content = useSiteContent();
</script>

<template>
  <HeroSection :profile="content.profile" :highlights="content.impactHighlights" />
  <div class="section-block--alt">
    <ImpactHighlightsSection :highlights="content.impactHighlights" />
  </div>
  <ProjectsSection :projects="content.projects" />
  <div class="section-block--alt">
    <CareerSection :stages="content.careerStages" />
  </div>
  <ServicesSection :services="content.services" />
  <div class="section-block--alt">
    <ContactSection :profile="content.profile" :links="content.contactLinks" />
  </div>
</template>
