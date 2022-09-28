<template>
<div id="swiperTop">
  <van-swipe :autoplay="4000" lazy-render>
  <van-swipe-item v-for="image in cc" :key="image.id">
    <img :src="image.imageUrl" />
  </van-swipe-item>
</van-swipe>
</div>
</template>

<script>
import api from '../../api/index.js'
import { onBeforeMount, reactive,toRefs } from 'vue'
export default {
    setup() {
        const images = reactive({
            cc:[]
    });
        onBeforeMount(async()=>{
            let {data} = await api.querybanner();
            images.cc =data.banners
        })
        return{
            ...toRefs(images)
        }
    },
}
</script>

<style lang="less">
#swiperTop{
    padding: 0 10px;
    .van-swipe{
    width: 100%;
    height: 150px;
        .van-swipe-item{
            img{
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
        .van-swipe__indicator--active{
            background-color: rgb(219, 130, 130);
        }
    }
}
</style>