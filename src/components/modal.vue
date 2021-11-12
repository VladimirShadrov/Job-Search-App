<template>
  <div
    class="modal"
    :class="{ 'v-tansparent': MODAL_TRANSPARENT }"
    @mousedown="closeModal"
  >
    <div
      class="modal__container"
      :class="{ 'v-tansparent': MODAL_TRANSPARENT }"
    >
      <p class="modal__info">
        {{ MODAL_TEXT }}
      </p>
      <button class="modal__button">OK</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Modal',
  methods: {
    ...mapActions(['CHANGE_MODAL_TRANSPARENT', 'CHANGE_MODAL_VISIBILITY']),

    closeModal(event) {
      if (
        event.target.classList.contains('modal') ||
        event.target.classList.contains('modal__button')
      ) {
        this.CHANGE_MODAL_TRANSPARENT();
        setTimeout(() => this.CHANGE_MODAL_VISIBILITY(), 300);
      }
    },
  },
  computed: {
    ...mapGetters(['MODAL_TEXT', 'MODAL_TRANSPARENT']),
  },
};
</script>
