<template>
  <div class="detail" @click="cancel()">
    <div class="container" @click.stop>
      <div class="align-right">
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </div>
      <div class="align-left">
        <el-checkbox v-model="todo.done">标记完成</el-checkbox>
      </div>
      <el-divider content-position="left">标题</el-divider>
      <el-input></el-input>
      <el-divider content-position="left">日期与提醒</el-divider>
      <div class="align-left">
        <div>
          截止时间：
          <el-date-picker
            v-model="todo.startTime"
            align="right"
            type="date"
            placeholder="选择日期"
            >
          </el-date-picker>
        </div>
        <div>
          计划时间：
          <el-date-picker
            class="margin-top-10"
            v-model="todo.endTime"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            >
          </el-date-picker>
        </div>
      </div>
      <div class="margin-top-20 align-left">
        计划提醒：
        <el-switch
          v-model="todo.remind"
          active-color="#13ce66"
          inactive-color="#ff4949">
        </el-switch>
      </div>
      <el-divider content-position="left">更多</el-divider>
      <div>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="待办详情"
          v-model="todo.note">
        </el-input>
      </div>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: 'Detail',
  components: {
  },
  data() {
    return {
      todo: {
        done: false,
        endTime: '',
        startTime: '',
        remind: true,
        note: '',
      }
    }
  },
  methods: {
    cancel() {
      this.$router.push({name: 'Home'});
    }
  }
}
</script>

<style>
.detail {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: -450px;
  background-color: rgba(0,0,0,.65);
  z-index: 1000;
}
.detail .container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    box-sizing: border-box;
    width: 450px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 12px rgb(0 0 0 / 15%);
}
.align-right {
  text-align: right;
}
.align-left {
  text-align: left;
}
.margin-top-10 {
  margin-top: 10px;
}
.margin-top-20 {
  margin-top: 20px;
}
</style>