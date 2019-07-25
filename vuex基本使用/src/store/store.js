import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
    title: "hello vue",
    num:10
}
const getters = {
    numfilter(state) {
        return state.num/5
    }
}
const mutations = {
    inputchang(state,params) {
        state.title = params
    }
}
const actions = {
    inputchange(commi,params) {
        commi.commit("inputchang",params)
    }
}
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
export default store;