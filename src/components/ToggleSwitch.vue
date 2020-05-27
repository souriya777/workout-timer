<template>
  <label class="toggle-switch">
    <input class="toggle-switch__input" type="checkbox" checked />
    <span class="toggle-switch__slider" />
  </label>
</template>
<style lang="stylus">
.toggle-switch
  position relative
  display inline-block
  height 2.6rem
  width 5rem
  border-radius 1rem

  &__input
    opacity 0
    width 0
    height 0

  &__slider
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    border-radius 1rem
    background-color color-bg-primary
    cursor pointer

    &:before
      position absolute
      left: .4rem
      bottom: .3rem
      height 2rem
      width 2rem
      border-radius 50%
      content ""
      background-color color-txt-secondary
      transition all .4s

  // slider effect
  &__input:checked + &__slider
    background-color color-bg-secondary

  &__input:focus + &__slider
    box-shadow 0 0 1px color-bg-secondary

  &__input:checked + &__slider:before
    transform: translateX(2.1rem)
</style>
