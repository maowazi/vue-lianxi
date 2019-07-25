import Vue from 'vue'
import App from './App.vue';

Vue.config.productionTip = false;

// Vue.directive("指令名字,用时在前面加一个(v-)",(此处参数有很多主要用(el)是当前绑定指令的元素,二个(info)是一个对象用info.value可以得到在调用指令时绑定的值(值是谁调用谁定义,value是固定的))=>{
//     // console.log(res)
//     el.style.background = info.value
// })


Vue.directive("color",(el,info)=>{
    // console.log(res)
    el.style.background = info.value
})
Vue.directive("myText",(el,info)=>{
    el.innerText = info.value
})

new Vue({
  render: h => h(App),
}).$mount('#app')
