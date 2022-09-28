import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js';
import store from '../src/store/index.js'
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'


import Vant from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(Vant)
app.use(router)
app.use(store)
app.use(Vue3Marquee)


app.mount('#app')
