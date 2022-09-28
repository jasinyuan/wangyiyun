<template>
  <router-view></router-view>
  <the-bottom v-show="$store.state.inFooterMusic"></the-bottom>
</template>

<script>
import TheBottom from './components/OverallSituation/TheBottom.vue'

export default {
  components: { TheBottom },

}
</script>
<style lang="less" >
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.icon{
  width: 25px;
  height: 25px;
}
a{
  color: black;
}
</style>
