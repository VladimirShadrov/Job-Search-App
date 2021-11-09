<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__vacancy">
        <p class="footer__vacancy-title">{{ selectedVacancy.vacancyName }}</p>
        <p class="footer__company-title">So Digital Inc.</p>
      </div>
      <a href="#" class="footer__button">Apply Now</a>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'v-footer',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['SELECTED_VACANCY']),
    selectedVacancy() {
      return this.SELECTED_VACANCY;
    },
  },
};
</script>
