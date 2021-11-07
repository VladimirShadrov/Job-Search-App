<template>
  <div id="app" :class="currentTheme">
    <Header @setThemeValue="getThemeValue" />
    <Vacancies v-if="vacancyIsVisible" />
    <Description />
    <Footer />
  </div>
</template>

<script>
import Header from './components/header.vue';
import Vacancies from './components/vacancyListPage/vacancies.vue';
import Description from './components/vacancyDescriptionPage/description.vue';
import Footer from './components/footer.vue';

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

      vacancyIsVisible: false,
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
