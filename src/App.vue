<template>
  <div class="app">
    <Nav />
    <div class="timer">
      <router-view />
    </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav'

export default {
  components: { Nav }
}
</script>
<style lang="stylus">
html
  font-family Avenir, Helvetica, Arial, sans-serif
  font-size: 62.5%
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*, *:before, *:after
  box-sizing: border-box
  margin: 0

body
  font-size: font-size

.app
  display flex
  flex-direction column
  color color-text-primary
  .nav
    height 9vh
  .timer
    height 91vh
</style>
