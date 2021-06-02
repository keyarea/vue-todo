<template>
  <div class="detail" @click="cancel()">
    <div class="container" @click.stop>
      <div class="align-right">
        <el-button type="success" icon="el-icon-check" circle @click="save"></el-button>
        <el-button type="danger" icon="el-icon-delete" circle @click="destory"></el-button>
      </div>
      <div class="align-left">
        <el-checkbox v-model="todo.completedFlag" @change="completedFlagChange">标记完成</el-checkbox>
      </div>
      <el-divider content-position="left">标题</el-divider>
      <el-input v-model="todo.title" :disabled="todo.completedFlag"></el-input>
      <el-divider content-position="left">日期与提醒</el-divider>
      <div class="align-left">
        <div>
          截止时间：
          <el-date-picker
            v-model="todo.dueAt"
            align="right"
            type="date"
            placeholder="选择日期"
            :disabled="todo.completedFlag"
            >
          </el-date-picker>
        </div>
        <div>
          计划时间：
          <el-date-picker
            class="margin-top-10"
            v-model="todo.planAt"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            :disabled="todo.completedFlag"
            >
          </el-date-picker>
        </div>
      </div>
      <div class="margin-top-20 align-left">
        计划提醒：
        <el-switch
          v-model="todo.notifyMe"
          active-color="#13ce66"
          inactive-color="#ff4949"
          :disabled="todo.completedFlag"
          >
        </el-switch>
      </div>
      <el-divider content-position="left">更多</el-divider>
      <div>
        <el-input
          type="textarea"
          :rows="2"
          placeholder="待办详情"
          v-model="todo.desc"
          :disabled="todo.completedFlag"
          >
        </el-input>
      </div>
    </div>
  </div>
</template>


<script>
import {Logger} from '@/common/logger'
import { mapGetters } from 'vuex';
// @ is an alias to /src

const logger = new Logger('Detail');

export default {
  name: 'Detail',
  components: {
  },
  created() {
    logger.debug('created');
    const params = this.$route.params;
    this._id = params.id;
    this.todo = this.getData(this._id);
  },
  data() {
    return {
      _id: '',
      todo: {
        _id: '',
        title: '',
        desc: '',
        dueAt: '',
        planAt: '',
        notifyMe: false,
        completedFlag: false,
      }
    }
  },
  methods: {
    cancel() {
      this.$router.push({name: 'Home'});
    },
    // 获取数据
    getData(id) {
      const todo = this.getTodo(id);
      return {
        _id: todo._id,
        title: todo.title,
        desc: todo.desc,
        dueAt: todo.dueAt,
        planAt: todo.planAt,
        notifyMe: todo.notifyMe,
        completedFlag: todo.completedFlag,
      }
    },
    // 保存
    save() {
      this.$store.commit('todos/update', this.todo);
      this.back();
    },
    // 删除该待办
    destory() {
      this.$store.commit('todos/destory', this._id);
      this.back();
    },
    // 返回
    back() {
      this.$router.go(-1);
    },
    completedFlagChange(value) {
      
    }
  },
  computed: {
    ...mapGetters('todos', ['getTodo'])
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