<template>
    <div class="box">
        <h1>参数为: {{$route.params.name}} </h1>
    </div>
</template>
<script>
export default {
    name: "detail",
    created() {
        console.log(this.$route)
    },
}
</script>
<style scoped>
.box{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #fff;
}
</style>