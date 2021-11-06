<template>
  <div id="app" :class="currentTheme">
    <Header @setThemeValue="getThemeValue" />
    <Vacancies />
    <Description />
    <Footer v-if="vacancyDescriptionVisible" />
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Vacancies from './components/vacancyListPage/vacancies.vue';
import Description from './components/vacancyDescriptionPage/description.vue';

export default {
  name: 'App',
  components: {
    Header,
    Vacancies,
    Description,
    Footer,
  },
  data() {
    return {
      currentTheme: 'day',
      vacancyDescriptionVisible: false,
    };
  },
  methods: {
    getThemeValue(data) {
      this.currentTheme = data;
    },
  },
};
</script>

<style lang="scss">
@import './styles/styles.scss';
</style>
