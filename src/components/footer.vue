<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__vacancy">
        <p class="footer__vacancy-title">{{ selectedVacancy.vacancyName }}</p>
        <p class="footer__company-title">So Digital Inc.</p>
      </div>
      <a href="#" class="footer__button" @click.prevent="openModal">
        Apply Now
      </a>
    </div>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'v-footer',
  data() {
    return {
      textForModal: 'Thank you, your application has been accepted',
    };
  },

  methods: {
    ...mapActions([
      'CHANGE_MODAL_VISIBILITY',
      'CHANGE_MODAL_TEXT',
      'CHANGE_MODAL_TRANSPARENT',
    ]),
    openModal() {
      this.CHANGE_MODAL_VISIBILITY();
      this.CHANGE_MODAL_TEXT(this.textForModal);

      setTimeout(() => this.CHANGE_MODAL_TRANSPARENT(), 100);
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
