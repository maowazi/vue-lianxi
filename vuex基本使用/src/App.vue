<template>
    <div id="app">
        <h1>{{$store.state.title }}</h1>
        <div><input type="text" ref="input"><button @click="handsend">发送</button></div>
        <p>{{$store.getters.numfilter}}</p>
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {
        }
    },
    methods: {
        handsend(){
            // this.$store.commit("inputchange",this.$refs.input.value);
            this.$store.dispatch("inputchange",this.$refs.input.value);
        }
    },
}
</script>

<style>


</style>
