<template>
  <div class="left-control" :class="{'collapse': isCollapse}">
      <div class="header-wrapper">
          <img src="../assets/imgs/default-avatar.png" alt="">
          <span class="username-text" v-if="!isCollapse">{{username}}</span>
          <div class="header-btn" v-if="!isCollapse">
              <i class="el-icon-setting" @click="toSettings"></i>
          </div>
      </div>
      <div class="list-wrapper">
          <el-menu :default-active="selectedIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @select="select">
                <el-menu-item index="1">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">今天</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-date"></i>
                    <span slot="title">待办清单</span>
                </el-menu-item>
                <template v-for="item in all">
                    <el-menu-item :index="item._id" :key="item._id">
                      <i class="el-icon-s-order"></i>
                      <span slot="title">{{item.title}}</span>
                    </el-menu-item>
                </template>
           </el-menu>
           <div class="add-list-btn-wrapper">
                    <template v-if="isCollapse">
                            <el-button icon='el-icon-plus'></el-button>
                    </template>
                    <template v-else>
                            <el-button icon='el-icon-plus' @click="newListDialogVisible = true">新列表</el-button>
                    </template>
           </div>
      </div>
      <div class="sider-trigger" :style="siderTriggerStyle" @click="toggle">
          <i :class="isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left'"></i>
      </div>
      <el-dialog title="添加新列表" :visible.sync="newListDialogVisible" width="30%" :modal-append-to-body='false'>
        <el-input placeholder="列表名称" v-model="newListTitle"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="newListDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="insert" :disabled="newListTitle == ''">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import {Logger} from '@/common/logger'
import { mapState } from 'vuex'

const logger = new Logger('appLeftControl');

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
          },
          newListDialogVisible: false,
          newListTitle: '',
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
      username: function() {
          console.log('值变了');
      }
  },
  methods: {
      created() {
          logger.debug('created');
      },
      toggle() {
          this.$emit('change', !this.isCollapse);
      },
      handleOpen() {

      },
      handleClose() {

      },
      toSettings() {
          this.$router.push({name: 'Settings'});
      },
      insert() {
          this.$store.dispatch('lists/insert', this.newListTitle);
          this.newListTitle = ''
          this.newListDialogVisible = false;
      },
      select(index) {
        this.$store.dispatch('app/setSelectedIndex', index);
      }
  },
  computed: {
      ...mapState('app', ['username', 'selectedIndex']),
      ...mapState('lists', ['all'])
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
.left-control .header-wrapper img {
    width: 40px;
    height: 40px;
}
.left-control .header-wrapper .username-text {
    margin-left: 8px;
    flex: 1;
    line-height: 40px;
    font-size: 14px;
}
.left-control .header-wrapper .header-btn {
    padding: 12px;
    cursor: pointer;
    transition: all .2s linear;
    font-size: 20px;
}
.left-control .header-wrapper .header-btn:hover {
    transform: translate3d(0,-2px,0);
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
    font-size: 20px;
}
</style>
