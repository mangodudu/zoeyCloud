<!--
 * @Author: zoey
 * @Date: 2023-11-09 20:02:30
 * @LastEditors: zoey
 * @LastEditTime: 2023-11-11 19:26:10
 * @Description: 请填写简介
-->
<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-pic">
          <img src="@/assets/images/img-01.png" alt="IMG">
        </div>

        <form class="login100-form" onsubmit="return false">
          <span class="login100-form-title">
            Member Login
          </span>

          <div class="wrap-input100">
            <input class="input100" type="text" name="username" placeholder="Username" v-model.lazy="user.name">
            <span class="focus-input100"></span>
            <span class="symbol-input100">
            </span>
          </div>

          <div class="wrap-input100">
            <input class="input100" type="password" name="pass" placeholder="Password" v-model.lazy="user.password">
            <span class="focus-input100"></span>
            <span class="symbol-input100">
            </span>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn" @click="Login">
              Login
            </button>
          </div>

          <div class="text-center p-t-12">
            <span class="txt1">
              Forgot
            </span>
            <a class="txt2" href="#">
              Username / Password?
            </a>
          </div>

          <div class="text-center p-t-136">
            <a class="txt2" href="#">
              Create your Account
            </a>
          </div>
        </form>
      </div>
    </div>
    <div>
      <button @click="login">
        点击
      </button>
    </div>
  </div>
</template>
<script>
  import { userLogin } from '@/api/auth.js'
  import { useAuthStore } from '@/store/auth.js'
  const store = useAuthStore()
  export default {
    name: 'Login',
    data() {
      return {
        user: {
          name: '',
          id: 1,
          password: ''
        },
      }
    },
    created() {
    },
    computed: {
    },
    methods: {
      async Login() {
        console.log(this.user)
        await userLogin(this.user).then(res => {
          console.log(res)
          let { token } = res
          console.log(token)
          if (token) {
            localStorage.setItem('Authorization', token)
            store.setAuth(true)
            store.setUser({
              name: this.user.name,
              id: this.user.id,
              token: this.user.token
            })
            this.$router.push('/')
          }
        })
      }
    },
  }
</script>
<style scoped>
  @import url('./css/main.css');
  @import url('./css/util.css');
</style>