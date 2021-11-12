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
    isModalVisible: false,
    isModalTransparent: true,
    modalText: '',
    isModalExist: false,
    isDataLoading: true,
  },

  mutations: {
    CHANGE_FOOTER_STATE(state) {
      state.isFooterVisible = !state.isFooterVisible;
      sessionStorage.setItem('isFooterVisible', state.isFooterVisible);
    },

    HIDES_FOOTER(state) {
      state.isFooterVisible = false;
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

    INCREASE_VACANCY_LIST(state) {
      state.vacancyNumberForList += 3;

      if (state.vacancyNumberForList >= state.allVacancies.length) {
        state.vacancyNumberForList = state.allVacancies.length;
      }

      state.vacancyForVacancyListArray = state.allVacancies.slice(
        0,
        state.vacancyNumberForList
      );
    },

    CHANGE_LOADING_CLASS(state) {
      state.isDataLoading = !state.isDataLoading;
    },

    SORT_VACANCIES(state, vacancies) {
      state.vacancyForVacancyListArray = vacancies;
    },

    MODAL_VISIBILITY_CHANGE(state) {
      state.isModalVisible = !state.isModalVisible;
      state.isModalExist = !state.isModalExist;
    },

    MODAL_TEXT_CHANGE(state, text) {
      state.modalText = text;
    },

    MODAL_TRANSPARENT_CHANGE(state) {
      state.isModalTransparent = !state.isModalTransparent;
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
      context.commit('HIDES_FOOTER');

      if (this.state.isModalVisible && !this.isModalTransparent) {
        context.commit('MODAL_VISIBILITY_CHANGE');
        context.commit('MODAL_TRANSPARENT_CHANGE');
      }

      setTimeout(() => {
        const vacancyNumber = this.state.vacancyNumberForList;
        context.commit('CHANGE_VACANCY_FOR_VACANCY_LIST', vacancyNumber);

        if (this.state.isDataLoading) {
          context.commit('CHANGE_LOADING_CLASS');
        }
      }, 500);
    },

    GET_SELECTED_VACANCY(context, vacancy) {
      context.commit('FIND_SELECTED_VACANCY', vacancy);
    },

    INCREACE_VACANCY_NUMBER(context) {
      context.commit('CHANGE_LOADING_CLASS');

      setTimeout(() => {
        context.commit('INCREASE_VACANCY_LIST');
        context.commit('CHANGE_LOADING_CLASS');
      }, 500);
    },

    CHANGE_VACANCY_LIST(context, sortedVacancy) {
      context.commit('SORT_VACANCIES', sortedVacancy);
    },

    CHANGE_MODAL_VISIBILITY(context) {
      context.commit('MODAL_VISIBILITY_CHANGE');
    },

    CHANGE_MODAL_TEXT(context, text) {
      context.commit('MODAL_TEXT_CHANGE', text);
    },

    CHANGE_MODAL_TRANSPARENT(context) {
      context.commit('MODAL_TRANSPARENT_CHANGE');
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

    CURRENT_VACANCY_LIST(state) {
      return state.vacancyForVacancyListArray;
    },

    MODAL_VISIBILITY(state) {
      return state.isModalVisible;
    },

    MODAL_TEXT(state) {
      return state.modalText;
    },

    MODAL_TRANSPARENT(state) {
      return state.isModalTransparent;
    },

    MODAL_EXIST(state) {
      return state.isModalExist;
    },

    DATA_LOADING(state) {
      return state.isDataLoading;
    },
  },
});

export default store;
