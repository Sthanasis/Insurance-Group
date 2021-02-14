import Vue from 'vue';
import App from './App.vue';
import i18n from './translations/locale';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
