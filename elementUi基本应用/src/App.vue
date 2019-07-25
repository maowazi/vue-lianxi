<template>
    <div id="app">
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-slider v-model="value1"></el-slider>
        </div>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="90"></el-progress>
        <el-tree :data="date" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
</template>

<script>
import { Button, Select,Slider,Progress,Tree } from 'element-ui';
export default {
    name: "app",
    data() {
        return {
           value1:90,
           date: [
                {
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                },
                {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }]
                }
            ]
        }
    },
    components:{
        [Button.name]:Button,
        [Slider.name]:Slider,
        [Progress.name]:Progress,
        [Tree.name]:Tree
    },
    methods: {
        handleNodeClick(data) {
            console.log(data);
      }
    },
    
   
}
</script>

<style>

</style>
