import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isFooterVisible: JSON.parse(localStorage.getItem('isFooterVisible')),
    siteTheme: localStorage.getItem('theme'),
  },
  mutations: {
    CHANGE_FOOTER_STATE(state) {
      state.isFooterVisible = !state.isFooterVisible;
      localStorage.setItem('isFooterVisible', state.isFooterVisible);
    },

    CHANGE_THEME(state) {
      state.siteTheme === 'day'
        ? (state.siteTheme = 'night')
        : (state.siteTheme = 'day');
      localStorage.setItem('theme', state.siteTheme);
    },
  },
  actions: {
    TOGGLE_FOOTER_VISIBILITY({ commit }) {
      commit('CHANGE_FOOTER_STATE');
    },

    TOGGLE_THEME({ commit }) {
      commit('CHANGE_THEME');
    },
  },
  getters: {
    FOOTER_STATE(state) {
      return state.isFooterVisible;
    },

    CURRENT_SITE_THEME(state) {
      return state.siteTheme;
    },
  },
});

export default store;
