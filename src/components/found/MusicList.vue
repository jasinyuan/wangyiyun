<template>
  <div class="musiclist">
    <div class="musicTop">
        <div class="title">发现好歌单</div>
        <div class="more">查看更多</div>
    </div>
    <div class="musiccontent">
        <van-swipe :loop="false" :width="150" class="myswipe" :show-indicators="false">
            <van-swipe-item v-for="mic in mus" :key="mic.id">
            <router-link :to="`/Playlistdetails/${mic.id}`">
                <img :src="mic.picUrl" alt=""/>
                <span class="playconcent">
                    <!-- <img src="../../assets/tubiao.png"/> -->
                {{ changeCount(mic.playCount) }}
                </span>
                <span class="name">{{ mic.name }}</span>
                </router-link>
            </van-swipe-item>
        </van-swipe>
    </div>
  </div>
</template>

<script>
import {  onMounted, reactive, toRefs } from '@vue/runtime-core'
import api from '../../api/index.js'
export default {
    setup(){
        const music = reactive({
            mus:[]
        });
        function changeCount(num){
            if(num >= 100000000){
                return(num / 100000000).toFixed(1) + '亿';
            }else if (num >= 10000){
                return(num / 10000).toFixed(1) + '万'
            }
        }
        onMounted(async()=>{
            let {data} = await api.querymusic()
            music.mus = data.result
            // console.log(music.mus)
            debugger
        })
        return{
            ...toRefs(music),
            changeCount
        }
    }
}
</script>

<style lang="less" scoped>
.musiclist{
    width: 100%;
    height: 250px;
    padding: 10px;
    box-sizing: border-box;

    .musicTop{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .title{
            font-size: 20px;
            font-weight: 900;
        }
        .more{
            border: 1px solid#ccc;
            text-align: center;
            line-height: 30px;
            padding: 0 10px;
            border-radius: 20px;
        }
    }
    .musiccontent{
        width: 100%;
        height: 200px;
        .myswipe{
            height: 100%;
            img{
                width: 95%;
                height: 120px;
                border-radius: 10px;
            }
        }
    }
}
</style>