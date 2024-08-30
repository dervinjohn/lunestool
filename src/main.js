/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faCaretDown,
  faRightToBracket,
  faHome,
  faMessage,
  faBriefcase,
  faSpinner,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';

import {
  faCircleCheck,
  faCircleXmark,
  faCircleQuestion,
} from '@fortawesome/free-regular-svg-icons';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

Vue.config.productionTip = false;

library.add(faCaretDown);
library.add(faRightToBracket);
library.add(faHome);
library.add(faMessage);
library.add(faBriefcase);
library.add(faSpinner);
library.add(faCircleExclamation);
library.add(faCircleCheck);
library.add(faCircleQuestion);
library.add(faCircleXmark);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
