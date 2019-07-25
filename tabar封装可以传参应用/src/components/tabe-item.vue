<template>
    <div class="warp"
    @click="handSelect"
    >
        <img :src="isActive?selectimg:img"/>
        <span :class="isActive?'active':''">{{title}}</span>
    </div>
</template>
<script>

export default {
    name:"tabeItem",
    props:{
        title:String,
        img:String,
        selectimg:String
    },
    data:function(){
        return {
            
            isActive:false
        }
    },
    methods: {
        handSelect(){
            // console.log(this.index)
            this.$parent.selectItem(this.index);    //向父级函数传递当前点击的哪一个
        }
    },
}
</script>
<style scoped>
.active{
    color:blue;
}
.warp{
    flex: 1;
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.warp img{
    width: 20px;
    height: 20px;
}
</style>
