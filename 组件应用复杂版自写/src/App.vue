<template>
    <div id="app">
        <h1>简单组件练习</h1>
        <Add @handadd="handadd" />
        <List :xinxi="xinxi" :dataval="dataval" />
        <Todo @diban="diban" @wancheng="wancheng" />
    </div>
</template>

<script>
import Add from "./components/add";
import List from "./components/list";
import Todo from "./components/todo";
export default {
    name: "app",
    data() {
        return {
            xinxi: "daiban",
            dataval: []
        };
    },
    components: {
        Add,
        List,
        Todo
    },
    methods: {
        diban: function(val) {
            this.xinxi = val;
        },
        wancheng: function(val) {
            this.xinxi = val;
        },
        handadd: function(val) {
            this.dataval = val;
        }
    }
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
