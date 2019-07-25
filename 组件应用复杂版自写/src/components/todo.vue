<template>
    <div class="Todo">
        <p>选择</p>       
        <button @click="daiban">待办</button><button @click="wancheng">完成</button>
    </div>
</template>
<script>
export default {
    name:"Todo",
    methods: {
        daiban:function(){
            
            this.$emit("diban","daiban")
        },
        wancheng:function(){
            this.$emit("wancheng","wancheng")
        }
    },
}
</script>
<style scoped>
    .Todo{
        height: 50px;
        border: 1px solid #ccc;
        margin-top: 20px;
    }
</style>
