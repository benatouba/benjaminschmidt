import { createRouter, createWebHistory } from "vue-router";
import { handleHotUpdate, routes } from "vue-router/auto-routes";
import i18n from "@/i18n";

const BASE_TITLE = "Dr. Benjamin Schmidt";

const routeTitleKeys: Record<string, string> = {
  "/cv": "pages.cv.metaTitle",
  "/career": "pages.career.metaTitle",
  "/publications": "pages.publications.metaTitle",
  "/spotlights": "pages.spotlights.metaTitle",
  "/projects": "pages.projects.metaTitle",
  "/profiles": "pages.profiles.metaTitle",
  "/contact": "pages.contact.metaTitle",
  "/services": "pages.services.metaTitle",
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0, left: 0 };
  },
});

router.afterEach((to) => {
  const titleKey = routeTitleKeys[to.path];
  if (titleKey) {
    const t = i18n.global.t;
    document.title = `${t(titleKey)} | ${BASE_TITLE}`;
  } else {
    document.title = `${BASE_TITLE} | Climate Scientist & Software Engineer`;
  }
});

if (import.meta.hot) {
  handleHotUpdate(router);
}

export default router;
