import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/home";
import List from "./components/list";
import Setting from "./components/setting";
import Detail from "./components/details/details";
Vue.use(VueRouter);                 /**必须要sue一下 */

export default new VueRouter({
    mode: "hash",                  /**为哈希路由,不写默认也是哈希路由 */
    routes: [                    /**routes是固定的写错会无法跳转 */
        {
            path: "/",
            component: Home
        },
        {
            path: "/home",      /**访问对应路径 */
            component: Home        /**显示对应组件 */
        },
        {
            path: "/list",
            component: List,
            children: [
                {
                    path: "details/:name",
                    component: Detail
                }
            ]
            
        },
        {
            path: "/setting",
            component: Setting
        },
        {
            path: "**",
            redirect: "/home"
        }
    ]
})