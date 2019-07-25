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
                {title:"待付款",path:"/order-evaluated"},
                {title:"待发货",path:"/order-Deliver"},
                {title:"已评价",path:"/order-Payment"}
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