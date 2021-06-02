<template>
  <div class="todo">
      <el-table ref="multipleTable" :data="list" stripe :show-header="false" current-row-key='_id' @select="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
                prop="title"
                label="标题"
                >
            </el-table-column>
            <el-table-column
                label="计划时间"
                >
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.planAt | dateFormat('YYYY年MM月DD日') }}</span>
                </template>
            </el-table-column>
            <el-table-column
                label="截至时间"
                >
                <template slot-scope="scope">
                  <i class="el-icon-date"></i>
                  <span style="margin-left: 10px">{{ scope.row.dueAt | dateFormat('YYYY年MM月DD日') }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.row)">查看</el-button>
              </template>
            </el-table-column>

          </el-table>

  </div>
</template>

<script>
import {Logger} from '@/common/logger'
import { mapGetters, mapState } from 'vuex'
import * as _ from 'lodash'

const logger = new Logger('todo');
export default {
  name: 'AppToDo',
  props: {
  },
  mounted() {
    this.list.forEach((todo, index) => {
      this.$refs.multipleTable.toggleRowSelection(todo, todo.completedFlag);
    })
  },
  data() {
      return {
          todoList: []
      }
  },
  watch: {
    'selectedIndex': (value) => {
      logger.debug(value);
    },
    'list': function(todos) {
      logger.debug('watch list: %o', todos)
      this.$nextTick(() => {
        this.list.forEach((todo, index) => {
          this.$refs.multipleTable.toggleRowSelection(todo, todo.completedFlag);
        })
      })
    }
  },
  methods: {
    handleEdit(row) {
      this.$router.push({path: `home/detail/${row._id}`})
    },
    handleSelectionChange(val) {
      // 全部选中的
      const list = this.list.filter(todo => todo.completedFlag);
      let different = [];
      let flag;
      // 长度比较
      if (val.length > list.length) {
        // 代表新选中了元素
        different  = _.difference(val, list);
        flag = true;
      } else {
        // 代表有元素被取消选择
        different  = _.difference(list, val);
        flag = false;
      }
      // logger.debug(different);
      // 找到差异
      const updatedTodo = different[0];
      this.$store.commit('todos/updateCompletedFlag', {id: updatedTodo._id, flag})
    }
  },
  computed: {
    ...mapState('app', ['selectedIndex']),
    ...mapGetters('todos', ['list'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo {
    flex: 1;
    padding: 10px;
}
</style>
