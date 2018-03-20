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
  },
  actions: {
    getBookTag () {
      axios.get('./api/book/:id').then(function(res){
        console.log("11")
      }).catch(function(error){
        console.log("22")
      })
    }
  }
})

export default store