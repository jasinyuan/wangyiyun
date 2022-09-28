<template>
  <div class="MusicTop">
    <img :src="playlist.coverImgUrl" alt="" class="bgimg"/>
        <div class="left">
            <van-icon name="arrow-left"  class="icon" @click="$router.go(-1)"/>
            <span>歌单</span>
        </div>
        <div class="right">
            <van-icon name="search" class="icon"/>
            <van-icon name="wap-nav" class="icon"/>
        </div>
  </div>
</template>

<script>
export default {
    props:['playlist'],
    setup(props){
        console.log(props);
    }
}
</script>

<style lang="less" scoped>
.MusicTop{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding: 10px;
    position: relative;
    .left,.right{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 10px;
        span{
            font-size: 20px;
            color: #fff;
        }
        .icon{
            fill: #fff;
        }
    }
    .bgimg{
        width: 100%;
        height: 550px;
        position: fixed;
        z-index: -1;
        filter: blur(30px);
    }
}
</style>