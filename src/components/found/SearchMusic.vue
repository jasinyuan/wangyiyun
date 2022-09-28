<template>
  <div class="itemList">
    <div class="item" v-for="(item,i) in  musicsearch" :key="i">
      <div class="itemLeft">
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

export default {
  props:['cc'],
  setup(props){
    console.log(props);
  }
}
</script>

<style lang="less" scoped>
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
      justify-content: space-between;
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