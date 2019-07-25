<template>
    <div class="foot">
        <router-link to="/order" tag="h1">底-点击弹出新页面</router-link>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.foot{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
h1{
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: blue;
    color: #fff;
}
</style>

