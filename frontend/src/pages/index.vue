<script setup lang="ts">
import CareerSection from "@/components/sections/CareerSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import ImpactHighlightsSection from "@/components/sections/ImpactHighlightsSection.vue";
import InfrastructureSection from "@/components/sections/InfrastructureSection.vue";
import PublicationHighlightsSection from "@/components/sections/PublicationHighlightsSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import SelectedClientsSection from "@/components/sections/SelectedClientsSection.vue";
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
  <InfrastructureSection :items="content.infrastructure" />
  <div class="section-block--alt">
    <SelectedClientsSection :clients="content.selectedClients" />
  </div>
  <ServicesSection :services="content.services.slice(0, 3)" />
  <div class="section-block--alt">
    <PublicationHighlightsSection :insights="content.publicationInsights.slice(0, 4)" />
  </div>
  <ContactSection :profile="content.profile" :links="content.contactLinks" />
</template>
