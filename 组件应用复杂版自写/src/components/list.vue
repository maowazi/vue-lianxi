<template>
    <div class="list">
        <h2>详情</h2>
        <Daiban v-show="xinxi == 'daiban'" :dataval="dataval" @handdata="handdata"/>
        <Wancheng v-show="xinxi == 'wancheng'" :datalist="datalist" />
    </div>    
</template>
<script>
import Daiban from "./xiangqing/daiban";
import Wancheng from "./xiangqing/wancheng";
export default {
    name:"List",
    data:function(){
        return {
            datalist:[]
        }
    },
    components:{
       Daiban,
       Wancheng
    },
    props:{
        xinxi:{
            type:String
        },
        dataval:{
            type:Array
        }
    },
    methods: {
        handdata:function(val){
            this.datalist.push(val);
        }
    },
    
}
</script>
<style scoped>
    .list{
        border: 1px solid #ccc;
        min-height: 100px;
        margin-top: 20px;
    }
</style>

