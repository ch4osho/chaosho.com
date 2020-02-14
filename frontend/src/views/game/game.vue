<template>
  <div>
    <h1>game</h1>
    <button @click="newVue">myVUe</button>
    <component :is="cp"/>
    <component :is="cp"/>
    <component :is="cp"/>
    <component :is="cp"/>
    <ul @click.self="delegatiionTest" id="delegatiionTest" ref="delegation">
      <li v-for="item in 5" :key="item">{{item}}{{Math.random() * 100}}</li>
    </ul>
    <ul id="noDelegation">
      <li v-for="item in 5" :key="item" @click="noDelegation(item)">{{item}}{{Math.random() * 100}}</li>
    </ul>
  </div>
</template>

<script>
import cp from './../../components/component1.vue'
import Mock from 'mockjs'
export default {
  data: function(){
    return {
      number: 0,
      cp: 'cp'
    }
  },
  components: {
    cp
  },
  methods:{
    delegatiionTest(e){
      console.log(e)
      console.log(e.path[0])
    },
    noDelegation(e){
      console.log(e)
    },
    makePromise1(){
      return new Promise((resolve)=>{
        console.log('makePromise1')
        resolve('makePromise1')
      })
    },
    makePromise2(){
      return new Promise((resolve,reject)=>{
        console.log('makePromise2')
        reject('makePromise2')
      }).then((res)=>{
        console.log(res)
      })
    },
    makePromise3(){
      return new Promise((resolve)=>{
        console.log('makePromise3')
        resolve('makePromise3')
      })
    },

    setProps(value){
      return function (target) {
        target.age = value
      }
    },
    newVue(){
      var myVUe = this.$Vue
      var myVueExample = new myVUe({
        render(h){
          return h('cp1', {
            chaos: true
          })
        }
      })
      console.log(myVueExample)
      console.log(myVueExample.$el)
    }
  },
  // beforeCreate(){
  //   console.log('1 -----> game ----> beforeCreate')
  // },
  created(){
    // Promise.all([this.makePromise1(), this.makePromise2(), this.makePromise3()]).then((res)=>{
    //   console.log('进来了resolve',res)
    // }).catch((err)=>{
    //   console.log('进来了catch',err)
    // })

  },
  // beforeMount(){
  //   console.log('3 -----> game ----> beforeMount')
  // },
  mounted(){
    var data = Mock.mock({
      'list|4': [{
        'id|+1': 1,
        name: Mock.Random.cname()
      }]
    })

    console.log(data)
  },
  // beforeDestroy(){
  //   console.log('5 -----> game ----> beforeDestory')
  // },
  // updated(){
  //   console.log('7 -----> game ----> updated')
  // },
  // destroyed(){
  //   console.log('6 -----> game ----> destroyed')
  // }
}
</script>

<style>

</style>