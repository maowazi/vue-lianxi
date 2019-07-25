import drga from "./drga";
export default {
    install(Vue) {
        // Vue.component(TabItem.name, TabItem);全局注册组件,组件文件正常写
        Vue.directive('drga', drga);//注册指令,要导出函数
        
        Vue.filter("odd", (val) => { //注册过滤
            let num = val.filter(item => item % 2 === 0);
            return num
        })
    }
}
