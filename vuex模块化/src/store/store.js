import Vue from "vue";
import Vuex from "vuex";
import one from "./one";
import two from "./two";
Vue.use(Vuex);



const store = new Vuex.Store({
    modules: {
        one,
        two
    }
})
export default store;