import axios from 'axios'

import { Notify } from 'vant'

const request = axios.create({
    baseURL: 'https://netease-cloud-music-api-ten-ebon.vercel.app/',
    timeout: 5000,
  });

request.interceptors.request.use((condig)=>{
    return condig;
},(error)=>{
    return Promise.reject(error);
});
request.interceptors.response.use((res)=>{
    if (res.code ==0 || res.code == 200) {
        return Promise.resolve(res)
     }
    return res;
},(error)=>{
    Notify({
        type:'danger',
        message:'当前网络匆忙，请稍后再试'
    })
    return Promise.reject(error);
});
export default request
