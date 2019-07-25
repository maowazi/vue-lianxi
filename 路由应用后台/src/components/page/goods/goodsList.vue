<template>
    <div class="header">{{val}}</div>
</template>
<script>
export default {
    name: "goodsList",
    data() {
        return {
            val:""
        }
    },
    created() {
        this.val = this.$route.query.val;
    },
}
</script>
<style scoped>

</style>