import {LISTS} from '@/common/local-storage-namespace';
import {read, write} from '@/utils/local-storage';
import {List} from '@/domain/entities';
const state = () => ({
  // 所有的列表
  all: read(LISTS) || []
})

// getters
const getters = {
  // 获取当前所在列表的titile
  getSelectedTitle: (state) => (id) => {
    const list = state.all.find(list => list._id === id);
    return list ? list.title : '';
  }
}

// actions
const actions = {
  insert({commit}, title) {
    commit('insert', new List(title));
  }
}

// mutations
const mutations = {
  // 插入数据
  insert(state, list) {
    state.all.push(list);
    write(LISTS, state.all);
  },
  // 删除一条数据
  destory(state, id) {
    // 找到该条数据的索引
    const index = state.all.findIndex((list) => list._id == id);
    // 根据索引在数组中删除
    state.all.splice(index, 1);
    // 将数组持久化
    write(LISTS, state.all);
  },
  // 更新列表的标题
  updateTitle(state, {id, title}) {
    // 找到该条数据的索引
    const index = state.all.findIndex((list) => list._id == id);
    // 更改
    state.all[index].title =  title;
    // 将数组持久化
    write(LISTS, state.all);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
