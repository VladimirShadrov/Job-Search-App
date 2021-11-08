<template>
  <div class="vacancyList">
    <div class="vacancy__item-wrapper">
      <VacancyItem
        v-for="(vacancy, index) in vacanciesData"
        :key="index"
        :vacanciesDataItem="vacancy"
      />
    </div>
  </div>
</template>

<script>
import VacancyItem from './vacancyItem.vue';

import data from '../../data/data';

export default {
  name: 'VacancyList',
  components: {
    VacancyItem,
  },
  data() {
    return {
      vacanciesData: JSON.parse(data),
    };
  },
};
</script>
