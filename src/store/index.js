import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serie: [1, 5],
    time: [1, 0],
    playing: false
  },
  mutations: {
    playOrPause(state) {
      state.playing = !state.playing
    },
    next({ serie }) {
      const [current, total] = serie
      const newSerie = current + 1
      if (newSerie <= total) {
        Vue.set(serie, 0, newSerie)
      }
    },
    previous({ serie }) {
      const newSerie = serie[0] - 1
      if (newSerie >= 0) {
        Vue.set(serie, 0, newSerie)
      }
    },
    decrement({ time: [minutes, seconds] }) {
      console.log(minutes, seconds)
    }
  }
})
