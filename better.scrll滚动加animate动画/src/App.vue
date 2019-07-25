<template>
    <div id="app">
        <Heare/>
        <div class="warp ">
            <div>
                <h1 v-for=" item in 50" :key="item">{{item}}</h1>
            </div>
        </div>
        <router-view></router-view>
        <foote/>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import Heare from "./components/heade";
import foote from "./components/foote";
export default {
    name: 'app',
    data() {
        return {
        }
    },
    components:{
        Heare,
        foote
    },
    mounted() {
        let scroll = new BScroll(".warp")
    }
}
</script>

<style>

.warp{
    position: absolute;
    top: 50px;
    left: 0;
    bottom: 50px;
    width: 100%;
    overflow: auto;
}
h1{
    height: 30px;
    line-height: 30px;
    text-align: center;
}
</style>
