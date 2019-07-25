import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
    {
        path: "/add-goods",
        name:'add-goods',
        components: {
            manu: () => import("./components/page/goods/manu"),
            page: () => import("./components/page/goods/addGoods")
        }
    },
    {
        path: "/goods-list",
        name: 'goods-list',
        components: {
            manu: () => import("./components/page/goods/manu"),
            page: () => import("./components/page/goods/goodsList")
        }
    },
    {
        path: "/goods-special",
        name: 'goods-special',
        components: {
            manu: () => import("./components/page/goods/manu"),
            page: () => import("./components/page/goods/SpecialOfferGoods")
        }
    },
    {
        path: "/goods-updercarr",
        name: 'goods-updercarr',
        components: {
            manu: () => import("./components/page/goods/manu"),
            page: () => import("./components/page/goods/UndercarriageGoods")
        }
    },
    {
        path: "/order-evaluated",
        name: 'order-evaluated',
        components: {
            manu: () => import("./components/page/order/Ordermanu"),
            page: () => import("./components/page/order/evaluated")
        }
    },
    {
        path: "/order-Deliver",
        name: 'order-Deliver',
        components: {
            manu: () => import("./components/page/order/Ordermanu"),
            page: () => import("./components/page/order/Deliver")
        }
    },
    {
        path: "/order-Payment",
        name: 'order-Payment',
        components: {
            manu: () => import("./components/page/order/Ordermanu"),
            page: () => import("./components/page/order/Payment")
        }
    },
    {
        path: "/user-setting",
        name: 'user-setting',
        components: {
            manu: () => import("./components/page/users/usermanu"),
            page: () => import("./components/page/users/settinguser")
        }
    },
    {
        path: "/user-vipuser",
        name: 'user-vipuser',
        components: {
            manu: () => import("./components/page/users/usermanu"),
            page: () => import("./components/page/users/vipuser")
        }
    },
    {
        path: "/user-vvipuser",
        name: 'user-vvipuser',
        components: {
            manu: () => import("./components/page/users/usermanu"),
            page: () => import("./components/page/users/vvipuser")
        }
    },
    {
        path: "/user-login",
        name: 'user-login',
        components: {
            manu: () => import("./components/page/users/usermanu"),
            page: () => import("./components/page/users/login")
        }
    },
    {
        path: "/",
        redirect: "/add-goods"
    },
    {
        path: "**",
        redirect: "/add-goods"
    }
]
export default new VueRouter({
    mode: "history" ,
    routes
})