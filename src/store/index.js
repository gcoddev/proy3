import { createStore } from 'vuex'
// import usersJSON from './users.json'
// import axios from 'axios'

export default createStore({
  state: {
    userAuth: null,
    userAdminData: null
  },
  getters: {
  },
  mutations: {
    cerrarSesion() {
      localStorage.setItem('auth', false)
      localStorage.setItem('userAuth', null)
      localStorage.setItem('userAdminData', null)
      location.reload()
    },
  },
  actions: {
  },
  modules: {
  }
})
