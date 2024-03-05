<!--
 * @Author: zoey
 * @Date: 2023-12-21 17:29:27
 * @LastEditors: zoey
 * @LastEditTime: 2024-01-10 16:25:17
 * @Description: 请填写简介
-->
<template>
  <div class="layout-admin-wrapper">
    <div class="layout-sider">
      <LayoutSide />
    </div>
    <div class="layout-contianer">
      <div class="layout-header">
        <LayoutTabsBar />
      </div>
      <div class="layou-content">
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  import LayoutSide from './Side/index.vue'
  import LayoutTabsBar from './TabsBar/index.vue'
  export default {
    name: 'Layout',
    components: {
      LayoutSide,
      LayoutTabsBar
    }
  }
</script>
<style lang="scss" scoped>
  @mixin fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: $base-z-index;
    width: calc(100% - $base-left-menu-width);
  }

  .layout-admin-wrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-start;

    .layout-sider {
      height: 100%;
      width: $base-left-menu-width;
      background-color: #999;
    }

    .layout-contianer {
      flex: 1;
      height: 100%;

      .layout-header {
        height: $base-header-height ;
        background-color: #fff;

        &fixed-header {
          @include fixed-header;
        }
      }

      .layou-content {
        height: calc(100% - $base-header-height);
        width: 100%;
        background-color: pink;

      }

    }
  }
</style>