<template>
    <ul>
        <li v-for="(item,index) in dataval" :key="index">{{item}}<button @click="handwan(index,$event)">完成</button></li>
        
    </ul>
</template>
<script>
export default {
    name:"Daiban",
    data:function(){
        return {

        }
    },
    props:{
        dataval:{
            type:Array
        }
    },
    methods: {
        handwan:function(index,eve){
            this.$emit("handdata",this.dataval[index])
            eve.target.parentNode.style.textDecoration = "line-through";
            
            eve.target.style.display = "none";
        }
    },
}
</script>
<style scoped>

</style>


