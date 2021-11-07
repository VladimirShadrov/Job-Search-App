<template>
  <div class="vacancyList">
    <div class="vacancy__item-wrapper">
      <VacancyItem v-for="vacancy in 12" :key="vacancy" />
    </div>
  </div>
</template>

<script>
import VacancyItem from './vacancyItem.vue';

export default {
  name: 'VacancyList',
  components: {
    VacancyItem,
  },
};
</script>
