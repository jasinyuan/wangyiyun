<template>
  <div class="login">
    <div class="loginTop">登录</div>
    <div class="loginContent">
        <input type="text" name="phone" class="phone" placeholder="请输入手机号码" v-model="phone"/>
        <input type="text" name="password" class="password" placeholder="请输入密码" v-model="password"/>
        <van-button  type="primary" class="btn" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import api from '../api/index.js'
export default {
    data(){
        return{
            phone:'',
            password:''
        }
    },
    methods:{
        async login(){
            let res = await this.$store.dispatch('getLogin',{phone:this.phone,password:this.password})
            console.log(res);
            if (res.data.code === 200) {
                this.$store.commit('updateIsLogin',true);
                this.$store.commit('updateToken',res.data.token);
                let result = await api.queryuserdetail(res.data.account.id);
                console.log(result);
                this.$store.commit('updateUser',result.data.profile)
                debugger
                this.$router.push('/mine');
            }else{
                alert('手机号码或者密码错误')
                this.password = '';
            }
        }
    }
}
</script>

<style lang="less" scoped>
.login{
    width: 100%;
    height: 667px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(248, 97, 97);

    .loginTop{
        margin-top: 50px;
        font-size: 50px;
        color: #fff;
    }
    .loginContent{
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-top: 100px;

        .phone{
            width: 250px;
            height: 1rem;
            border: 1px solid#999;
        }
        .password{
            width: 250px;
            height: 1rem;
            border: 1px solid#999;
        }
        .btn{
            width: 100px;
            height: 30px;
        }
    }
}
</style>