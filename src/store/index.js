import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const DEFAULT_MIN = 1
const DEFAULT_SEC = 0

export default new Vuex.Store({
  state: {
    serie: [1, 5],
    time: [DEFAULT_MIN, DEFAULT_SEC],
    playing: false,
    menuOpened: false,
    _intervalId: null
  },
  mutations: {
    play(state) {
      state.playing = true
    },
    pause(state) {
      state.playing = false
    },
    next(state) {
      const [current, total] = state.serie
      const newSerie = current + 1
      if (newSerie <= total) {
        Vue.set(state.serie, 0, newSerie)
        state.time = [DEFAULT_MIN, DEFAULT_SEC]
      }
    },
    previous(state) {
      const { serie } = state
      const newSerie = serie[0] - 1
      if (newSerie >= 0) {
        Vue.set(serie, 0, newSerie)
        state.time = [DEFAULT_MIN, DEFAULT_SEC]
      }
    },
    tick(state) {
      const { time, serie, _intervalId } = state
      const [m, s] = time
      const [current, total] = serie
      let newMin = m
      let newSec = s

      // when time+serie finished, stop
      if (current === total && m === 0 && s === 1) {
        clearInterval(_intervalId)
        newSec = 0
        state.playing = false
      }
      // when time finished, next serie
      else if (m === 0 && s === 1) {
        state.serie = [current + 1, total]
        newMin = DEFAULT_MIN
        newSec = DEFAULT_SEC
      } else {
        // nominal case
        if (m > 0 && s === 0) {
          newMin--
          newSec = 59
        } else {
          newSec--
        }
      }

      state.time = [newMin, newSec]
    },
    switchMenu(state) {
      state.menuOpened = !state.menuOpened
    },
    setIntervalId(state, { intervalId }) {
      state._intervalId = intervalId
    }
  },
  actions: {
    playOrPause({ commit, state }) {
      const { playing, _intervalId } = state

      if (playing) {
        commit('pause')
        clearInterval(_intervalId)
      } else {
        commit('play')
        const intervalId = setInterval(() => {
          commit('tick')
        }, 1000)
        commit('setIntervalId', { intervalId })
      }
    }
  }
})
