<script setup lang="ts">
import CvSection from "@/components/sections/CvSection.vue";
import BlogSection from "@/components/sections/BlogSection.vue";
import CareerSection from "@/components/sections/CareerSection.vue";
import ContactSection from "@/components/sections/ContactSection.vue";
import GitHubStatsSection from "@/components/sections/GitHubStatsSection.vue";
import HeroSection from "@/components/sections/HeroSection.vue";
import ProjectsSection from "@/components/sections/ProjectsSection.vue";
import ProfilesSection from "@/components/sections/ProfilesSection.vue";
import PublicationsSection from "@/components/sections/PublicationsSection.vue";
import ServicesSection from "@/components/sections/ServicesSection.vue";
import SkillBadgesSection from "@/components/sections/SkillBadgesSection.vue";
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
  <PublicationsSection :publications="content.publications" :writing="content.articleHistory" />
  <BlogSection :posts="content.blogPosts" />
  <ProjectsSection :projects="content.projects" />
  <SkillBadgesSection v-if="content.skillBadges?.length" :badges="content.skillBadges" />
  <GitHubStatsSection v-if="content.githubStats?.length" :cards="content.githubStats" />
  <ProfilesSection :profiles="content.externalProfiles" />
  <ServicesSection :services="content.services" />
  <ContactSection :profile="content.profile" :links="content.contactLinks" />
</template>
