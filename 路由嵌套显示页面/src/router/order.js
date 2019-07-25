const orders = [
    {
        path: "/orders",
        redirect:"/orders/daifahuo",
        component: () => import("../components/manu/ordermanu"),
        children: [
            {
                path: "chaping",
                component:() => import("../page/order/chaping")
            },
            {
                path: "daifahuo",
                component: () => import("../page/order/daifahuo")
            },
            {
                path: "daifukuan",
                component: () => import("../page/order/daifukuan")
            },
            {
                path: "daipingjia",
                component: () => import("../page/order/daipingjia")
            },
            {
                path: "haoping",
                component: () => import("../page/order/haoping")
            },
            {
                path: "tousu",
                component: () => import("../page/order/tousu")
            },
            {
                path: "yipingjia",
                component: () => import("../page/order/yipingjia")
            },
            {
                path: "tuikuan",
                component: () => import("../page/order/tuikuan")
            }
        ]
    }
]
export default orders;