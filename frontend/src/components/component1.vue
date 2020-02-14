<template>
  <div>
    <p>这是component1</p>
  </div>
</template>

<script>
import myMixin from './../utils/mixin.js'
// var myMixin =  {
//         data: function(){
//             return {
//                 name: 'chaos'
//             }
//         }
//     }
export default {
    name: "component1",
    mixins: [myMixin],
    props:{
        chaos: Boolean
    },
    data: function(){
        return {
        number: 0
        }
    },
    created(){
        console.log(this.name)
    },
}
</script>

<style>

</style>