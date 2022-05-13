<template>
  <div id="app">
    <custom-input v-model="searchText"></custom-input>
    <p>{{searchText}}</p>
  </div>
</template>

<script>
import customInput from './components/HelloWorld.vue';
export default {
  name: "App",
  components:{
    customInput
  },
  data() {
    return {
      searchText:''
    };
  },
  methods: {
    
  },
};
</script>

<style>
#app {
}
.active {
  background: red;
}
</style>
