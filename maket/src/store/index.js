import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    productList: []
  },
  getters: {},
  mutations: {
    addCart(state, palyLoad) {
      // 判断购物车中是否有该商品
      let isHave = false
      state.productList.forEach(res => {
        if (palyLoad.id === res.id) {
          res.num++
          isHave = true
        }
      })
      // 没有则新增该商品
      if (!isHave) {
        palyLoad.num = 1
        state.productList.push(palyLoad)
      }
    }
  },
  actions: {},
  modules: {}
})
export default store
