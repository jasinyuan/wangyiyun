<template>
    <music-top :playlist="detalis"></music-top>
    <music-bot :allmusic="all" :subscribedCount="detalis.subscribedCount"></music-bot>
</template>

<script>
import { onMounted, reactive,toRefs } from 'vue'
import { useRoute } from 'vue-router'
import api from '../api/index.js'
import MusicTop from '../components/found/ItemMusic/MusicTop.vue'
import MusicBot from '../components/found/ItemMusic/MusicBot.vue'
export default {
  components:{
    MusicTop,
    MusicBot
  },
  setup(){
    const state = reactive({
      detalis:[],
      all:[]
    })
    const route = useRoute();
    onMounted(async()=>{
     let id = route.params.id;
     let {data} = await api.querydetail(id);
      state.detalis = data.playlist
     let cc = await api.queryallmusic(id);
      state.all = cc.data.songs  
      console.log(data.playlist);
      console.log(state.all);
    })
    return{
      ...toRefs(state)
    }
  }
}
</script>

<style>

</style>