<template>
  <nav class="nav">
    <div :class="navButtonClass" @click="switchMenu">
      <div class="nav__button-line"></div>
      <div class="nav__button-line"></div>
      <div class="nav__button-line"></div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      opened: false
    }
  },
  methods: {
    switchMenu() {
      this.opened = !this.opened
    }
  },
  computed: {
    navButtonClass() {
      return {
        nav__button: true,
        'nav__button--opened': this.opened
      }
    }
  }
}
</script>
<style lang="stylus">
animation = ease 250ms
rot = 45deg
x = .6rem
y = .6rem

.nav
  display flex
  justify-content flex-end
  align-items center
  background-color #bbb
  &__button
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 1.9rem;
    width: 2.8rem;
    margin: 2rem;
    &-line
      height: .3rem;
      background-color color-text-primary
      transition all animation
    &--opened &-line:nth-child(1)
      transform rotate(rot) translate(x, y)
      transition transform animation
    &--opened &-line:nth-child(3)
      transform rotate(-(rot)) translate(x, -(y))
      transition transform animation
    &--opened &-line:nth-child(2)
      background-color transparent
      transition background-color animation
</style>
