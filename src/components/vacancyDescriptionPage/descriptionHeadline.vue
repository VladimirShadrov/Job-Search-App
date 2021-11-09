<template>
  <div class="description__headline">
    <div
      class="description__headline-icon"
      :class="selectedVacancy.className"
      v-html="selectedVacancy.iconHTML"
    ></div>
    <div class="description__headline-company">
      <p class="description__headline-company-title">
        {{ selectedVacancy.employer }}
      </p>
      <p class="description__headline-company-site">
        {{ selectedVacancy.webSite }}
      </p>
    </div>
    <div class="description__headline-button-wrapper">
      <a
        :href="selectedVacancy.webSiteAddress"
        class="description__headline-company-button"
        target="blank"
      >
        Company Site
      </a>

      <router-link
        class="router"
        style="text-decoration: none"
        :to="{ name: 'vacancies' }"
      >
        <a
          href="/"
          class="description__headline-company-button"
          @click="hideFooter"
        >
          Back
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'DescriptionHeadline',

  methods: {
    ...mapActions(['TOGGLE_FOOTER_VISIBILITY']),
    hideFooter() {
      this.TOGGLE_FOOTER_VISIBILITY();
    },
  },

  computed: {
    ...mapGetters(['SELECTED_VACANCY']),
    selectedVacancy() {
      return this.SELECTED_VACANCY;
    },
  },
};
</script>
