/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';

/* Import the FontAwesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { far } from '@fortawesome/free-regular-svg-icons'; // Regular icons
import { fab } from '@fortawesome/free-brands-svg-icons'; // Brand icons

/* Import the FontAwesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* Add all icons to the library */
library.add(fas, far, fab);

/* Register the FontAwesomeIcon component globally */
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
