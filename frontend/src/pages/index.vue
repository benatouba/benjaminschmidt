<script setup lang="ts">
import CareerSection from "@/components/sections/CareerSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import PublicationsSection from "@/components/sections/PublicationsSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import SpotlightsSection from "@/components/sections/SpotlightsSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const content = useSiteContent();
</script>

<template>
  <HeroSection :profile="content.profile" />
  <CareerSection :stages="content.careerStages" />
  <div class="section-block--alt">
    <PublicationsSection :publications="content.publications" :writing="content.articleHistory" />
  </div>
  <SpotlightsSection :posts="content.blogPosts" />
  <div class="section-block--alt">
    <ServicesSection :services="content.services" />
  </div>
  <ContactSection :profile="content.profile" :links="content.contactLinks" />
</template>
