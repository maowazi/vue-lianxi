import Vue from 'vue'
import App from './App.vue';
import Drga from "./drga";

Vue.config.productionTip = false;
Vue.directive("drga", Drga);      //引入封装指令

new Vue({
  render: h => h(App),
}).$mount('#app')
