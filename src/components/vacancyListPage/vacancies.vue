<template>
  <div class="vacancy">
    <VacancyFilters />
    <VacansyList />
    <VacancyButton />
  </div>
</template>

<script>
import VacancyFilters from './vacancyFilters.vue';
import VacansyList from './vacancyList.vue';
import VacancyButton from './vacancyButton.vue';

export default {
  name: 'Vacancies',
  components: {
    VacancyFilters,
    VacansyList,
    VacancyButton,
  },
};
</script>
