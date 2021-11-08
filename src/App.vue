<template>
  <div id="app" :class="CURRENT_SITE_THEME">
    <Header />
    <router-view> </router-view>
    <Footer v-if="FOOTER_STATE" />
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(['SET_FOOTER_STATE']),
    getThemeValue(data) {
      this.currentTheme = data;
    },
    setFooterStateToStorage() {
      if (!localStorage.getItem('isFooterVisible')) {
        localStorage.setItem('isFooterVisible', false);
      }
    },
  },
  computed: {
    ...mapGetters(['FOOTER_STATE', 'CURRENT_SITE_THEME']),
  },
  mounted() {
    this.setFooterStateToStorage();
  },
};
</script>

<style lang="scss">
@import './styles/styles.scss';
</style>
