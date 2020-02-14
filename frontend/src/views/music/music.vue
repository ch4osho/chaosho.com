<template>
  <div>
    <h1>music</h1>
    <button @click="destory">destory</button>
    <h2 v-for="item in 10000" :key="item">{{item}}{{Math.random() * 100}}</h2>
  </div>
</template>

<script>
export default {
  methods: {
    destory(){
      this.$destroy()
    }
  },
  beforeCreate(){
    console.log('1 -----> music ----> beforeCreate')
  },
  created(){
    console.log('2 -----> music ----> created')
  },
  beforeMount(){
    console.log('3 -----> music ----> beforeMount')
  },
  mounted(){
    console.log('4 -----> music ----> mounted')
  },
  beforeDestroy(){
    console.log('5 -----> music ----> beforeDestory')
  },
  updated(){
    console.log('7 -----> music ----> updated')
  },
  destroyed(){
    console.log('6 -----> music ----> destroyed')
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