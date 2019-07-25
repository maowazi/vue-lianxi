<template>
    <div>
        <input type="text" v-model="val"/><button @click="handadd">添加</button>
    </div>
</template>
<script>
export default {
    name:"Add",
    data:function(){
        return {
            val:''
        }
    },
    props:{

    },
    methods:{
        handadd(){
            //触发APP那边的自定义事件(那边是个函数),并传递当前的input输入值(因为数据在那边保存所以需要在那边修改)
            this.$emit("adddata",this.val);
            this.val = "";
        }
    }
}
</script>
<style scoped>

</style>


