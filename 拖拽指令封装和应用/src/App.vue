<template>
    <div id="app">
        <div class="box" v-drga.x></div>
    </div>
</template>

<script>

export default {
    name: "app",
    data() {
        return {
            
        }
    }
   
}
</script>

<style>
html,body{
    margin:0;
    padding: 0;
}
.box{
    height: 100px;
    width: 100px;
    background: gold;
    position: absolute;
}
</style>
