<template>
  <div id="app">
    <h1 v-color="hhh">hahha</h1>
    <p v-myText = "text"></p>
    
  </div>
</template>

<script>
export default {
  name: "app",
    data() {                 
        return {
            hhh:"#f40",
            text:"我是自定义指令添加的"
           
        };
    },
    components: {
       
    },
    methods: {
        
    },
    computed: {
        
            
    },
};
</script>

<style>

</style>
