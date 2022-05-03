import { createStore } from 'vuex'

export default createStore({
  state: {
    username: '',
    passwordVerify: '',
    userExist: false,
    auth: false,
    users: [
      { username: 'gary', password: 'yakys'},
      { username: 'admin', password: '123'},
    ]
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
