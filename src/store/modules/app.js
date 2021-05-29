import {INIT_FLAG, USERNAME, START_USING_DATE} from '@/common/local-storage-namespace';
import {write, read} from '@/utils/local-storage';

const state = () => ({
    // 用户名
    username: '' || read(USERNAME),
    // 是否已经初始化
    initFlag: false || read(INIT_FLAG),
    // 初次使用时间
    startUsingDate: null || read(START_USING_DATE),
})

// getters
const getters = {
    getInitFlag: state => {
        return state.initFlag;
    }
}

// actions
const actions = {
    setUserName({commit}, nickname) {
        commit('setUserName', nickname);
    },
    setInitFlag({commit}, flag) {
        commit('setInitFlag', flag);
    },
    setStartUsingDate({commit}, date) {
        commit('setStartUsingDate', date);
    },
}

// mutations
const mutations = {
    setUserName(state, nickname) {
        state.nickname = nickname;
        write(USERNAME, nickname)
    },
    setInitFlag(state, flag) {
        state.initFlag = flag;
        write(INIT_FLAG, flag);
    },
    setStartUsingDate(state, date) {
        state.startUsingDate = date;
        write(START_USING_DATE, date);
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}