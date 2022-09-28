<template>
    <div class="itemMusicList">
        <div class="itemListTop">
            <div class="listLeft">
                <img src="../../../assets/bofang.png" alt="" class="icon"/>
                <span>播放全部<span>（共{{ allmusic.length }}首)</span></span>
            </div>
            <div class="listRight">
                <van-button icon="plus" type="primary" class="icon" color="red"></van-button>
                <span>收藏({{ subscribedCount }})</span>
            </div>
        </div>
        <div class="itemList">
            <div class="item" v-for="(item,i) in allmusic" :key="i">
                <div class="itemLeft" @click="playmusic(i)">
                    <span class="leftSpan">{{ i + 1 }}</span>
                    <div>
                        <p>{{ item.name }}</p>
                        <span v-for="(item1,index) in item.ar" :key="index">
                        {{ item1.name }}</span>
                    </div>
                </div>
                <div class="itemRight">
                    <div class="icon">
                        <img src="../../../assets/bofang.png" alt="" class="icon bofang" v-if="item.mv != 0"/>
                        <img src="../../../assets/liebiao.png" alt="" class="icon liebiao"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props:['allmusic','subscribedCount'],
    methods:{
        playmusic(i){
            this.updatePlayList(this.allmusic)
            this.updatePlayListIndex(i)
        },
        ...mapMutations(['updatePlayList','updatePlayListIndex'])
    }
}
</script>

<style lang="less" scoped>
.itemMusicList{
    width:100%;
    height:500px;
    background-color: #fff;
    padding: 0 10px;
    margin-top: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    .itemListTop{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
            .listLeft{
                width: 150px;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                img{
                    stroke: #333333;
                    stroke-width: 20;
                }
                span{
                    font-weight: 700;
                    span{
                        font-weight: 400;
                        font-size: 12px;
                        color: #999;
                    }
                }
            }
            .listRight{
                display: flex;
                align-items: center;
                background-color: red;
                padding: 10px;
                border-radius: 20px;
                color: #fff;
                .icon{
                    width: 15px;
                    height: 15px;
                    fill: #fff;
                    margin-right: 5px;
                    stroke: #fff;
                    stroke-width: 50;
                }
            }
        }
        .itemList{
            width: 100%;
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
                        width: 10px;
                        text-align: center;
                    }
                    div{
                        p{
                            width: 227px;
                            height: 20px;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            font-weight: 700;
                        }
                        span{
                            font-weight: 400;
                            font-size: 12px;
                            color: #999;
                        }
                        margin-left: 15px;
                    }
                }
                .itemRight{
                    width: 20%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    position: relative;
                    .icon{
                        fill: #999;
                    }
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