<template>
  <div class="card">
      <ul>
            <li v-for="item in list" :key="item">
            <input type="checkbox"> {{item}}
            </li>
          </ul>
          <button @click="add">add</button>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
        list: [1,2,3,4,5]
        }
    },
    methods: {
        add(){
            this.list.splice(2,0,Math.random())
        },
    }
}
</script>

<style>

</style>