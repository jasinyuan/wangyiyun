<template>
<div class="topNav">
  <div class="icon">
    <van-icon name="wap-nav" size="25px"/>
  </div>
  <div class="topContent">
      <span @click="$router.push('/mine')">我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
  </div>
  <div class="icon2">
    <router-link :to="`/search`">
      <img src="../../assets/sousuo.png"/>
    </router-link>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .topNav{
    width: 100%;
    height: 50px;
    padding: 0 10px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;

    .topContent{
      width: 65%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 18px;
    }

    .active{
      font-weight: 900;
    }

    .icon2{
      display: flex;
      justify-items: center;
      align-items: center;
      img{
        width: 20px;
        height: 20px;
        display: flex;
      }
    }
  }
</style>