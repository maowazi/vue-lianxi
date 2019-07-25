<template>
    <div id="app">
        <Heade/>
        <div class="content">
            <router-view name = "manu"></router-view>
            <router-view name = "page"></router-view>
        </div>
        
    </div>
</template>

<script>
import Heade from "./components/heade/heade";
export default {
    name: 'app',
    data() {
        return {
           
        }
    },
    components:{
        Heade
    }
}
</script>

<style>
.content{
    margin-top: 50px;
    display: flex;
}
</style>
