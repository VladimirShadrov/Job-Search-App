<template>
  <div class="description">
    <DescriptionHeadline />
    <DescriptionContent />
  </div>
</template>

<script>
import DescriptionHeadline from './descriptionHeadline.vue';
import DescriptionContent from './descriptionContent.vue';

export default {
  name: 'Description',
  components: {
    DescriptionHeadline,
    DescriptionContent,
  },
};
</script>
