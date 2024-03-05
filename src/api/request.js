/*
 * @Author: zoey
 * @Date: 2023-11-10 14:12:42
 * @LastEditors: zoey
 * @LastEditTime: 2023-11-11 19:54:18
 * @Description: 请填写简介
 */
import axios from 'axios'
import router from '../router';

export function request(config) {
  const instance = new axios.create({
    // baseURL: '/apis',
    baseURL: 'http://localhost:8002/api',
    timeout: 5000
  });
  instance.interceptors.request.use(config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization')
    }
    config.headers['Content-Type'] = 'application/json';
    config.data = JSON.stringify(config.data)
    return config
  }, err => {
    console.log(err)
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    switch (err.response.status) {
      case 401:
        localStorage.removeItem('Authorization');
        router.replace({
          path: '/login',
          query: { redirect: router.currentRoute.fullPath }
        })
    }
    console.log(err)
  })
  return instance(config)
}