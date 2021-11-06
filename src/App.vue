<template>
  <div id="app" :class="currentTheme">
    <Header @setThemeValue="getThemeValue" />
  </div>
</template>

<script>
import Header from './components/header.vue';

export default {
  name: 'App',
  components: {
    Header,
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
