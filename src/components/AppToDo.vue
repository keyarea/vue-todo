<template>
  <div class="todo">
      <el-table :data="todoList" stripe :show-header="false">
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
            label="开始时间"
            >
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.startTime }}</span>
            </template>
        </el-table-column>
        <el-table-column
            label="截至时间"
            >
            <template slot-scope="scope">
              <i class="el-icon-date"></i>
              <span style="margin-left: 10px">{{ scope.row.endTime }}</span>
            </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>

      </el-table>
  </div>
</template>

<script>
export default {
  name: 'AppToDo',
  props: {
  },
  data() {
      return {
          todoList: [
              {
                  title: '这是个啥',
                  startTime: '2021-09-09',
                  endTime: '2021-09-09',
              }
          ]
      }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index);
      console.log(row);
      this.$router.push({path: 'home/detail/123'})
    }
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
