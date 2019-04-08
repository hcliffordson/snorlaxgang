import Vue from 'vue';
import './assets/style.scss';
import App from './App.vue';
import router from './router';
import {apolloProvider} from '@/services/apollo';

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
