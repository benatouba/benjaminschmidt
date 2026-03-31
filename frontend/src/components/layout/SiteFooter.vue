<template>
  <footer class="footer">
    <v-container class="px-4 px-sm-6 px-md-8" fluid>
      <div class="footer-content">
        <p class="footer-line">Built with Vue 3, TypeScript, Vuetify, oxlint, eslint, and oxfmt.</p>
        <p class="footer-line muted">
          Includes CV, article history, linked accounts, project portfolio, and blog sections for a
          complete professional researcher website.
        </p>
      </div>
    </v-container>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid rgb(15 76 92 / 13%);
  padding-block: 1.2rem 1.8rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.footer-line {
  margin: 0;
  font-size: 0.9rem;
  color: rgb(11 45 55 / 88%);
}

.muted {
  color: rgb(11 45 55 / 65%);
}
</style>
