import Vue from 'vue'
import App from './App.vue';
import odd from "./filter";//引入组件库
Vue.use(odd);//使用组件


Vue.config.productionTip = false;
// Vue.filter("odd", (val) => {
//     console.log(val)
    
//         let num = val.filter(i => i % 2 == 0)
//         return num
   
    
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
