<!--
 * @Author: zoey
 * @Date: 2023-12-22 14:52:36
 * @LastEditors: zoey
 * @LastEditTime: 2023-12-22 20:20:59
 * @Description: 请填写简介
-->
<template>
  <div>
    <SideLogo />
    <SideNavBar />
  </div>
</template>
<script>
  import SideLogo from './Logo/index.vue'
  import SideNavBar from "./SideNavBar/index.vue";
  export default {
    name: "LayoutSide",
    components: {
      SideNavBar,
      SideLogo
    },
  };
</script>
<style lang="less" scoped>
</style>