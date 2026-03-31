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
import {
  articleHistory,
  blogPosts,
  careerStages,
  contactLinks,
  cvAppointments,
  education,
  externalProfiles,
  honors,
  profile,
  projects,
  publications,
  services,
} from "@/data/siteContent";
</script>

<template>
  <HeroSection :profile="profile" />
  <CvSection :appointments="cvAppointments" :education="education" :honors="honors" />
  <CareerSection :stages="careerStages" />
  <PublicationsSection :publications="publications" />
  <ArticleHistorySection :items="articleHistory" />
  <BlogSection :posts="blogPosts" />
  <ProjectsSection :projects="projects" />
  <ProfilesSection :profiles="externalProfiles" />
  <ServicesSection :services="services" />
  <ContactSection :profile="profile" :links="contactLinks" />
</template>
