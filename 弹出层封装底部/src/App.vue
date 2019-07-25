<template>
  <div id="app">
      <button @click="handchange">点击选择</button> 
      <Popup v-model="isShow" :datalist="datalist" @select="handfeedback"/>
  </div>
</template>

<script> 
import Popup from "./components/popup";
 
export default {
  name: "app",
    data() {                 
        return {
            isShow:false,
            datalist:[
                {name:"转发"},
                {name:"收藏"},
                {name:"喜欢"},
                {name:"空间"},
                {name:"微信"},
                {name:"举报"}
            ]
        };
    },
    components:{
        [Popup.name]:Popup
    },
    methods: {
        handchange(){
            this.isShow = true;
        },
        handfeedback(parameter){
            console.log(parameter)
        }
    }, 
};
</script>

<style>

</style>
