import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    isPaging: true,
    isLoading: true,
  },
  mutations: {
    startPaginate(state) {
      state.isPaging = true
    },
    finishPaginate(state) {
      state.isPaging = false
    }
  }
})