<template>
  <el-container class="right-control ">
      <el-container class="header-wrapper">
        <app-header></app-header>
      </el-container>
      <el-container class="list-wrapper">
        <app-to-do></app-to-do>
      </el-container>
      <div class="quick-add-wrapper" :class="{'center': todos.length === 0}">
        <app-quick-add @add="add"></app-quick-add>
      </div>
  </el-container>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppQuickAdd from '@/components/AppQuickAdd.vue'
import AppToDo from '@/components/AppToDo.vue'
import {Logger} from '@/common/logger'
const logger = new Logger('rightControl');
export default {
  name: 'AppRightControl',
  data() {
    return {
      todos: []
    }
  },
  props: {
  },
  components: {
    AppHeader,
    AppQuickAdd,
    AppToDo,
  },
  methods: {
    // 添加一个待办事项
    add(value) {
      logger.debug(value);
      this.$store.dispatch('todos/insert', value);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right-control {
  position: relative;
  height: 100%;
  background-color: #f0f2f5;
  flex-direction: column;;
}
.header-wrapper {
    height: 180px;
    padding: 0;
    background-color: #fff;
    flex-basis: 180px;
    flex: none;
}
.right-control .quick-add-wrapper {
    position: absolute;
    left: 50%;
    bottom: 40px;
    width: 400px;
    -webkit-transform: translate3d(-50%,0,0);
    transform: translate3d(-50%,0,0);
    transition: .2s ease all;
}
.right-control .quick-add-wrapper.center {
  bottom: 50%;
}
</style>
