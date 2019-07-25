<template>
    <div id="app">
        <Heade/>
        <router-view class="inner"></router-view>
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

.inner{
    margin-top: 50px;
}
</style>
