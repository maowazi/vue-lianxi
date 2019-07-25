<template>
    <div class="warp">
        <p>warp</p>
        <button v-for="item  in btns" :key="item" @click="handcity(item)" :class="{active:item === select}">{{item}}</button>
        <slot></slot>        
    </div>
</template>
<script>
export default {
    name:"Warp",
    data() {
        return {
            btns:["北京","天津","广州","湖南","四川"],
            select:"北京"
        }
    },
    methods: {
        handcity(item){
            this.$children[0].selectCity(item);
            this.select = item;
        }
    },
    
}
</script>
<style scoped>
.warp{
    padding: 20px;
    border: 1px solid #ccc;
}
.active{
    background: yellow;
}

</style>

