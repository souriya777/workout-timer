import Vue from 'vue'
import Vuex from 'vuex'

import { DEFAULT_MIN, DEFAULT_SEC } from '@/utils/TimerUtils'
import { playCountdown, playNext } from '../utils/SoundUtils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    serie: [1, 5],
    time: [DEFAULT_MIN, DEFAULT_SEC],
    refTime: [DEFAULT_MIN, DEFAULT_SEC],
    playing: false,
    auto: false,
    menuOpened: false,
    _intervalId: null
  },
  getters: {
    canDisableNosleep({
      serie: [current, total],
      time: [m, s],
      refTime: [m2, s2],
      auto
    }) {
      return current === total || (current > 1 && m === m2 && s === s2 && !auto)
    }
  },
  mutations: {
    setCurrentSerie({ serie }, currentSerie) {
      Vue.set(serie, 0, currentSerie)
    },
    setTotalSerie({ serie }, nbSerie) {
      Vue.set(serie, 1, nbSerie)
    },
    setTime({ time }, [min, sec]) {
      Vue.set(time, 0, min)
      Vue.set(time, 1, sec)
    },
    setRefTime({ refTime }, [min, sec]) {
      Vue.set(refTime, 0, min)
      Vue.set(refTime, 1, sec)
    },
    setAuto(state, auto) {
      state.auto = auto
    },
    play(state) {
      state.playing = true
    },
    pause(state) {
      state.playing = false
      clearInterval(state._intervalId)
    },
    next(state) {
      const [current, total] = state.serie
      const newSerie = current + 1
      if (newSerie <= total) {
        Vue.set(state.serie, 0, newSerie)
        state.time = [DEFAULT_MIN, DEFAULT_SEC]

        // sound next
        playNext()
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

      // 3 second left
      if (m === 0 && s === 4) {
        playCountdown()
      }
    },
    setIntervalId(state, { intervalId }) {
      state._intervalId = intervalId
    },
    switchMenu(state, menuOpened) {
      state.menuOpened = menuOpened
    }
  },
  actions: {
    playOrPause({ commit, state }) {
      const { playing } = state

      if (playing) {
        commit('pause')
      } else {
        commit('play')
        const intervalId = setInterval(() => {
          commit('tick')
        }, 1000)
        commit('setIntervalId', { intervalId })
      }
    },
    saveSettings({ commit }, settings) {
      const { nbSerie, min, sec, auto } = settings
      commit('setTotalSerie', nbSerie)
      commit('setTime', [min, sec])
      commit('setRefTime', [min, sec])
      commit('setAuto', auto)
    },
    switchAuto({ commit, state }) {
      commit('setAuto', !state.auto)
    },
    switchMenu({ commit, state }) {
      commit('switchMenu', !state.menuOpened)
      commit('pause')
    },
    resetWorkout({ commit, state }) {
      const {
        refTime: [min, sec]
      } = state
      commit('pause')
      commit('setCurrentSerie', 1)
      commit('setTime', [min, sec])
    }
  }
})
