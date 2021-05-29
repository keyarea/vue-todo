<template>
  <div class="left-control">
      <div class="header-wrapper"></div>
      <div class="list-wrapper">
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#001529" text-color="#fff">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">今天</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">待办清单</span>
                </el-menu-item>
           </el-menu>
      </div>
      <div class="sider-trigger">
          <i class="el-icon-arrow-left"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AppLeftControl',
  props: {
  },
  data() {
      return {
          isCollapse: false,
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left-control {
    height: 100%;
    flex: 0 0 300px;
    max-width: 300px;
    min-width: 300px;
    width: 300px;
    position: relative;
}
.left-control .header-wrapper {
    padding: 12px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    line-height: 0;
}
.left-control .list-wrapper {
    overflow-y: scroll;
    position: absolute;
    top: 60px;
    bottom: 48px;
    width: 100%;
    padding-bottom: 20px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 300px;
  }
.left-control .list-wrapper::-webkit-scrollbar { width: 0 !important }
.left-control .sider-trigger {
    position: fixed;
    text-align: center;
    bottom: 0;
    cursor: pointer;
    height: 48px;
    line-height: 48px;
    color: #fff;
    background: #002140;
    z-index: 1;
    transition: all .2s;
    width: 300px;
}
</style>
