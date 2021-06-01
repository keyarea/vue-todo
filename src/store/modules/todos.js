import {TODOS} from '@/common/local-storage-namespace';
import {read, write} from '@/utils/local-storage'
import {Todo} from '@/domain/entities';
const state = () => ({
  // 全部的待办事项
  all: read(TODOS) || []
})

// getters
const getters = {
}

// actions
const actions = {
  insert(arg, title) {
    console.log(arg);
    console.log(this);
    // 获取当前的listUUID
    const todo = new Todo({title});
    console.log(todo);
    // commit('insert', todo);
  }
}

// mutations
const mutations = {
  // 插入一个todo
  insert(state, todo) {
    state.all.unshift(todo);
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
