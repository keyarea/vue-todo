<template>
  <div class="todo">
      <el-table :data="todoList" stripe>
        <el-table-column
            prop="title"
            label="标题"
            >
        </el-table-column>
        <el-table-column
            prop="startTime"
            label="开始时间"
            >
        </el-table-column>
        <el-table-column
            prop="endTime"
            label="截至时间"
            >
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
