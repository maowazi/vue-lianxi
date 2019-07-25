<template>
    <div class="box">
        <ul>
            <li v-for="item in tabarlist" :key="item.id"
            @click="handSendId(item.id)"
            :class="{active:item.id === selectId}"
            >
                {{item.title}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        selectId:{
            type:Number,
            required:true
        }
    },
    data:function(){
        return {
            tabarlist:[
                { id:1,title:"首页" },
                { id:2,title:"列表" },
                { id:3,title:"我的" }
            ]
        }
    },
    methods: {
        handSendId(id){
            this.$emit("change",id)
        }
    },    
}
</script>
<style scoped>
    ul,li{
        margin: 0;
        padding:0;
    }
    .box{
        position: absolute;
        width: 100%;
        height: 100px;
        left: 0;
        bottom: 0;
    }
    ul{
        display: flex;
        height: 100%;
        justify-content: space-around;
        align-items: center;
    }
    li{
        list-style: none;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        flex: 1;
        cursor: pointer;
    }
    .active{
        background-color: #f40;
    }
</style>
