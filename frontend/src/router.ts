import { createRouter, createWebHistory } from "vue-router";
import { handleHotUpdate, routes } from "vue-router/auto-routes";
import i18n from "@/i18n";

const BASE_TITLE = "Dr. Benjamin Schmidt";
const CHUNK_LOAD_ERROR_RE =
  /Failed to fetch dynamically imported module|Importing a module script failed|Unable to preload CSS/;
const CHUNK_RELOAD_MARKER = "route-chunk-reload";

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
  if (typeof window !== "undefined") {
    const marker = window.sessionStorage.getItem(CHUNK_RELOAD_MARKER);
    if (marker === to.fullPath) {
      window.sessionStorage.removeItem(CHUNK_RELOAD_MARKER);
    }
  }

  const titleKey = routeTitleKeys[to.path];
  if (titleKey) {
    const t = i18n.global.t;
    document.title = `${t(titleKey)} | ${BASE_TITLE}`;
  } else {
    document.title = `${BASE_TITLE} | Senior Full-Stack Engineer`;
  }
});

router.onError((error, to) => {
  if (typeof window === "undefined") {
    return;
  }

  const message = error instanceof Error ? error.message : String(error);
  if (!CHUNK_LOAD_ERROR_RE.test(message)) {
    return;
  }

  const targetPath = to?.fullPath ?? window.location.pathname;
  const marker = window.sessionStorage.getItem(CHUNK_RELOAD_MARKER);

  if (marker === targetPath) {
    window.sessionStorage.removeItem(CHUNK_RELOAD_MARKER);
    return;
  }

  window.sessionStorage.setItem(CHUNK_RELOAD_MARKER, targetPath);
  window.location.assign(targetPath);
});

if (import.meta.hot) {
  handleHotUpdate(router);
}

export default router;
