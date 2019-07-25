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
                {title:"待发货",path:"/orders/daifahuo"},
                {title:"待付款",path:"/orders/daifukuan"},
                {title:"待评价",path:"/orders/daipingjia"},
                {title:"已评价",path:"/orders/yipingjia"},
                {title:"好评",path:"/orders/haoping"},
                {title:"差评",path:"/orders/chaping"},
                {title:"退款退货",path:"/orders/tuikuan"},
                {title:"投诉",path:"/orders/tousu"}
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
