import { createStore } from 'vuex'
import usersJSON from './users.json'
// import axios from 'axios'

export default createStore({
  state: {
    username: '',
    passwordVerify: '',
    userExist: false,
    auth: false,
    userAuth: [],
  },
  getters: {
  },
  mutations: {
    iniciarSesion(state) {
      localStorage.setItem('auth', true)
      localStorage.setItem('userAuth', JSON.stringify(state.userAuth))
      location.reload()
    },
    cerrarSesion() {
      localStorage.setItem('auth', false)
      localStorage.setItem('userAuth', null)
      location.reload()
    },
    buscarUsuario(state) {
      let users = usersJSON
      users.forEach(user => {
        if (user.username == state.username) {
          state.userExist = true
          state.passwordVerify = user.password
          state.userAuth = user
          // console.log(state.userAuth);
        }
      });
    },
    resetUsername(state) { state.username = '' }
  },
  actions: {
  },
  modules: {
  }
})
