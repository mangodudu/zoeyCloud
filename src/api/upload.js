/*
 * @Author: zoey
 * @Date: 2023-11-11 19:54:12
 * @LastEditors: zoey
 * @LastEditTime: 2024-02-29 16:42:11
 * @Description: 请填写简介
 */
import { request } from "./request";
export function uploadImage(file) {
  return request({
    method: 'post',
    url: '/image/upload',
    file
  })
}