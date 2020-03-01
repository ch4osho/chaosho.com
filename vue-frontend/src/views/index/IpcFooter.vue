<template>
  <footer class="ipc">
        互联网ICP备案：<a :href="url">{{ipc}}</a>
    </footer>
</template>

<script>
export default {
    name: 'ipc-footer',
    data(){
        return {
            url: 'http://www.beian.miit.gov.cn',
            ipc: '粤ICP备19076464号-1'
        }
    }
}
</script>

<style>

</style>