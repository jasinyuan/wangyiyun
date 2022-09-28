<template>
<img :src="music.al.picUrl" alt="" class="bgimg"/>
  <div class="datailTop">
    <div class="detailTopleft">
        <van-icon name="arrow-left" size="18px" color='#999' @click="backhome"/>
        <div class="leftMarquee">
            <Vue3Marquee style="color:#fff">
                {{ music.al.name }}
            </Vue3Marquee>
            <span v-for="item in music.ar" :key="item">
            {{ item.name }}
            </span>
            <van-icon name="arrow" size="18px" color='#999'/>
        </div>
    </div>
    <div class="detailTopright">
        <van-icon name="share-o" size="18px" color='#999'/>
    </div>
  </div>
  <div class="detailContent" v-show="!lyricshow">
    <img src="../../assets/zhizhen.png" alt="" class="imgzhizhen" :class="{imgzhizhen_active:!isbtnShow}"/>
    <img src="../../assets/yuanpan.png" alt="" class="imgyuanpan"  />
    <img :src="music.al.picUrl" alt="" class="imgal" :class="{imgal_add_active:!isbtnShow , imgal_add_pauesd:isbtnShow}" @click="lyricshow=true"/>
  </div>
  <div class="musiclyric" ref="musiclyric" v-show="lyricshow">
    <p v-for="item in lyric" :key="item" :class="{active:(currentTime * 1000>=item.time && currentTime*1000<item.pre)}">
    {{ item.lrc }}
    </p>
  </div>
  <div class="datailFooter" >
    <div class="footerTop">
        <img src="../../assets/dianz.png" alt="">
        <img src="../../assets/xiazai.png" alt="">
        <img src="../../assets/changpian.png" alt="">
        <img src="../../assets/xiaoxi.png" alt="">
        <img src="../../assets/liebiao2.png" alt="">
    </div>
    <div class="footerContent">
        <input type="range" class="range" min="0" :max="duration" v-model="currentTime" step="0.05">
    </div>
    <div class="footer">
        <img src="../../assets/xunhuan.png" alt="">
        <img src="../../assets/shang.png" alt="" @click="qiehuan(-1)">
        <img src="../../assets/bofang (2).png" alt="" class="imgbofang" @click="play" v-if="isbtnShow">
        <img src="../../assets/zanting.png" alt="" class="imgbofang"  @click="play" v-else/>
        <img src="../../assets/xia.png" alt="" @click="qiehuan(+1)">
        <img src="../../assets/Todo-List.png" alt="">
        </div>
  </div>
</template>

<script>
import { mapMutations, mapState} from 'vuex'
export default {
    data(){
        return{
            lyricshow:false
        }
    },
    props:['music','play','isbtnShow','addduration'],
    methods:{
        backhome(){
            this.lyricshow = false
            this.updateDetailShow()
        },
        qiehuan(num){
            let index = this.playListIndex+num
            if (index < 0) {
                index = this.playList,length-1
            }else if (index == this.playList.length) {
                index = 0
            }
            this.updatePlayListIndex(index)
        },
    ...mapMutations(['updateDetailShow','updatePlayListIndex','updatePlayList'])
   },
  mounted(){
    this.addduration()
  },
   computed:{
    ...mapState(['lyriclist','currentTime','playListIndex','playList','duration']),
    lyric(){
        let arr;
        if (this.lyriclist.lyric) {
            arr = this.lyriclist.lyric.split(/[(\r\n)\r\n]+/).map((item,i)=>{
                let min = item.slice(1,3);
                let sec = item.slice(4,6);
                let mill = item.slice(7,10);
                let lrc = item.slice(11,item.length)
                let time = parseInt( min*60*1000 )+parseInt(sec)*1000+parseInt(mill);
                if (isNaN(Number(mill))) {
                    mill = item.slice(7,9)
                    lrc = item.slice(10,item.length)
                    time = parseInt( min )*60*1000+parseInt(sec)*1000+parseInt(mill);
                }
                return{min,sec,mill,lrc,time}
            })
            arr.forEach((item,i) => {
                if (i === arr.length-1 || isNaN(arr[ i + 1 ].time)) {
                    item.pre = 100000
                }else{
                    item.pre = arr[i + 1].time
                }
            });
        }
        // console.log(arr);
        return arr
    }
   },
   watch:{
    currentTime(newvalue){
        let p = document.querySelector('p.active')
        if (p) {
            if (p.offsetTop > 300) {
            this.$refs.musiclyric.scrollTop = p.offsetTop-300
        }
        }
        if (newvalue === this.duration) {
            if (this.playListIndex === this.playList.length-1) {
                this.updatePlayListIndex(0)
                this.play()
            }else{
                this.updatePlayListIndex(this.playListIndex+1);
            }
        }
    }
   }
}
</script>

<style lang="less" scoped>
.bgimg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(70px);
}
.datailTop{
    width: 100%;
    height: 50px;
    display: flex;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    fill: #fff;
    .detailTopleft{
        display: flex;
        align-items: center;
        span{
            color: #999;
        }
        .leftMarquee{
            width: 150px;
            height: 40px;
            margin-left: 20px;      
        }
    }
}
.detailContent{
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .imgzhizhen{
        width: 100px;
        height: 150px;
        position: absolute;
        left: 46%;
        transform-origin: 0 0;
        transform: rotate(-13deg);
        transition: all 2s;
    }
    .imgzhizhen_active {
        width: 100px;
        height: 150px;
        position: absolute;
        left: 46%;
        transform-origin: 0 0;
        transform: rotate(0deg);
        transition: all 2s;
    }

    .imgyuanpan{
        width: 250px;
        height: 250px;
        position: absolute;
        bottom: 115px;
        z-index: -1;
    }
    .imgal{
        width: 160px;
        height: 160px;
        border-radius: 50%;
        position: absolute;
        bottom: 157px;
        animation: rotate_ar 10s linear infinite;
    }
    .imgal_add_active{
        animation-play-state: running;
    }
    .imgal_add_pauesd{
        animation-play-state: paused;
    }
    @keyframes rotate_ar {
        0%{
            transform: rotateZ(0deg);
        }
        100%{
            transform: rotateZ(360deg);
        }
    }
}
.datailFooter{
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .footerTop{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img{
            width: 18px;
            height: 18px;
            fill: rgb(245, 234, 234);
        }
        img{
            width: 30px;
            height: 30px;
        }
    }
    .range{
        width: 100%;
        height: 3px;
    }
    .footer{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        img{
            width: 18px;
            height: 18px;
            fill: rgb(245, 234, 234);
        }
        img{
            width: 30px;
            height: 30px;
        }
        .imgbofang{
            width: 50px;
            height: 50px;
        }
        
    }
}
.musiclyric{
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    overflow: scroll;//溢出滚动
    p{
        color: rgb(191, 189, 189);
        margin-bottom: 20px;
    }
    .active{
        color: #fff;
        font-size: 22px;
    }
}
</style>