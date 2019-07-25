const state = {
    title: "one"
}
const getters = {

}
const mutations = {
    inputchange(state,params) {
        state.title = params
    }
}
const actions = {

}
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}