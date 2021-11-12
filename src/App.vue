<template>
  <div id="app" :class="CURRENT_SITE_THEME">
    <Header />
    <router-view> </router-view>
    <Footer v-if="FOOTER_STATE" />
    <Modal v-if="MODAL_VISIBILITY" />
  </div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Modal from './components/modal.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Modal,
    Footer,
  },
  data() {
    return {
      isModalVisible: true,
    };
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
    ...mapGetters(['FOOTER_STATE', 'CURRENT_SITE_THEME', 'MODAL_VISIBILITY']),
  },
  mounted() {
    this.setFooterStateToStorage();
  },
};
</script>

<style lang="scss">
@import './styles/styles.scss';
</style>
