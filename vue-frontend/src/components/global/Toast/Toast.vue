<template>
  <div
    class="wrap"
    id="xdh-toast"
    v-if="showWrap"
    :style="'left:' + position + ';'"
    :class="showContent ? 'fadein' : 'fadeout'"
  >
    {{ text }}
  </div>
</template>

<style scoped>
.wrap {
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px 20px;
  transform: translate(-50%, -50%);
  color: #fff;
  font-family: Microsoft YaHei;
  font-weight: 400;
  text-align: center;
  /* min-height: 40px; */
  line-height: 20px;
  font-size: 12px;
  z-index: 2000;
}
.fadein {
  animation: animate_in 0.25s;
}
.fadeout {
  animation: animate_out 0.25s;
  opacity: 0;
}
@keyframes animate_in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes animate_out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
