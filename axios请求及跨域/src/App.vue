<template>
    <div id="app">
        
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "app",
    data() {
        return {
           
           
        }
    },
    components:{
        
       
    },
    methods: {
       
    },
    created() {
        // 为给定 ID 的 user 创建请求
        axios.get('/ajax/movieOnInfoList?token=')
        .then((response) => {
            console.log(this)
            console.log(response.data.movieList);
        })
        .catch(function (error) {
            console.log(error);
        });
    },

   
}
</script>

<style>

</style>
