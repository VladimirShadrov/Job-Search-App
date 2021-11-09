import Vue from 'vue';
import Vuex from 'vuex';
import data from './data/data';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isFooterVisible: JSON.parse(sessionStorage.getItem('isFooterVisible')),
    siteTheme: localStorage.getItem('theme'),
    allVacancies: JSON.parse(data),
    vacancyNumberForList: 12,
    vacancyForVacancyListArray: [],
    selectedVacancy: JSON.parse(sessionStorage.getItem('selectedVacancy')),
  },

  mutations: {
    CHANGE_FOOTER_STATE(state) {
      state.isFooterVisible = !state.isFooterVisible;
      sessionStorage.setItem('isFooterVisible', state.isFooterVisible);
    },

    CHANGE_THEME(state) {
      state.siteTheme === 'day'
        ? (state.siteTheme = 'night')
        : (state.siteTheme = 'day');
      localStorage.setItem('theme', state.siteTheme);
    },

    CHANGE_VACANCY_FOR_VACANCY_LIST(state, data) {
      state.vacancyForVacancyListArray = state.allVacancies.slice(0, data);
    },

    FIND_SELECTED_VACANCY(state, vacancy) {
      const currentVacancy = state.allVacancies.find(
        (item) => item === vacancy
      );
      sessionStorage.setItem('selectedVacancy', JSON.stringify(currentVacancy));
      state.selectedVacancy = JSON.parse(
        sessionStorage.getItem('selectedVacancy')
      );
    },
  },

  actions: {
    TOGGLE_FOOTER_VISIBILITY(context) {
      context.commit('CHANGE_FOOTER_STATE');
    },

    TOGGLE_THEME(context) {
      context.commit('CHANGE_THEME');
    },

    GET_VACANCIES_FOR_VACANCY_LIST(context) {
      const vacancyNumber = this.state.vacancyNumberForList;

      context.commit('CHANGE_VACANCY_FOR_VACANCY_LIST', vacancyNumber);
    },

    GET_SELECTED_VACANCY(context, vacancy) {
      context.commit('FIND_SELECTED_VACANCY', vacancy);
    },
  },

  getters: {
    FOOTER_STATE(state) {
      return state.isFooterVisible;
    },

    CURRENT_SITE_THEME(state) {
      return state.siteTheme;
    },

    CURRENT_VACANCIES_NUMBER(state) {
      return state.vacancyForVacancyListArray;
    },

    SELECTED_VACANCY(state) {
      return state.selectedVacancy;
    },
  },
});

export default store;
