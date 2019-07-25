import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = [
    {
        path: "/order",
        component:() => import("./components/order")
    }
]
export default new VueRouter({
    mode: "history",
    routes:router
})