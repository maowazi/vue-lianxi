<template>
    <div id="app">
        <p>{{msg | capitalize("a","b")}}</p>
        <p>{{arr | odd}}</p>
        <div class="box" v-drga></div>
    </div>
</template>

<script>

export default {
    name: "app",
    data() {
        return {
            msg:"holle vue",
            arr:[23,44,55,66,77,88]
        }
    },
    filters:{
        capitalize: function (val,...rest) {
            // console.log(val,rest)
            if (!val) return ''
            val = val.toString()
            return val.charAt(0).toUpperCase() + val.slice(1)
        }
    }
   
}
</script>

<style>
.box{
    height: 100px;
    width: 100px;
    border: 1px solid #ccc;
}
</style>
