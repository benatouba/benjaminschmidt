<script setup lang="ts">
import cvPdfDe from "@/assets/schmidt-benjamin-cv.pdf";
import cvPdfEn from "@/assets/schmidt-benjamin-cv-en.pdf";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import type {
  CertificationEntry,
  CvAppointment,
  EducationEntry,
  HonorEntry,
  ImpactHighlight,
  ProfileInfo,
  SelectedClient,
} from "@/types/site";

const props = withDefaults(
  defineProps<{
    profile: ProfileInfo;
    highlights: ImpactHighlight[];
    appointments: CvAppointment[];
    education: EducationEntry[];
    honors: HonorEntry[];
    certifications: CertificationEntry[];
    clients: SelectedClient[];
    showHeading?: boolean;
  }>(),
  {
    showHeading: true,
  },
);

const { t, locale } = useI18n({ useScope: "global" });

const cvDownload = computed(() => {
  const isGerman = locale.value === "de";

  return {
    href: isGerman ? cvPdfDe : cvPdfEn,
    filename: isGerman ? "schmidt-benjamin-cv.pdf" : "schmidt-benjamin-cv-en.pdf",
  };
});
</script>

<template>
  <section id="cv" class="section-block section-anchor">
    <v-container fluid>
      <div v-if="props.showHeading" class="section-heading reveal-up" style="--delay: 40ms">
        <v-row
          ><v-col cols="10" md="9" lg="8">
            <p class="kicker">{{ t("cv.kicker") }}</p>
            <h2>{{ t("cv.heading") }}</h2>
            <p class="section-copy">{{ t("cv.copy") }}</p>
          </v-col>
          <v-spacer />
          <v-col>
            <v-btn
              :href="cvDownload.href"
              :download="cvDownload.filename"
              color="primary"
              size="large"
              class="cv-download-btn"
              prepend-icon="mdi-download"
            >
              {{ t("cv.download") }}
            </v-btn>
          </v-col>
        </v-row>
      </div>

      <div class="cv-summary-card reveal-up" style="--delay: 100ms">
        <div>
          <p class="summary-kicker">{{ t("cv.profileTitle") }}</p>
          <h3 class="summary-name">{{ profile.name }}</h3>
          <p class="summary-headline">{{ profile.headline }}</p>
        </div>
        <div class="summary-contact">
          <a :href="`mailto:${profile.email}`" class="contact-link">{{ profile.email }}</a>
          <span>{{ profile.location }}</span>
          <!-- orcid badge with text and link -->
          <a
            v-if="profile.orcid"
            :href="profile.orcid"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            ORCID: {{ profile.orcid.split("/").pop() }}
          </a>
          <!-- github badge with text and link -->
          <a
            href="https://github.com/benatouba"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            GitHub: benatouba
          </a>
        </div>
      </div>

      <div class="highlights-strip reveal-up" style="--delay: 140ms">
        <article
          v-for="item in props.highlights"
          :key="`${item.value}-${item.label}`"
          class="highlight-pill"
        >
          <p class="pill-value">{{ item.value }}</p>
          <p class="pill-label">{{ item.label }}</p>
        </article>
      </div>

      <div class="cv-grid">
        <div class="cv-main reveal-up" style="--delay: 180ms">
          <div class="cv-card">
            <h3 class="card-title">{{ t("cv.professionalAppointments") }}</h3>
            <div class="appointments-stack">
              <article
                v-for="item in props.appointments"
                :key="`${item.period}-${item.role}`"
                class="appointment-item"
              >
                <div class="appointment-top">
                  <div>
                    <p class="appointment-period">{{ item.period }}</p>
                    <h4 class="appointment-role">{{ item.role }}</h4>
                    <p class="appointment-info">{{ item.institution }} · {{ item.location }}</p>
                  </div>
                </div>
                <p class="appointment-summary">{{ item.summary }}</p>
                <ul class="appointment-highlights">
                  <li v-for="highlight in item.highlights" :key="highlight">
                    {{ highlight }}
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>

        <div class="cv-side reveal-up" style="--delay: 220ms">
          <div class="cv-card">
            <h3 class="card-title">{{ t("cv.awardsAndHonors") }}</h3>
            <div class="list-stack compact">
              <article
                v-for="honor in props.honors"
                :key="`${honor.year}-${honor.title}`"
                class="list-item"
              >
                <h4 class="list-title">{{ honor.title }}</h4>
                <p class="list-subtitle">{{ honor.issuer }} · {{ honor.year }}</p>
                <p class="list-detail">{{ honor.description }}</p>
              </article>
            </div>
          </div>

          <div class="cv-card">
            <h3 class="card-title">{{ t("cv.education") }}</h3>
            <div class="list-stack">
              <article
                v-for="entry in props.education"
                :key="`${entry.period}-${entry.degree}`"
                class="list-item"
              >
                <h4 class="list-title">{{ entry.degree }}</h4>
                <p class="list-subtitle">{{ entry.institution }} · {{ entry.period }}</p>
                <p class="list-detail">{{ entry.details }}</p>
              </article>
            </div>
          </div>

          <div class="cv-card">
            <h3 class="card-title">{{ t("cv.certifications") }}</h3>
            <div class="list-stack compact">
              <article
                v-for="certification in props.certifications"
                :key="`${certification.year}-${certification.title}`"
                class="list-item"
              >
                <h4 class="list-title">{{ certification.title }}</h4>
                <p class="list-subtitle">
                  {{ certification.issuer
                  }}<template v-if="certification.year"> · {{ certification.year }}</template>
                </p>
                <p class="list-detail">{{ certification.description }}</p>
              </article>
            </div>
          </div>

          <div class="cv-card">
            <h3 class="card-title">{{ t("cv.selectedClients") }}</h3>
            <div class="client-list">
              <article v-for="client in props.clients" :key="client.name" class="client-item">
                <h4 class="list-title">{{ client.name }}</h4>
                <p class="list-detail">{{ client.note }}</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.kicker,
.summary-kicker {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
}

.section-copy {
  margin: 0.55rem 0 0;
  max-width: 72ch;
  font-size: 0.96rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

.cv-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.9rem;
}

.cv-download-btn {
  text-transform: none;
  letter-spacing: 0;
  font-weight: 650;
  box-shadow: 0 10px 22px color-mix(in srgb, var(--primary) 25%, transparent);
}

.cv-summary-card,
.cv-card,
.highlight-pill {
  border: 1px solid var(--border-color);
  border-radius: 14px;
  background: rgba(49, 50, 68, 0.56);
}

.cv-summary-card {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.2rem;
}

.summary-name {
  margin: 0.45rem 0 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--page-text);
}

.summary-headline {
  margin: 0.25rem 0 0;
  font-size: 0.95rem;
  color: var(--page-text-muted);
}

.summary-contact {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
  font-size: 0.82rem;
  color: var(--page-text-muted);
}

.contact-link {
  color: var(--primary);
  text-decoration: none;
}

.highlights-strip {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(180px, 100%), 1fr));
  gap: 0.75rem;
  margin-top: 1rem;
}

.highlight-pill {
  padding: 0.85rem 0.95rem;
}

.pill-value {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--page-text);
}

.pill-label {
  margin: 0.2rem 0 0;
  font-size: 0.8rem;
  color: var(--page-text-muted);
}

.cv-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(280px, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.cv-main,
.cv-side {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cv-card {
  padding: 1.2rem;
}

.card-title {
  margin: 0 0 0.95rem;
  font-size: 1rem;
  font-weight: 650;
  color: var(--page-text);
}

.appointments-stack,
.list-stack {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.appointment-item,
.list-item {
  padding: 0.95rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background: rgba(30, 30, 46, 0.45);
}

.appointment-period {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--primary);
}

.appointment-role,
.list-title {
  margin: 0.35rem 0 0;
  font-size: 0.98rem;
  font-weight: 650;
  color: var(--page-text);
}

.appointment-info,
.list-subtitle {
  margin: 0.2rem 0 0;
  font-size: 0.82rem;
  color: var(--page-text-muted);
}

.appointment-summary,
.list-detail {
  margin: 0.55rem 0 0;
  font-size: 0.86rem;
  line-height: 1.65;
  color: var(--page-text-muted);
}

.appointment-highlights {
  margin: 0.7rem 0 0;
  padding: 0 0 0 1rem;
  font-size: 0.84rem;
  line-height: 1.7;
  color: var(--page-text-muted);
}

.compact .list-item {
  padding: 0.85rem 0.95rem;
}

.client-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.client-item {
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
}

.client-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

@media (width <= 920px) {
  .cv-grid {
    grid-template-columns: 1fr;
  }

  .cv-summary-card {
    flex-direction: column;
  }

  .summary-contact {
    align-items: flex-start;
  }
}

@media print {
  .cv-summary-card,
  .cv-card,
  .highlight-pill,
  .appointment-item,
  .list-item {
    background: none;
    border-color: #d6d6d6;
  }

  .summary-name,
  .card-title,
  .appointment-role,
  .list-title {
    color: black;
  }

  .summary-headline,
  .summary-contact,
  .appointment-info,
  .appointment-summary,
  .appointment-highlights,
  .list-subtitle,
  .list-detail,
  .pill-label {
    color: #333;
  }
}
</style>
