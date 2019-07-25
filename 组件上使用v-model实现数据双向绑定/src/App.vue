<template>
  <div id="app">
    <keep-alive>
        <component :is="com"></component>
    </keep-alive>
    <Tabar v-model="id"/>
  </div>
</template>

<script>
import Home from "./components/home";
import List from "./components/list";
import Mine from "./components/mine";
import Tabar from "./tabar";
export default {
  name: "app",
    data() {                 
        return {
           id:1
           
        };
    },
    components: {
       Home,
       List,
       Mine,
       Tabar
    },
    computed: {
        com(){
            switch (this.id) {
                case 1:
                    return "Home";
                    break;
                case 2:
                    return "List";
                    break;
                default:
                    return "Mine";
                    break;
            }
        }
    },
    methods: {
        
        
    },
};
</script>

<style>

</style>
