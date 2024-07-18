import Vue from 'vue';
import VueMask from 'v-mask';
import App from './App/App.vue';
import store from './store'
import router from './router'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.use(VueMask);
Vue.use(Vuelidate);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
