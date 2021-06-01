import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import lists from './modules/lists'
import todos from './modules/todos'
import { createLogger } from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    app,
    lists,
    todos,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
