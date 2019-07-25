<template>
    <div class="order animated fadeInRight">
        <h1 @click="hand">返回</h1>        
    </div>
</template>
<script>
import animate from 'animate.css';
export default {
    methods: {
        hand(){
            this.$router.back();
        }
    },
}
</script>
<style scoped>
.order{
    width: 100%;
    height: 100%;
    background: aqua;
}
h1{
    height: 100px;
    line-height:100px;
    text-align: center;
    font-size: 30px;
}
</style>

