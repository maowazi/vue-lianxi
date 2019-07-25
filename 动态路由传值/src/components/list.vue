<template>
    <div>
        <ol>
            <!-- :to="item.path+'/'+item.title" 拼接方式一定要注意  -->
            <router-link v-for="item in list" :key="item.title" :to="item.path+'/'+item.title" tag="li">{{item.title}}</router-link>
        </ol>
    <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:"list",
    data() {
        return {
            list: [
                {title:"日用",path:"/list/details"},
                {title:"水果",path:"/list/details"},
                {title:"春秋装",path:"/list/details"},
                {title:"冬装",path:"/list/details"}
            ]
        }
    },
}
</script>
<style scoped>

</style>
