import http from './http'

export default{
    querybanner(){
        return http({
            url:`/banner`,
            method:'GET',
        })
    },
    querymusic(){
        return http({
            url:`/personalized?limit=10`,
            method:'GET',
        })
    },
    querydetail(id){
        return http({
            url:`/playlist/detail/${id}`,
            method:'GET',
            params:{
                id
            }
        })
    },
    queryallmusic(id){
        return http({
            url:`/playlist/track/all/${id}`,
            method:'GET',
            params:{
                id
            }
        })
    },
    querysearch(keywords){
        return http({
            url:`/cloudsearch/${keywords}`,
            method:'GET',
            params:{
                keywords
            }
        })
    },
    querylogin(data){
        return http({
            url:`/login/cellphone?phone=${data.phone}&password=${data.password}`,
            method:'GET',
            params:{
                data
            }
        })
    },
    queryuserdetail(uid){
        return http({
            url:`/user/detail/${uid}`,
            method:'GET',
            params:{
                uid
            }
        })
    },
    querylyric(id){
        return http({
            url:`/lyric/${id}`,
            method:'GET',
            params:{
                id
            }
        })
    }
}
