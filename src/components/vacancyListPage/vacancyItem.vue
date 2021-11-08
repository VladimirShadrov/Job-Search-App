<template>
  <div class="vacancy__item">
    <div class="vacancy__item-date">
      <span class="vacancy__item-value">{{ vacanciesDataItem.date }}</span>
      <span class="vacancy__item-time">{{ vacanciesDataItem.time }}</span>
      <span class="vacancy__item-text">ago</span>
      <span class="vacancy__item-chart">{{
        vacanciesDataItem.employment
      }}</span>
    </div>
    <router-link class="v-router" :to="{ name: 'vacancy-description' }">
      <p class="vacancy__item-title" @click="showFooter">
        {{ vacanciesDataItem.vacancyName }}
      </p>
    </router-link>
    <p class="vacancy__item-employer">{{ vacanciesDataItem.employer }}</p>
    <p class="vacancy__item-employer-location">
      {{ vacanciesDataItem.location }}
    </p>
    <div
      class="vacancy__item-icon vacancy__item-icon-bg-scott"
      v-html="vacanciesDataItem.iconHTML"
      :class="vacanciesDataItem.className"
    ></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'VacancyItem',
  props: {
    vacanciesDataItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    ...mapActions(['TOGGLE_FOOTER_VISIBILITY']),
    showFooter() {
      this.TOGGLE_FOOTER_VISIBILITY();
    },
  },
};
</script>
