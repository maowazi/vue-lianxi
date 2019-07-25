<template>
    <ul>
        <li v-for="(item,index) in datalist" :key="index">{{item}}</li>
    </ul>
</template>
<script>
export default {
    name:"Wancheng",
    data:function(){
        return {
            list:[]
        }
    },
    props:{
        datalist:{
            type:Array
        }
    }
}
</script>
<style scoped>

</style>