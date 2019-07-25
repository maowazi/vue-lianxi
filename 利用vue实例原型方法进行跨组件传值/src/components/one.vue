<template>
    <div>
        <p>one</p>        
        <input type="text" v-model="val"/><button @click="handSend">发送</button>
    </div>
</template>
<script>
import vm from "../state";
export default {
    data:function(){
        return {
            val:''
        }
    },
    methods: {
        handSend(){
            vm.$emit("handSend",this.val)
            this.val = ""
        }
    },
    
}
</script>
<style scoped>

</style>
