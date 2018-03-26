import Vue from 'Vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
    test: {
      name: 'biaoqian'
    }
  }
})

export default store