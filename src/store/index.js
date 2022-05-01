import { createStore } from 'vuex'

export default createStore({
  state: {
    username: '',
    password: '',
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
    }
  },
  actions: {
  },
  modules: {
  }
})
