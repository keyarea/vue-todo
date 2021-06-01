<template>
  <el-container class="header">
      <img class="background-img" src="../assets/imgs/logo.svg" alt="">
      <div class="list-title-wrapper">{{listTitle}}</div>
      <div class="action-btn-wrapper">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            设置<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-if="isList" command='rename'>重命名</el-dropdown-item>
            <el-dropdown-item v-if="isList" command='destory'>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <el-dialog title="重命名" :visible.sync="renameDialogVisible" width="30%" :modal-append-to-body='false'>
        <el-input placeholder="列表名称" v-model="renameTitle"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="renameDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateListName" :disabled="renameTitle == ''">确 定</el-button>
        </span>
      </el-dialog>
  </el-container>
</template>

<script>
import {Logger} from '@/common/logger'
import { mapGetters, mapState } from 'vuex'

const logger = new Logger('header');
export default {
  name: 'AppHeader',
  created() {
    logger.debug('created');
    const title = this.getSelectedTitle(this.selectedIndex);
    this.listTitle = title;
    if (this.selectedIndex!='1' && this.selectedIndex!='2') {
      this.isList = true;
    } else {
      this.isList = false;
    }
  },
  data() {
    return {
      listTitle: '',
      isList: false,
      renameDialogVisible: false,
      renameTitle: '',
    }
  },
  methods: {
    handleCommand(command) {
      switch(command) {
        case 'rename':
          this.rename();
          break;
        case 'destory':
          this.destory();
          break;
        default:
          logger.debug('not match command');
      }
    },
    // 重命名
    rename() {
      logger.debug('rename');
      this.renameTitle = this.listTitle;
      this.renameDialogVisible = true;
    },
    // 删除该列表
    destory() {
      logger.debug('destory');
      this.$store.commit('lists/destory', this.selectedIndex);
      this.$store.commit('app/setSelectedIndex', '1');
    },
    // 更新列表的标题
    updateListName() {
      this.$store.commit('lists/updateTitle', {id: this.selectedIndex, title: this.renameTitle})
      this.listTitle = this.renameTitle;
      this.renameDialogVisible = false;
    }
  },
  watch: {
    'selectedIndex'(value){
      const title = this.getSelectedTitle(value);
      this.listTitle = title;
      if (value!='1' && value!='2') {
        this.isList = true;
      } else {
        this.isList = false;
      }
    },
  },
  computed: {
    ...mapState('app', ['selectedIndex']),
    ...mapGetters('lists', ['getSelectedTitle'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    position: relative;
    height: 100%;
    border-left: 1px solid #efefef;
}
.header .background-img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 120px;
  transform: translate3d(-50%,-50%,0);
}
.header .list-title-wrapper {
    position: absolute;
    left: 20px;
    bottom: 20px;
    font-size: 26px;
    line-height: 26px;
    font-weight: 500;
}
.header .action-btn-wrapper {
    position: absolute;
    bottom: 20px;
    right: 20px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
