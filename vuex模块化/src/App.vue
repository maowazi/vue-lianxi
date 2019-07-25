<template>
    <div id="app">
        <h1>{{$store.state.title }}</h1>
        <div><input type="text" ref="input"><button @click="handsend">发送</button></div>
        <p>{{$store.state.one.title }}</p>
        <p>{{$store.state.two.title }}</p>

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
            this.$store.commit("one/inputchange",this.$refs.input.value)
            console.log(this.$store)
        }
    },
}
</script>

<style>


</style>
