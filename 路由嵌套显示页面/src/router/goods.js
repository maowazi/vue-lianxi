const goods = [
    {
        path: "/",
        redirect:"/goods"
    },
    {
        path: "/goods",
        component: () => import("../components/manu/goodsmanu"),
        children: [
            {
                path: "/goods",
                redirect:"/goods/addgoods"
            },
            {
                path: "addgoods",
                component:() => import("../page/goods/addgoods")
            },
            {
                path: "tejiagoods",
                component: () => import("../page/goods/tejiagoods")
            },
            {
                path: "xiajiagoods",
                component: () => import("../page/goods/xiajiagoods")
            }
        ]
    }
]
export default goods;