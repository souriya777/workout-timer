<template>
  <label class="toggle-switch">
    <input
      :id="id"
      class="toggle-switch__input"
      type="checkbox"
      :checked="checked"
      @change="$emit('toggle')"
    />
    <span class="toggle-switch__slider" />
  </label>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>
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
    background-color color-bg-input-inactive
    cursor pointer

    &:before
      position absolute
      left: .4rem
      bottom: .3rem
      height 2rem
      width 2rem
      border-radius 50%
      content ""
      background-color color-txt-primary
      transition all .4s

  // slider effect
  &__input:checked + &__slider
    background-color color-action

  &__input:focus + &__slider
    box-shadow 0 0 4px color-action

  &__input:checked + &__slider:before
    transform: translateX(2.1rem)
</style>
