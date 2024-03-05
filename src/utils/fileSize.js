/*
 * @Author: zoey
 * @Date: 2024-01-10 20:45:00
 * @LastEditors: zoey
 * @LastEditTime: 2024-01-10 20:51:03
 * @Description: 请填写简介
 */
const getFileSize = function (size) {
  if (!size) return "";
  //size = Number((size / 1024).toFixed(2))
  var num = 1024.00; //byte
  if (size < num)
    return size + "B";
  if (size < Math.pow(num, 2))
    return (size / num).toFixed(2) + "KB"; //kb
  if (size < Math.pow(num, 3))
    return (size / Math.pow(num, 2)).toFixed(2) + "MB"; //M
  if (size < Math.pow(num, 4))
    return (size / Math.pow(num, 3)).toFixed(2) + "G"; //G
  return (size / Math.pow(num, 4)).toFixed(2) + "T"; //T
}

export {
  getFileSize
}