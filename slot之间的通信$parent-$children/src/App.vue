<template>
  <div id="app">
      <Warp>
          <Box></Box>
      </Warp>
  </div>
</template>

<script> 
import Warp from "./components/warp";
import Box from "./components/box";
 
export default {
  name: "app",
    data() {                 
        return {
           
        };
    },
    components:{
        [Warp.name]:Warp,
        [Box.name]:Box
    },
    methods: {
       
    }, 
};
</script>

<style>

</style>
