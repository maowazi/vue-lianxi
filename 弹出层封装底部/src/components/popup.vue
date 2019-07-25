<template>
    <div class="box" v-show="value">
            <div class="mask" @click="handchange"></div>
            <div class="warpinner">
                <ul>
                    <li v-for="item in datalist" :key="item.name" @click="handfeedback(item)">{{item.name}}</li>
                </ul>
                <div @click="handchange">取消</div>
            </div>
    </div>
</template>
<script>
export default {
    name:"Popup",
    props:{
        value:{
            type:Boolean,
            required:true
        },
        datalist:{
            type:Array,
            required:true
        }
    },
    data() {
        return {

        }
    },
    methods: {
        handchange(){
            this.$emit("input",false)
        },
        handfeedback(item){
            this.$emit("select",item)
        }
    },
}
</script>
<style scoped>
ul,li{
    padding: 0;
    margin: 0;
}
li{
    list-style:none;
    padding: 10px 0;
}
.box{
     position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
}
.mask{
     position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background:rgba(0, 0, 0, 0.2);
}
.warpinner{
    position: absolute;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
    text-align: center;
    padding: 10px 0;
}
</style>
