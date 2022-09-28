<template>
<div class="infousertop">
  <img :src="user.avatarUrl" alt="" class="profileimg"/>
  <div class="name">{{ user.nickname }}</div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState(['user'])
  }
}
</script>
<style lang="less" scoped>
.infousertop{
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .profileimg{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
  .name_{
    font-weight: 700;
    font-size: 20px;
  }
}
</style>