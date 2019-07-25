<template>
  <div id="app">
    <Add @adddata="adddata" />                        <!--定义自定义事件,add那边会触发-->
    <List :data="showData" @action="action"/>         <!--传递数值,list那边会接收,并定义自定义事件list那边触发,并传递数据过来-->
    <Tools @flit="flit" :selectstate="selectstate"/>
    
  </div>
</template>

<script>
import Add from "./components/add";
import List from "./components/list";
import Tools from "./components/tools";
export default {
  name: "app",
    data() {                 //把数据状态保存在这里目的为了方便与各子组件传递(如果要修改数要从各组件传递信号过来,让本组件自己修改)
        return {
            
            datalist:[],
            selectstate:"all"
        };
    },
    components: {
        Add,
        List,
        Tools
    },
    methods: {
        adddata(val) {
            //添加对象的目的为了有一个状态值
            let obj = {
                val:val,
                status:"todo"
            }
            this.datalist.push(obj);
        },
        action(index){
            //修改数组从index的位置删除一个,用后面的对象代替,{取出datalist数组里的第index个元素并解构,而且把当前元素的status值修改成finished}
            this.datalist.splice(index,1,{...this.datalist[index],status:"finished"})
        },
        //从tools传过来的状态值
        flit(status){
            this.selectstate = status;
        }
        
    },
    computed: {
        showData(){
            /**
            此方法用来过滤,判断几种状态值,是所有(all)完成的(finished)待办(todo)
            let newdata = this.datalist.filter((item)=>{
                return item.status === this.selectstate
            })
            filter用来过滤相当于遍历,用数组点它,后面括号里是回调函数item是每个元素,下面如果return的是true就会保留此元素
            如果return的是false就丢弃不保存,最后会返回一个新的数组并把return为true的元素放里面
             */
            // if(this.selectstate === "all"){
            //     return this.datalist
            // }else if(this.selectstate === "finished"){
            //     let newdata = this.datalist.filter((item)=>{
            //         return item.status === this.selectstate
            //     })
            //     return newdata
            // }else if(this.selectstate === "todo"){
            //     let newdata = this.datalist.filter((item)=>{
            //         return item.status === this.selectstate
            //     })
            //     return newdata
            // }


            // if(this.selectstate === "all"){
            //     return this.datalist
            // }else{
            //     return this.datalist.filter(item=>item.status === this.selectstate)
            // }


            return this.selectstate === "all" ? this.datalist : this.datalist.filter(item=>item.status === this.selectstate)
        }
    },
};
</script>

<style>

</style>
