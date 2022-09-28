<template>
   <div class="footer">
        <div class="left" @click="updateDetailShow">
            <img :src="playList[playListIndex].al.picUrl" alt=""/>
            <div>
                <p>{{ playList[playListIndex].name }}</p>
                <span>横滑切换上下首</span>
            </div>
        </div>
        <div class="right">
            <img src="../../assets/bofang.png" @click="play" v-if="isbtnShow"/>
            <img src="../../assets/zanting.png" @click="play" v-else/>
            <img src="../../assets/liebiao.png"/>
        </div>
        <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
      <van-popup v-model:show="detailShow" position="bottom" :style="{ height: '100%' ,width:'100%'}" >
          <play-music :music="playList[playListIndex]" :play="play" :isbtnShow="isbtnShow" :addduration="addduration"></play-music>
      </van-popup>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import PlayMusic from './PlayMusic.vue';
export default {
  data(){
    return{
      interval:0
    }
  },
  components: { PlayMusic },
  computed:{
    ...mapState(['','playList','playListIndex','isbtnShow','detailShow'])
  },
  updated(){
    this.$store.dispatch('getlyric',this.playList[this.playListIndex].id)
  },
  mounted(){
    this.$store.dispatch('getlyric',this.playList[this.playListIndex].id)
  },
  methods:{
    play(){
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.updateIsbtnShow(false)
        this.updateTime()
      }else{
        this.$refs.audio.pause();
        this.updateIsbtnShow(true)
       clearInterval(this.interval)
      }
  },
  addduration(){
        this.upduration(this.$refs.audio.duration)
  },
  updateTime(){
    this.interval = setInterval(()=>{
      this.updatecurrentTime(this.$refs.audio.currentTime)
    },1000)
  },
  ...mapMutations(['upduration','updateIsbtnShow','updateDetailShow','updatecurrentTime'])
},
watch:{
        playListIndex(){
            this.$refs.audio.autoplay = true;
            if (this.$refs.audio.paused) {
                this.updateIsbtnShow(false)
            }
        },
        playList(){
          if (this.isbtnShow) {
            this.$refs.audio.autoplay = true;
            this.updateIsbtnShow(false)
          }
        }
    }
}
</script>

<style lang="less" scoped>
.footer{
    width: 100%;
    height: 70px;    
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    display: flex;
    padding: 10px;
    justify-content: space-between;

    .left{
      width:60%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }
    .right{
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img{
          width: 30px;
          height: 30px;
          display: flex;
        }
      }
}
</style>