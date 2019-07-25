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
    data:function(){
        return {
            list:[
                {title:"添加商品",path:"/goods/addgoods"},
                {title:"特价商品",path:"/goods/tejiagoods"},
                {title:"下架商品",path:"/goods/xiajiagoods"}
            ]
        }
    }
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

