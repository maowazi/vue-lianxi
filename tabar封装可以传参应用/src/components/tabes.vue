<template>
    <div class="nav">
        <slot/>
    </div>
</template>
<script>

export default {
    name:"Tabes",
    props:{              //接收父级的v-model传递过来的值,默认用value接收
        value:{
            type:Number
        }
    },
    methods: {
        selectItem(index){                             //此处的index是children传递过来的,函数也是那边触发的
            // console.log(index)

            this.$children.forEach((element,i)=>{     //遍历每一个子级
                if(i === index){                         
                    element.isActive = true;          //当i等于传递过来的index时让当前的元素的isActive属性为true
                }else{
                    element.isActive = false;
                }
            })
            this.$emit("input",index);               //触发父级的v-model事件(默认是input),并把值传递过去,目的为了修改父级的传过来的值
        }
    },
    mounted() {
        this.$children.forEach((element,index) => { //挂载完成后拿到子级给每一个子级添加一个index属性,目的为了子级在点击时可以传递过来点击的第几个
            element.index = index;
        });
        this.$children[this.value].isActive = true;  //给子级传递默认值
    },
    
}
</script>
<style scoped>
.nav{
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    height: 50px;
    
}
</style>
