import { createStore } from 'vuex'
import api from '../api/index.js'

const store = createStore({
    state:{
        playList:[{
            al:{
                id: 146408395,
                name: "反派角色",
                pic: 109951167543408350,
                picUrl:"https://p1.music.126.net/a-C8lJRnVNG8DUHaVa3cIQ==/109951167543408347.jpg",
                pic_str:"109951167543408347"
            },
            id: 1955424233,
            ar:[{
                name: '郭冠廷'
            }]
        }],
        playListIndex:0,//默认下标
        isbtnShow:true,//暂停和播放按钮的切换
        detailShow:false,//歌曲详情页显示
        lyriclist:{},//歌词的存储
        currentTime:0,//当前时间
        duration:0,//歌曲总时长
        isLogin:false,//登录状态的检测
        inFooterMusic:true,//底部播放组件的显示
        token:'',//存储传进来的TOKEN
        user:{}//存储个人消息
    },
    mutations:{
        updateIsbtnShow(state,value){
            state.isbtnShow = value
        },
        updatePlayList(state,value){
            state.playList = value
        },
        updatePlayListIndex(state,value){
            state.playListIndex = value
        },
        updateDetailShow(state,value){
            state.detailShow = !state.detailShow
        },
        updatelyric(state,value){
            state.lyriclist = value
        },
        updatecurrentTime(state,value){
            state.currentTime = value
        },
        upduration(state,value){
            state.duration = value
        },
        pushPlayList(state,value){
            console.log(state.playList);
            state.playList.push(value)
        },
        updateIsLogin(state,value){
            state.isLogin = true
        },
        updateToken(state,value){
            state.token=value
            localStorage.setItem('token',state.token)
        },
        updateUser(state,value){
            state.user = value
            localStorage.setItem('user',state.user)
        }
    },
    actions:{
        getLogin:async function (context,value){
            let res = await api.querylogin(value)
            return res
        },
        getlyric:async function (context,value) {
            let lyric = await api. querylyric(value)
            context.commit('updatelyric',lyric.data.lrc)
        }
    },
    modules:{

    }
});

export default store