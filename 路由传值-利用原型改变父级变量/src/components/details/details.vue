<template>
    <div class="box">
        <h1>参数为: {{$route.params.name}} </h1>
        <input type="text" v-model="val">
        <button @click="handUpdate">修改</button>
    </div>
</template>
<script>
export default {
    name: "detail",
    data:function(){
        return {
            val:"1",
            selectindex:"-1"
        }
    },
    created() {
        console.log(this.$route)
        this.val = this.$route.params.name;
        this.selectindex = this.$route.params.index;
    },
    methods: {
        handUpdate(){
            this.$center.$emit("Upadate",this.val,this.selectindex)
        }
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