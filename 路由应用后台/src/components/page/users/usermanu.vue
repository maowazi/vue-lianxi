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
                {title:"所有用户",path:"/user-setting"},
                {title:"VIP用户",path:"/user-vipuser"},
                {title:"VVIP用户",path:"/user-vvipuser"},
                {title:"退出登录",path:"/user-login"}
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