import Vue from 'vue';
import Router from 'vue-router';

import Vacancies from '../vacancyListPage/vacancies.vue';
import Description from '../vacancyDescriptionPage/description.vue';

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'vacancies',
      component: Vacancies,
    },
    {
      path: '/vacancy',
      name: 'vacancy-description',
      component: Description,
      props: true,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
});

export default router;
