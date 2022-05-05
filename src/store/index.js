import { createStore } from 'vuex'
import usersJSON from './users.json'

export default createStore({
  state: {
    username: '',
    passwordVerify: '',
    userExist: false,
    auth: false,
    users: usersJSON
  },
  getters: {
  },
  mutations: {
    iniciarSesion() {
      localStorage.setItem('auth', true)
      location.reload()
    },
    cerrarSesion() {
      localStorage.setItem('auth', false)
      location.reload()
    },
    buscarUsuario(state) {
      state.users.forEach(user => {
        if (user.username == state.username) {
          state.userExist = true
          state.passwordVerify = user.password
        }
      });
    },
    resetUsername(state) { state.username = '' },
  },
  actions: {
  },
  modules: {
  }
})
