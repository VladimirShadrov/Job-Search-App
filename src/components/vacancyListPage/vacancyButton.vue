<template>
  <div class="vacancy__button-container">
    <button class="vacancy__button" @click="increaseNumberVacancies">
      Load More
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'VacancyButton',
  methods: {
    ...mapActions(['INCREACE_VACANCY_NUMBER']),
    increaseNumberVacancies() {
      this.INCREACE_VACANCY_NUMBER();
    },
  },
};
</script>
