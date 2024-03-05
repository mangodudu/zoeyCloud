<!--
 * @Author: zoey
 * @Date: 2023-12-22 14:51:34
 * @LastEditors: zoey
 * @LastEditTime: 2023-12-28 10:07:00
 * @Description: 请填写简介
-->
<template>
  <div class="nav-menu">
    <zoey-menu :router="router" default-active="home">
      <zoey-submenu index="home">
        <template v-slot:title>
          <i class="zoey-icon-home"></i>
          <span>首页</span>
        </template>
        <zoey-menu-item index="category">
          <template v-slot:title>

            <span>我的文件</span>
          </template>
        </zoey-menu-item>
        <zoey-menu-item index="recyclebin">
          <template v-slot:title>
            <span>回收站</span>
          </template>
        </zoey-menu-item>
      </zoey-submenu>
      <zoey-menu-item index="meassage">
        <template v-slot:title>
          <i class="zoey-icon-comment"></i>
          <span>消息</span>
        </template>
      </zoey-menu-item>
      <zoey-menu-item index="setting">
        <template v-slot:title>
          <i class="zoey-icon-user-filling"></i>
          <span>个人中心</span>
        </template>
      </zoey-menu-item>
    </zoey-menu>
  </div>
</template>
<script>
  export default {
    name: "SideNavBar",
    data() {
      return {
        router: true
      };
    },
  };
</script>
<style lang="scss" scoped>
  .nav-menu {
    width: 100%;
    height: 100%;
  }
</style>