<template>
  <div class="description">
    <DescriptionHeadline />
    <DescriptionContent />
  </div>
</template>

<script>
import DescriptionHeadline from './descriptionHeadline.vue';
import DescriptionContent from './descriptionContent.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Description',

  components: {
    DescriptionHeadline,
    DescriptionContent,
  },

  methods: {
    ...mapActions([
      'CHANGE_MODAL_VISIBILITY',
      'CHANGE_MODAL_TRANSPARENT',
      'TOGGLE_FOOTER_VISIBILITY',
    ]),
  },

  computed: {
    ...mapGetters(['MODAL_VISIBILITY', 'MODAL_TRANSPARENT', 'FOOTER_STATE']),
  },

  mounted() {
    if (!this.FOOTER_STATE) {
      this.TOGGLE_FOOTER_VISIBILITY();
    }

    if (this.MODAL_VISIBILITY && !this.MODAL_TRANSPARENT) {
      this.CHANGE_MODAL_VISIBILITY();
      this.CHANGE_MODAL_TRANSPARENT();
    }
  },
};
</script>
