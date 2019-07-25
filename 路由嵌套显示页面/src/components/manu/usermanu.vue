<template>
    <div class="mauncontent">
        <ul>
            <router-link v-for="item in list" :key="item.title" :to="item.path" tag="li">{{item.title}}</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[
                {title:"所有用户",path:"/users/suoyou"},
                {title:"VIP用户",path:"/users/vip"},
                {title:"钻石用户",path:"/users/zuanshi"}
            ]
        }
    },
}
</script>
<style scoped>
.mauncontent{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
li{
    height: 30px;
    line-height: 30px;
}
</style>
