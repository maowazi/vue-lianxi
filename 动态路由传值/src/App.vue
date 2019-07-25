<template>
    <div id="app">
        <h1>
            <router-link 
            v-for="item in buttons" 
            :key="item.id" 
            :to="item.path" 
            tag="button"
            >
            {{item.title}}
            </router-link>
        </h1>
       <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            buttons: [
                {title: "首页",id:1,path: "/home"},
                {title: "列表",id:2,path: "/list"},
                {title: "设置",id:3,path: "/setting"}
            ]
        }
    }
}
</script>

<style>

</style>
