<template>
  <div id="app" :class="currentTheme">
    <Header @setThemeValue="getThemeValue" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      currentTheme: 'day',
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
