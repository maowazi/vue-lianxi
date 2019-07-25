<template>
    <div>
        <p>two</p>
        <h3>接收的值是:{{msg}}</h3>        
    </div>
</template>
<script>
import vm from "../state";
export default {
    data() {
        return {
            msg:""
        }
    },
    created() {
        vm.$on("handSend",(val)=>{
            this.msg = val;
        })
    },
    
}
</script>
<style scoped>

</style>
