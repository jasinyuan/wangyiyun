<template>
    <div class="iconList">
        <div class="iconItem">
            <img src="../../assets/tuijian.png"/>
            <span>每日推荐</span>
        </div>
        <div class="iconItem">
            <img src="../../assets/zhibo.png"/>
            <span>私人FM</span>
        </div>
        <div class="iconItem">
            <img src="../../assets/gedan.png"/>
            <span>歌单</span>
        </div>
        <div class="iconItem">
            <img src="../../assets/paihangbang.png"/>
            <span>排行榜</span>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .iconList{
        width: 100%;
        height: 100px;
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .iconItem{
            width: 25%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

            img{
                width: 50px;
                height: 50px;
            }
        }
    }
</style>