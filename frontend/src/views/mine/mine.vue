<template>
<div>
  <h1>mine</h1>
  <button @click="destory">destory</button>
  <button @click="update">update</button>
  <h1>演示update：{{text}}</h1>
  <h2 v-for="item in 10" :key="item">{{item}}{{Math.random() * 100}}</h2>.
</div>
</template>

<script>
export default {
  data: function(){
    return {
      text: '这是测试的字符串'
    }
  },
  methods: {
    destory(){
      this.$destroy()
    },
    update(){
      this.text += '呀'
    }
  },
  beforeCreate(){
    console.log('1 -----> mine ----> beforeCreate')
  },
  created(){
    console.log('2 -----> mine ----> created')
  },
  beforeMount(){
    console.log('3 -----> mine ----> beforeMount')
  },
  mounted(){
    console.log('4 -----> mine ----> mounted')
  },
  beforeDestroy(){
    console.log('5 -----> mine ----> beforeDestory')
  },
  updated(){
    console.log('7 -----> mine ----> updated')
  },
  destroyed(){
    console.log('6 -----> mine ----> destroyed')
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