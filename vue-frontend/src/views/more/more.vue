<template>
  <section id="more" class="full-section">
    <my-scroller :infinite="infinite">
      <div class="contanier">
        <div class="card">
          <p class="title">暂未开发</p>
        </div>
        <div class="card">
          <ul>
            <li v-for="item in list" :key="item">
            <input type="checkbox"> {{item}}
            </li>
          </ul>
          <button @click="add">add</button>
        </div>
        <div class="card">
          <input list="cars"/>
          <datalist id="cars">
            <option value="BMW"></option>
            <option value="Ford"></option>
            <option value="Volvo"></option>
          </datalist>
        </div>
      </div>
    </my-scroller>
  </section>
</template>

<script>
import MyScroller from '@components/global/scroller.vue'
export default {
  name: 'more',
  data: function(){
    return {
      list: [1,2,3,4,5]
    }
  },
  components: {
    MyScroller
  },
  methods:{
    add(){
      this.list.splice(2,0,Math.random())
    },
    getIndexInfo(e){
      e()
      console.log(1)
    },
    onScroll(){
      // console.log(2)
    },
    noDelegation(e){
      console.log(e)
    },
    infinite(e){
      // console.log(e)
      e(true)
      // console.log(444)
    }
  },
  created(){
  }
}
</script>

<style lang="scss" src="./more.scss" scoped></style>
