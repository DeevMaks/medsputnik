import Vue from 'vue'
import Vuex from 'vuex'
import nav from './navigation/_nav';
Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  role: 'patient'
}

const getters = {
  navigation(state) {
    return [
      {
        _name: 'CSidebarNav',
        _children: nav.filter(element => element.roles.includes(state.role))
      }
    ]
  }
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
