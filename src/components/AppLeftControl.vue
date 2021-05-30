<template>
  <div class="left-control" :class="{'collapse': isCollapse}">
      <div class="header-wrapper"></div>
      <div class="list-wrapper">
          <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">今天</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">待办清单</span>
                </el-menu-item>
           </el-menu>
           <div class="add-list-btn-wrapper">
                    <template v-if="isCollapse">
                            <el-button icon='el-icon-plus'></el-button>
                    </template>
                    <template v-else>
                            <el-button icon='el-icon-plus'>新列表</el-button>
                    </template>
           </div>
      </div>
      <div class="sider-trigger" :style="siderTriggerStyle" @click="toggle">
          <i :class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AppLeftControl',
  model: {
      prop: 'isCollapse',
      event: 'change'
  },
  props: {
      isCollapse: Boolean
  },
  data() {
      return {
          siderTriggerStyle: {
              width: '300px'
          }
      }
  },
  watch: {
      isCollapse: function(newValue) {
          this.$emit('change', newValue);
          if (newValue) {
              this.siderTriggerStyle = {
                  width: '64px'
              }
          } else {
              this.siderTriggerStyle = {
                  width: '300px'
              }
          }
      },
  },
  methods: {
      toggle() {
          this.$emit('change', !this.isCollapse);
      },
      handleOpen() {

      },
      handleClose() {

      },
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
    background-color: #fff;
    transition: all .2s;
}
.left-control.collapse {
    flex: 0 0 64px;
    max-width: 64px;
    min-width: 64px;
    width: 64px;
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
.left-control .list-wrapper .add-list-btn-wrapper {
    margin-top: 8px;
    text-align: center;
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
    z-index: 1;
    transition: all .2s;
    background-color: #efefef;
}
</style>
