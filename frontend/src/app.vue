<template>
    <div id="chaos">
        <h1>index</h1>

        <router-link v-for="item in routerList" :to="{name: item.name}" :key="item.name" tag="button">{{item.name}}</router-link>

        <!-- <keep-alive>
            <router-view></router-view>
        </keep-alive> -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data: function (){
        return {
            routerList: [{
                name: 'game'
            },{
                name: 'music',
            },{
                name: 'movie',
            },{
                name: 'mine',
            }]
        }
    }
}
</script>

<style>

</style>