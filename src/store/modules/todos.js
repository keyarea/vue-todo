import {TODOS} from '@/common/local-storage-namespace';
import {read, write} from '@/utils/local-storage'
import {Todo} from '@/domain/entities';
import * as _ from 'lodash';
import moment from 'moment/moment'
const state = () => ({
  // 全部的待办事项
  all: read(TODOS) || []
})

// getters
const getters = {
  // 根据条件获取待办事项
  list(state, getters, rootState) {
    // 获取当前选择的列表id
    let listUUID = rootState.app.selectedIndex;
    let result = [];
    switch(listUUID) {
      case '1':
        result = getters.listTodayTodo;
        break;
      case '2':
        result = getters.listTodo;
        break;
      default:
        result = getters.listTodoByListUUID(listUUID);
    }
    return result.sort(todo => todo.completedFlag ? 1 : -1);
  },
  // 根据listUUID获取待办事项
  listTodoByListUUID: (state) => (id) => {
    return state.all.filter(todo => todo.listUUID === id);
  },
  // 获取今天的待办事项
  listTodayTodo: (state) => {
    return state.all.filter(todo => {
      // 有计划时间
      if (todo.planAt) {
        return moment().isSameOrBefore(todo.planAt, 'day');
      } else {
        return false;
      }
    });
  },
  // 获取listUUID为空待办事项
  listTodo:(state) => {
    return state.all.filter(todo => !todo.listUUID);
  },
  // 获取当前列表的数量是否为空
  isEmpty(state, getters) {
    const list = getters.list;
    return _.isEmpty(list);
  },
  // 根据id获取一个todo
  getTodo: (state) => (id) => {
    return state.all.find(todo => todo._id == id);
  }
}

// actions
const actions = {
  // 插入一个待办
  insert({commit, rootState}, title) {
    // 获取当前选择的列表 id
    let selectedIndex = rootState.app.selectedIndex;
    let listUUID = '';
    if (selectedIndex == '1' || selectedIndex == '2') {
      listUUID = '';
    }
    // 获取当前的listUUID
    const todo = new Todo({title, listUUID});
    if (selectedIndex == '1') {
      todo.planAt = new Date();
    }
    commit('insert', todo);
  }
}

// mutations
const mutations = {
  // 插入一个todo
  insert(state, todo) {
    state.all.unshift(todo);
    write(TODOS, state.all);
  },
  // 删除待办
  destory(state, id) {
    // 找到该条数据的索引
    const index = state.all.findIndex((todo) => todo._id == id);
    // 根据索引在数组中删除
    state.all.splice(index, 1);
    // 将数组持久化
    write(TODOS, state.all);
  },
  // 更新待办
  update(state, updated) {
    const todos = state.all;
    // 找到该条数据的索引
    const index = todos.findIndex((todo) => todo._id == updated._id);
    // 更新
    todos[index] = {...todos[index], ...updated};
    state.all = [...todos];
    // 将数组持久化
    write(TODOS, state.all);
  },
  // 更新待办的完成状态
  updateCompletedFlag(state, {id, flag}) {
    const todos = state.all;
    // 找到该条数据的索引
    const index = todos.findIndex((todo) => todo._id == id);
    // 更新
    todos[index] = {...todos[index], ...{completedFlag: flag}};
    state.all = [...todos];
    // 将数组持久化
    write(TODOS, state.all);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
