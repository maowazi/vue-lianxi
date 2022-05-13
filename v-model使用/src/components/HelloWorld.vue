<template>
  <div class="hello">
    <h1>msg</h1>
    <input
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style scoped>

</style>
