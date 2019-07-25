<template>
    <div class="header">
        <div class="logo"><h1>logo</h1></div>
        <ul class="nav">
            <router-link v-for="item in navlist" :key="item.title" :to="item.path" tag="li">{{item.title}}</router-link>
        </ul>
        <div class="logUp">
            <span>用户</span>
            <span>退出登录</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "heade",
    data() {
        return {
            navlist:[
                {title:"商品管理",path:"/add-goods"},
                {title:"订单管理",path:"/order-evaluated"},
                {title:"用户管理",path:"/user-setting"}
            ]
        }
    },
}
</script>
<style scoped>
.header{
    width: 100%;
    height: 50px;
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    border-bottom: 1px solid #ccc;
}
.logo{
    width: 150px;
}
.nav{
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.logUp{
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>
