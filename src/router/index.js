import { createRouter, createWebHashHistory } from "vue-router"
import store from "../store";
import routes from './routes'

const router = createRouter({
    history:createWebHashHistory(),
    routes
});
router.beforeEach((to,from)=>{
    if (to.path == '/login') {
        store.state.inFooterMusic = false
    }else{
        store.state.inFooterMusic = true
    }
});

export default router