<template>
  <div class="searchTop">
    <van-icon name="arrow-left" @click="$router.back()"/>
    <input type="text" placeholder="蔡徐坤" v-model="searchKey" @keydown.enter="enterkey"/>
  </div>
  <div class="searchHistory">
    <span class="searchSpan">历史</span>
    <span @click="search(item)"  v-for="item in keyWorldList" class="spankey">{{ item }}</span>
    <img src="../../assets/shanchu.png" alt="" @click="delite"/>
  </div>
  <div class="itemList">
    <div class="item" v-for="(item,i) in  musicsearch" :key="i">
      <div class="itemLeft" @click="updateIndex(item)">
        <span class="leftSpan">{{ i + 1 }}</span>
        <div>
          <p>{{ item.name }}</p>
          <span v-for="(item1,index) in item.ar" :key="index">{{ item1.name }}</span>
        </div>
      </div>
      <div class="itemRight">
        <div class="icon">
          <img src="../../assets/bofang.png" alt="" class="icon bofang" v-if="item.mv !=0"/>
          <img src="../../assets/liebiao.png" alt="" class="icon liebiao"/>
        </div>       
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../api/index.js'
export default {
  data(){
    return{
      keyWorldList:[],
      searchKey:'',
      musicsearch:[]
    }
  },
  mounted(){
    this.keyWorldList = JSON.parse(localStorage.getItem('keyWorldList')) || [];
  },
  methods:{
    async enterkey(){
      if (this.searchKey !='') {
        this.keyWorldList.unshift(this.searchKey)
      }
      this.keyWorldList = [...new Set(this.keyWorldList)]
      if (this.keyWorldList.length > 8) {
        this.keyWorldList.splice(this.keyWorldList.length-1,1)
      }
      localStorage.setItem('keyWorldList',JSON.stringify(this.keyWorldList))
      let res = await api.querysearch(this.searchKey)
      console.log(res);
      this.musicsearch = res.data.result.songs
      this.searchKey = '';
    },
    delite(){
      localStorage.removeItem('keyWorldList')
      this.keyWorldList=[]
    },
    async search(item){
      let res = await api.querysearch(item)
      console.log(res);
      this.musicsearch = res.data.result.songs
    },
    updateIndex(item){
      this.$store.commit('pushPlayList',item)
      this.$store.commit('updatePlayListIndex',this.$store.state.playList.length-1)
    }
  }
}
</script>

<style lang="less" scoped>
.searchTop{
  width: 100%;
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
   input{
    margin-left: 20px;
    border: none;
    border-bottom: 1px solid #999;
    width: 90%;
    padding: 5px;
   }
}
.searchHistory{
  width: 100%;
  padding: 10px;
  position: relative;
  .searchSpan{
    font-weight: 700;
  }
  .spankey{
    padding: 5px 10px;
    border-radius: 20px;
    background-color:rgb(185, 169, 169);
    margin: 5px 10px;
    display: inline-block;
  }
  img{
    width: 18px;
    height: 18px;
    position: absolute;
    right: 10px;
  }
}
.itemList{
  width: 100%;
  padding: 10px;
  .item{
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .itemLeft{
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      .leftSpan{
        display: inline-block;
        width: 0.2rem;
        text-align: center;
      }
      div{
        p {
          width: 227px;
          height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
        }
        span {
          font-weight: 400;
          font-size: 12px;
          color: #999;
        }
        margin-left: 0.3rem;
      }
    }
  }
  .item{
    .itemRight{
      width: 20%;
      height: 100%;
      display: flex;
      align-items: center;
      position: relative;

      .icon{
        fill: #999;
        .bofang{
          position: absolute;
          left: 0;
        }
        .liebiao{
          position: absolute;
          right: 0;
        }
      }
    }
  }
}
</style>