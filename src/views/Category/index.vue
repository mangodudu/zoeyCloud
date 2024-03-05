<!--
 * @Author: zoey
 * @Date: 2023-12-28 10:29:40
 * @LastEditors: zoey
 * @LastEditTime: 2024-01-10 21:37:50
 * @Description: 请填写简介
-->
<!--
 * @Author: zoey
 * @Date: 2023-12-28 10:29:40
 * @LastEditors: zoey
 * @LastEditTime: 2023-12-28 11:11:30
 * @Description: 请填写简介
-->
<template>
  <div class="category-contianer">
    <div class="category-header">
      <zoey-button type="primary" icon="zoey-icon-upload" size="small" round>上传</zoey-button>
      <zoey-button type="primary" plain size="small">新建文件夹</zoey-button>
      <zoey-button type="primary" plain size="small">新建在线文档</zoey-button>
      <zoey-button type="primary" plain size="small">离线下载</zoey-button>
    </div>
    <div class="category-body">
      <!--       <ul v-for=" (item, index) in currDirList">
        <li :key="index" class="dirRow">
          <span class="item-icon">
            <svg class="icon" aria-hidden="true">
              <use v-bind:xlink:href="iconName(item.mimeType)"></use>
            </svg>
          </span>
          <span>{{item.key}}</span>
        </li>
      </ul> -->
      <zoey-table :data="currDirList" style="width:100%;" @rowClick="tableRowClick">
        <zoey-table-column type="selection" width="55"></zoey-table-column>
        <zoey-table-column prop="name" label="文件名" width="180"></zoey-table-column>
        <zoey-table-column prop="date" label="修改时间" width="180"></zoey-table-column>
        <zoey-table-column prop="size" label="大小" width="180"></zoey-table-column>
      </zoey-table>
    </div>
  </div>
</template>
<script>
  import { getDirlist } from '@/api/category'
  import { onBeforeMount, ref } from 'vue'
  import { formatDate } from '@/utils/formattedDate.js'
  import { getFileSize } from '@/utils/fileSize.js'
  export default {

    name: "Category",
    data() {
      return {};
    },
    computed: {
      iconName() {
        return function (type) {
          let icon = ''
          switch (type) {
            case "image/jpeg":
              icon = "#zoey-icon-weizhi2"
              break;
            case "application/qiniu-object-manager":
              icon = "#zoey-icon-wenjianjia"
              break;
            default:
              icon = "#zoey-icon-weizhi2";
              break;
          }
          return icon
        }
      }
    },
    setup() {
      let currDirList = ref([])
      onBeforeMount(() => {
        getCurrDirList()
      });
      const getCurrDirList = () => {
        getDirlist().then(res => {
          if (res.status == 200) {
            res.data.items.forEach((item, index) => {
              console.log("item, index", item, index)
              currDirList.value[index] = {}
              currDirList.value[index].name = item.key;
              currDirList.value[index].date = formatDate(Math.ceil(item.putTime / 10000));
              currDirList.value[index].size = getFileSize(item.fsize);
              currDirList.value[index].mimeType = item.mimeType;
            })
          }
        }, err => {
          console.log("err:", err)
        })
      }
      console.log("currDirList:", currDirList)
      function tableRowClick(row, column, event) {
        console.log("row, column, event:", row, column, event)
      }
      return {
        currDirList,
        getCurrDirList,
        tableRowClick
      }
    }
  };
</script>
<style lang="scss" scoped>
  .category-header {
    background-color: palegoldenrod;
    width: 100%;
    height: $base-category-header-height ;
    display: block;
    overflow: hidden;
  }

  .category-body {
    background-color: #fff;
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .item-icon {
    width: 32px;
    height: 32px;
    display: inline-block;
    margin-right: 10px;

    .icon {
      width: 100%;
      height: 100%;
    }
  }
</style>