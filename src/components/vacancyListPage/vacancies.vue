<template>
  <div class="vacancy" :class="{ 'data-loading': DATA_LOADING }">
    <VacancyFilters />
    <VacansyList />
    <VacancyButton />
  </div>
</template>

<script>
import VacancyFilters from './vacancyFilters.vue';
import VacansyList from './vacancyList.vue';
import VacancyButton from './vacancyButton.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Vacancies',
  components: {
    VacancyFilters,
    VacansyList,
    VacancyButton,
  },
  computed: {
    ...mapGetters(['DATA_LOADING']),
  },
};
</script>
