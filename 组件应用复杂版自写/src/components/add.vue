<template>
    <div class="Add">
        <input type="text" v-model="val"/>
        <button @click="handadd">点击添加</button>
    </div>
</template>
<script>
export default {
    name:"Add",
    data() {
        return {
            val:'',
            list:[]
        }
    },
    methods: {
        handadd:function(){
            this.list.push(this.val)
            this.$emit("handadd",this.list);
            this.val = "";
        }
    },
    
}
</script>
<style scoped>
    .Add{
        height: 50px;
        line-height: 50px;
        border: 1px solid #ccc;
    }
</style>

