/*
 * @Author: zoey
 * @Date: 2023-11-10 14:17:02
 * @LastEditors: zoey
 * @LastEditTime: 2023-11-11 15:33:07
 * @Description: 请填写简介
 */
import { request } from "./request";
export function userLogin(data) {
  return request({
    method: 'post',
    url: '/login',
    data
  })
}
export function verifyAuth() {
  return request({
    method: 'get',
    url: '/test'
  })
}