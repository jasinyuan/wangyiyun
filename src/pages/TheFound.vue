<template>
  <the-header></the-header>
  <the-swipe></the-swipe>
  <icon-list></icon-list>
  <music-list></music-list>
</template>

<script>
import TheHeader from '../components/found/TheHeader.vue'
import TheSwipe from '../components/found/TheSwipe.vue'
import IconList from '../components/found/IconList.vue'
import MusicList from '../components/found/MusicList.vue'
export default {
  components:{ TheHeader, TheSwipe,IconList, MusicList }
}
</script>

<style lang="less" scoped>

</style>