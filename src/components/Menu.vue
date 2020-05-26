<template>
  <div :class="menuClass">
    <div class="menu__bg"></div>
    <ul class="menu__list">
      <li class="menu__item" @click="goToHome">home</li>
      <li class="menu__item" @click="goToEdit">edit</li>
      <li class="menu__item" @click="goToReset">reset</li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    opened: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  methods: {
    ...mapMutations(['switchMenu']),
    goTo(routeName) {
      this.switchMenu()
      this.$router.push({ name: routeName })
    },
    goToHome() {
      this.goTo('workout')
    },
    goToEdit() {
      this.goTo('edit')
    },
    goToReset() {
      this.goTo('reset')
    }
  },
  computed: {
    ...mapState(['menuOpened']),
    menuClass() {
      return {
        menu: true,
        'menu--opened': this.menuOpened
      }
    }
  }
}
</script>
<style lang="stylus">
animation-bg = ease 250ms
animation-txt = ease 350ms

.menu
  z-index -1
  display: flex
  justify-content: center
  align-items: center
  overflow hidden
  &__bg
    position absolute
    top 0
    right 0
    height 10rem
    width 10rem
    border-radius: 50%
    padding: 1rem
    background-color color-bg-primary
    transform: translate(4rem, -18rem)
    transition all animation-bg
  &__list
    padding: 0
    color transparent
    text-transform: capitalize
    font-size: 7rem
    font-weight: 600
    text-align: center
    list-style none
  &__item
    margin-bottom 4rem
    > a
      color color-txt-primary
      text-decoration none
.menu--opened
  z-index 1
  .menu__bg
    transform: translate(6rem, -5rem) scale(20)
    transition all animation-bg
  .menu__list
    z-index 1
    color color-txt-primary
    transition color animation-txt
</style>
