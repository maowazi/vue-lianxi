const users = [
    {
        path: "/users",
        component: () => import("../components/manu/usermanu"),
        children: [
            {
                path: "/users",
                redirect:"/users/suoyou"
            },
            {
                path: "suoyou",
                component:() => import("../page/user/suoyou")
            },
            {
                path: "vip",
                component: () => import("../page/user/vip")
            },
            {
                path: "zuanshi",
                component: () => import("../page/user/zuanshi")
            }
        ]
    }
]
export default users;