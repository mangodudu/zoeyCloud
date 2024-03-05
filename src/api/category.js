import { request } from "./request";
export function getDirlist(path) {
  return request({
    method: 'get',
    url: '/category',
    path
  })
}