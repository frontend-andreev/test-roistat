import Vue from 'vue'
import Vuex from 'vuex'
import Users from "./modules/users/"
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Users
  }
})
export default store;