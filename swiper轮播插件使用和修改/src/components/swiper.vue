<template>
    <swiper :options="swiperOption">
        <swiper-slide class="box" :style='styleData' v-for="(item,index) in imglist" :key="index"><img :src="item"/></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    loop: true,//无限轮播
                    speed:1500,//划过速度
                    autoplay: {
                        delay: 3000,//停留时间
                        disableOnInteraction: true//触碰后继续轮播
                    },
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }
                }
            };
        },
        props:{
            imglist:{
                type:Array
            },
            timer:{
                type:Number
            },
            styleData:{
                type:Object,
                default:function(){
                    return {
                        height:"300px"
                    }
                }
            }
        },
        methods: {
            
        },
        create() {
            console.log(this.swiperOption.autoplay.delay)
            this.swiperOption.autoplay.delay = this.timer;
            console.log(this.swiperOption.autoplay.delay)
        },
    };
</script>
<style scoped>
    .box img{
        width: 100%;
        height: 100%;
    }
</style>
