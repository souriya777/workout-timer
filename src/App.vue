<template>
  <div class="app">
    <Nav />
    <Menu />
    <div class="timer">
      <router-view />
    </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
import Menu from '@/components/Menu'

export default {
  components: { Nav, Menu }
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

.app
  display flex
  flex-direction column
  color color-txt-primary
  .nav
    z-index 1
    height height-nav
  .menu
    position absolute
    top height-nav
    right 0
    height height-content
    width 100%
  .timer
    height height-content
    > div
      height 100%
      background-color #ddd
</style>
