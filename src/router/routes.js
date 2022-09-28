import TheFound from '../pages/TheFound.vue'
import store from '../store/index.js'

const routes = [{
    path:'/',component:TheFound
},{
    //歌单详情
    path:'/Playlistdetails/:id',
    component:()=>import('../pages/TheDetails.vue')
},{
    //搜索页面跳转
    path:'/search',
    component:()=>import('../components/found/TheSearch.vue')
},{
    //登录
    path:'/login',
    component:()=>import('../pages/TheLogin.vue')
},{
   //个人中心
    path:'/mine',
    //路由守卫判断登录情况
    beforeEnter:(to, from, next)=>{
        if (store.state.isLogin || store.state.token || localStorage.getItem('token')) {
            next()
        }else
            next('/login')
    },
    component:()=>import('../pages/TheMine.vue') 
},{
    path:'/:pathMatch(.*)*',
    redirect:'/'
}
];
export default routes