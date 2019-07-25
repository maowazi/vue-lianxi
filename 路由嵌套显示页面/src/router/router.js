import Vue from "vue";
import VueRouter from "vue-router";
import goods from "./goods";
import orders from "./order";
import users from "./user";
Vue.use(VueRouter);
const routes = [
    ...goods,
    ...orders,
    ...users
    
]
export default new VueRouter({
    mode: "history" ,
    routes
})