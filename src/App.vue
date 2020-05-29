<template>
  <div class="app">
    <Nav />
    <Menu />
    <div class="timer">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Nav from '@/components/Nav'
import Menu from '@/components/Menu'
import { NOSLEEP_INSTANCE } from './utils/TimerUtils'

export default {
  components: { Nav, Menu },
  // created() {
  //   document.addEventListener(
  //     'click',
  //     function enableNoSleep() {
  //       document.removeEventListener('click', enableNoSleep, false)
  //       NOSLEEP_INSTANCE.enable()
  //       console.log('nosleep enable 🚀')
  //     },
  //     false
  //   )
  // },
  computed: {
    ...mapState(['playing']),
    ...mapGetters(['canDisableNosleep'])
  },
  watch: {
    playing(newValue) {
      if (newValue) {
        NOSLEEP_INSTANCE.enable()
        console.log('nosleep enable 🚀')
      }
    },
    canDisableNosleep() {
      NOSLEEP_INSTANCE.disable()
      console.log('nosleep disable 😴')
    }
  }
}
</script>
<style lang="stylus">
html
  font-family Avenir, Helvetica, Arial, sans-serif
  font-size 62.5%
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box

*, *:before, *:after
  box-sizing border-box
  margin 0

body
  font-size font-size

h1
  font-size 2rem !important
  margin 0 !important

.app
  display flex
  flex-direction column
  color color-txt-primary

  .nav
    z-index 1
    height height-nav
    @media screen and (orientation:landscape)
      height landscape-height-nav

  .menu
    position absolute
    top height-nav
    right 0
    height height-content
    width 100%
    @media screen and (orientation:landscape)
      top landscape-height-nav
      height landscape-height-content

  .timer
    height height-content
    @media screen and (orientation:landscape)
        height landscape-height-content

    > div
      height 100%
      background-color color-bg-secondary
      color color-txt-secondary

// transition effects
.fade-enter-active, .fade-leave-active
  transition: opacity 100ms ease
.fade-enter, .fade-leave-to
  opacity: 0;
</style>
