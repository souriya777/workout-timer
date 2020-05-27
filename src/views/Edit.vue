<template>
  <div class="edit">
    <form @submit.prevent="save" class="edit__form">
      <div class="edit__group">
        <label for="" class="edit__label">Nb of series :</label>
        <input
          class="edit__input"
          type="number"
          min="1"
          max="100"
          value="5"
          autofocus
          required
        />
      </div>
      <div class="edit__group">
        <label for="" class="edit__label">Time :</label>
        <div class="edit__time">
          <input type="number" min="0" max="59" value="1" required />
          /
          <input type="number" min="0" max="59" value="0" required />
        </div>
      </div>
      <div class="edit__group">
        <label for="" class="edit__label">Autoplay :</label>
        <div class="edit__input">
          <toggle-switch />
        </div>
      </div>
      <input type="submit" />
    </form>
  </div>
</template>
<script>
import ToggleSwitch from '@/components/ToggleSwitch'

export default {
  components: { ToggleSwitch },
  methods: {
    save() {
      console.log('save')
    }
  }
}
</script>
<style lang="stylus">
.edit
  display flex
  flex-direction column
  justify-content center
  padding 3rem
  font-size 4rem
  font-weight 600

  &__form
    height 100%

    > input[type=submit]
      display block
      margin 7rem auto 0
      border .1rem solid
      border-radius .5rem
      border-color inherit
      padding .6rem 7rem
      background-color color-bg-secondary
      color color-txt-secondary

  &__group
    margin-bottom 3rem

  &__label
    display inline-block
    width 100%
    margin-bottom 2rem

  &__input
    display block
    margin 0 auto
    text-align: center

  &__time
    max-width 17rem
    margin 0 auto
    & > input
      display inline
      text-align center
</style>
