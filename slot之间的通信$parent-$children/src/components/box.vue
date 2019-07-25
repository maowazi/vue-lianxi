<template>
    <div class="box">
        <p>box</p>
        <ol>
            <li v-for="item in selectdata" :key="item">{{item}}</li>
        </ol>        
    </div>
</template>
<script>
export default {
    name:"Box",
    data() {
        return {
            info:{
                "北京":["烤鸭","豆汁","糖葫芦"],
                "天津":["汤包","狗不理","麻花"],
                "广州":["深井烧鹅","多宝鱼","烧腊","白切鸡","石头鱼","叉烧"],
                "湖南":["酱板鸭","口味虾","臭豆腐","烟熏肉"],
                "四川":["麻辣火锅","腊肉","兔肉","香肠"]
            },
            select:"北京"
        }
    },
    computed: {
        selectdata(){
            return this.info[this.select]
        }
    },
    methods: {
        selectCity(item){
            // console.log(item)
            this.select = item;
           
        }
        
    },
}
</script>
<style scoped>
.box{
    padding: 20px;
    border: 1px solid #ccc;
}

</style>
