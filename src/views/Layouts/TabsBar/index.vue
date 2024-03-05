<!--
 * @Author: zoey
 * @Date: 2023-12-28 10:12:36
 * @LastEditors: zoey
 * @LastEditTime: 2023-12-28 10:19:55
 * @Description: 请填写简介
-->
<template>
  <zoey-breadcrumb>
    <zoey-breadcrumb-item :to="{ path: '/home' }">首页</zoey-breadcrumb-item>
    <zoey-breadcrumb-item>活动管理</zoey-breadcrumb-item>
    <zoey-breadcrumb-item>活动列表</zoey-breadcrumb-item>
  </zoey-breadcrumb>
</template>
<script>
export default {
  name: "LayoutTabsBar",
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="less" scoped>
</style>
