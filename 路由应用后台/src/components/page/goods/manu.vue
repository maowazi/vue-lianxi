<template>
    <div class="manu">
        <ul>
            <router-link class="listbox" v-for="item in list" :key="item.title" :to="item.path+'?val='+item.title" tag="li">{{item.title}}</router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name: "manu",
    data() {
        return {
            list: [
                {title:"添加商品",path:"/add-goods",nam:"add-goods"},
                {title:"商品列表",path:"/goods-list",nam:"goods-list"},
                {title:"特价商品",path:"/goods-special",nam:"goods-special"},
                {title:"下架商品",path:"/goods-updercarr",nam:"goods-updercarr"}
            ]
        }
    },
}
</script>
<style scoped>
ul{
    border: 1px solid #ccc;
}
.listbox{
    height: 40px;
    width: 150px;
    line-height: 40px;
    text-align: center;
}
</style>