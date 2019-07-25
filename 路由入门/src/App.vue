<template>
  <div id="app">
      <h1>app</h1>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  },
  created() {
      console.log(this)
  },
}
</script>

<style>

</style>
