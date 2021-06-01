import {TODOS} from '@/common/local-storage-namespace';
import {read, write} from '@/utils/local-storage'
import {Todo} from '@/domain/entities';
import * as _ from 'lodash';
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
        break;
      case '2':
        result = getters.listTodo;
        break;
      default:
        result = getters.listTodoByListUUID(listUUID);
    }
    return result;
  },
  // 根据listUUID获取待办事项
  listTodoByListUUID: (state) => (id) => {
    return state.all.filter(todo => todo.listUUID === id);
  },
  // 获取今天的待办事项
  listTodayTodo: (state) => {

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
    let listUUID = rootState.app.selectedIndex;
    if (listUUID == '1' || listUUID == '2') {
      listUUID = '';
    }
    // 获取当前的listUUID
    const todo = new Todo({title, listUUID});
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
    // 找到该条数据的索引
    const index = state.all.findIndex((todo) => todo._id == updated._id);
    // 更新
    state.all[index] = {...state.all[index], ...updated};
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
