import Vue from 'vue'
import Vuex from 'vuex'

import { DEFAULT_MIN, DEFAULT_SEC } from '@/utils/TimerUtils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serie: [1, 5],
    time: [DEFAULT_MIN, DEFAULT_SEC],
    playing: false,
    auto: false,
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
    switchAuto(state) {
      console.log('switchAuto', state.auto)
      state.auto = !state.auto
    },
    tick(state) {
      const { time, serie, auto, _intervalId } = state
      const [m, s] = time
      const [current, total] = serie
      let newMin = m
      let newSec = s

      // when time+serie finished, stop
      if (current === total && m === 0 && s === 1) {
        clearInterval(_intervalId)
        state.playing = false
        newSec = 0
      }
      // when time finished, next serie
      else if (m === 0 && s === 1) {
        state.serie = [current + 1, total]
        newMin = DEFAULT_MIN
        newSec = DEFAULT_SEC

        // if not autoplay, stop
        if (!auto) {
          clearInterval(_intervalId)
          state.playing = false
        }
      }
      // nominal case
      else {
        // next minute
        if (m > 0 && s === 0) {
          newMin--
          newSec = 59
        }
        // next second
        else {
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
