<template>
    <div>
        <p>选项</p>
        <button v-for="(item,index) in buttonlist" :key="index" @click="handClick(item.status)" :class="{active:item.status === selectstate}">{{item.title}}</button>
    </div>
</template>
<script>
export default {
    name:"Tools",
    data:function(){
        return {
            buttonlist: [
                {
                    title: "全部",
                    status:"all"
                },
                {
                    title: "待办",
                    status:"todo"
                },
                {
                    title: "完成",
                    status:"finished"
                }
            ]
        }
    },
    props:{                   //接收父级的状态值以便根据状态值修改按钮的class
        selectstate:{
            type:String,
            default:"all"
            // required:true
        }
    },
    methods:{
        handClick(index){                  //向父级发送状态值,当前访问的是哪个按钮
            this.$emit("flit",index)
        }
    }
}
</script>
<style scoped>
    .active{
        background: gold;
    }
</style>