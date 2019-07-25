<template>
    <div id="app">
        <Tabes v-model="selectIndex">
            <template v-for="(item, index) in datalist" >
                <tabeItem :title="item.title" :img="item.img" :selectimg="item.selectimg" :key="index"></tabeItem>
            </template>
            
        </Tabes>
    </div>
</template>

<script>
import Tabes from "./components/tabes";
import tabeItem from "./components/tabe-item";
import Home from "./img/Home.png";
import selectHome from "./img/selectHome.png";
import Manu from "./img/Manu.png";
import selectManu from "./img/selectManu.png";
import Mine from "./img/Mine.png";
import selectMine from "./img/selectMine.png";

export default {
    name: "app",
    data() {
        return {
            datalist: [
                { title: "首页", img: Home, selectimg: selectHome },
                { title: "列表", img: Manu, selectimg: selectManu },
                { title: "我的", img: Mine, selectimg: selectMine }
            ],
            selectIndex:0
        };
    },
    components: {
        [Tabes.name]: Tabes,
        [tabeItem.name]: tabeItem
    },
    methods: {

    },
    watch: {
        selectIndex:function(newval,oldval){  //属性监听selectIndex是否有变化有变化就会执行此函数,得到一个新值和一个旧值
            console.log(newval,oldval)
        }
    },
};
</script>

<style>

</style>
