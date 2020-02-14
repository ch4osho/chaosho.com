<template>
<div>
  <h1>movie</h1>
  <h2 v-for="item in 10000" :key="item">{{item}}{{Math.random() * 100}}</h2>
</div>
</template>

<script>
export default {
  beforeCreate(){
    console.log('1 -----> movie ----> beforeCreate')
  },
  created(){
    console.log('2 -----> movie ----> created')
  },
  beforeMount(){
    console.log('3 -----> movie ----> beforeMount')
  },
  mounted(){
    console.log('4 -----> movie ----> mounted')
  },
  beforeDestroy(){
    console.log('5 -----> movie ----> beforeDestory')
  },
  updated(){
    console.log('7 -----> movie ----> updated')
  },
  destroyed(){
    console.log('6 -----> movie ----> destroyed')
  },
  // beforeRouteLeave(to, from, next){
  //   console.log('beforeRouteLeave')
  //   this.$destroy()
  //   next()
  // }
}
</script>

<style>

</style>