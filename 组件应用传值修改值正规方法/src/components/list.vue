<template>
    <div>
        <h1>列表</h1>
        <ol>
            <li v-for="(item,index) in data" 
                :key="index"
                :class="{action:item.status === 'finished'}"
                >{{item}}
                <button 
                @click="handwan(index)" 
                v-if="item.status === 'todo'"      
                
                >完成</button>
                
            </li>
             <!--todo根据状态值让按钮显示或隐藏(默认是todo)-->
        </ol>
    </div>
</template>
<script>
export default {
    name:"List",
    data:function(){
        return {

        }
    },
    props:{       //接收父级传递过来的值data是那边自定义的属性
        data:{
            type:Array,
            
        }
    },
    methods:{
        handwan(index){
            //触发父级那边的函数,让他修改当前下标的状态值
            this.$emit("action",index)
        }
    }
    
}
</script>
<style scoped>
.action{
    text-decoration: line-through;
}
</style>