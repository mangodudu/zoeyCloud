/*
 * @Author: zoey
 * @Date: 2023-11-11 15:53:57
 * @LastEditors: zoey
 * @LastEditTime: 2023-11-11 19:21:38
 * @Description: 请填写简介
 */
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isAuthenticated: false,
      user: {}
    }
  },
  getter: {
    getAuthenticated: (state) => state.isAuthenticated,
    getUser: (state) => state.user
  },
  actions: {
    setAuth(isAuth) {
      if (isAuth) {
        this.isAuthenticated = isAuth;
      } else {
        this.isAuthenticated = false
      }
    },
    setUser(user) {
      if (user) {
        this.user = user
      } else {
        this.user = {}
      }
    },
    removeToken() {
      this.user.token = ''
      this.isAuthenticated = false
    },
  }
})