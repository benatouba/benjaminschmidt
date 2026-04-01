<script setup lang="ts">
import CvSection from "@/components/sections/CvSection.vue";
import ArticleHistorySection from "@/components/sections/ArticleHistorySection.vue";
import BlogSection from "@/components/sections/BlogSection.vue";
import CareerSection from "@/components/sections/CareerSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import ProfilesSection from "@/components/sections/ProfilesSection.vue";
import PublicationsSection from "@/components/sections/PublicationsSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import { useSiteContent } from "@/composables/useSiteContent";

const content = useSiteContent();
</script>

<template>
  <HeroSection :profile="content.profile" />
  <CvSection
    :appointments="content.cvAppointments"
    :education="content.education"
    :honors="content.honors"
  />
  <CareerSection :stages="content.careerStages" />
  <PublicationsSection :publications="content.publications" />
  <ArticleHistorySection :items="content.articleHistory" />
  <BlogSection :posts="content.blogPosts" />
  <ProjectsSection :projects="content.projects" />
  <ProfilesSection :profiles="content.externalProfiles" />
  <ServicesSection :services="content.services" />
  <ContactSection :profile="content.profile" :links="content.contactLinks" />
</template>
