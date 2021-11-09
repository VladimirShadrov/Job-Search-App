<template>
  <div class="vacancyList">
    <div class="vacancy__item-wrapper">
      <VacancyItem
        v-for="vacancy in currentVacacyList"
        :key="vacancy.id"
        :vacanciesDataItem="vacancy"
      />
    </div>
  </div>
</template>

<script>
import VacancyItem from './vacancyItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'VacancyList',
  components: {
    VacancyItem,
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions(['GET_VACANCIES_FOR_VACANCY_LIST']),
  },

  computed: {
    ...mapGetters(['CURRENT_VACANCIES_NUMBER']),
    currentVacacyList() {
      return this.CURRENT_VACANCIES_NUMBER;
    },
  },

  mounted() {
    this.GET_VACANCIES_FOR_VACANCY_LIST();
  },
};
</script>
