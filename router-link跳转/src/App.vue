<template>
    <div id="app">
        <h1>app</h1>
        <router-view></router-view>
        <router-link v-for="item in buttons" :to="item.path" :key="item.title" tag="button">{{item.title}}</router-link>
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            buttons:[
                {title:"主页",path:"/home"},
                {title:"列表",path:"/list"},
                {title:"我的",path:"/mine"}
            ]
        }
    },
    components: {
    
    },
    created() {
       
    },
}
</script>

<style>
.router-link-active{
    background: gold;
}
</style>
