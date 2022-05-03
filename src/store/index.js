import { createStore } from 'vuex'

export default createStore({
  state: {
    username: '',
    passwordVerify: '',
    userExist: false,
    users: [
      { username: 'gcoddev', password: 'yakys'},
      { username: 'mojon', password: '123'},
    ]
  },
  getters: {
  },
  mutations: {
    iniciarSesion(state) {
      if (state.username === 'gcoddev') {
        if (state.password === 'yakys') {
          localStorage.setItem('logInOut', true)
          location.reload()
        }
      }
    },
    cerrarSesion(state) {
      console.log('cerrar sesion');
      state.password = ''
      localStorage.setItem('logInOut', false)
      location.reload()
    },
    buscarUsuario(state) {
      state.users.forEach(user => {
        if (user.username == state.username) {
          state.userExist = true
          state.passwordVerify = user.password
        }
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
