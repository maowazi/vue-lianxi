<template>
  <div id="app">
    
    <swiper :imglist="imglist" :timer="timer" :styleData="styleData"/>
  </div>
</template>

<script>
import swiper from "./components/swiper";
import img6  from "./img/6.jpg";
import img7  from "./img/7.jpg";
import img8  from "./img/8.jpg";
import img9  from "./img/9.jpg"
export default {
  name: "app",
    data() {                 
        return {
            imglist:[
                img6,
                img7,
                img8,
                img9
            ],
            timer:8000,
            styleData:{
                height:"300px"
            }
           
        };
    },
    components: {
       swiper
    },
    methods: {
        
    },
    computed: {
        
            
    },
};
</script>

<style>

</style>
