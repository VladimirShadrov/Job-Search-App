<template>
  <div class="description__content">
    <div class="description__content-headline">
      <div class="description__vacancy">
        <div class="description__vacancy-date">
          <span class="description__vacancy-value">{{
            selectedVacancy.date
          }}</span>
          <span class="description__vacancy-time">{{
            selectedVacancy.time
          }}</span>
          <span class="description__vacancy-text">ago</span>
          <span class="description__vacancy-chart">{{
            selectedVacancy.employment
          }}</span>
        </div>
        <p class="description__vacancy-title">
          {{ selectedVacancy.vacancyName }}
        </p>
        <p class="description__employer-location">
          {{ selectedVacancy.location }}
        </p>
      </div>
      <button class="description__headline-button">Apply Now</button>
    </div>
    <p class="description__about">
      {{ selectedVacancy.aboutCompany }}
    </p>

    <h2 class="description__title">Requirements</h2>

    <p class="description__about">
      {{ selectedVacancy.requirementsText }}
    </p>

    <ul class="description__list">
      <li
        class="description__list-item"
        v-for="(item, index) in selectedVacancy.requirements"
        :key="item.id"
      >
        {{ selectedVacancy.requirements[index] }}
      </li>
    </ul>

    <h2 class="description__title">What You Will Do</h2>

    <p class="description__about">
      {{ selectedVacancy.whatToDoText }}
    </p>

    <div
      class="description__duties"
      v-for="(item, index) in selectedVacancy.whatToDo"
      :key="item.id"
    >
      <div class="description__duties-number">{{ index + 1 }}</div>
      <div class="description__duties-text">
        {{ selectedVacancy.whatToDo[index] }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DescriptionContent',

  computed: {
    ...mapGetters(['SELECTED_VACANCY']),
    selectedVacancy() {
      return this.SELECTED_VACANCY;
    },
  },
};
</script>
