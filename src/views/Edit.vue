<template>
  <div class="edit">
    <form @submit.prevent="save" class="edit__form">
      <div class="edit__group">
        <label for="edit__nbSerie" class="edit__label">Total series :</label>
        <input
          v-model.number="currentNbSerie"
          id="edit__nbSerie"
          class="edit__input edit__input--rounded"
          type="number"
          min="1"
          max="100"
          autofocus
          required
        />
      </div>
      <div class="edit__group">
        <label for="edit__time-min" class="edit__label">Time :</label>
        <div class="edit__time">
          <input
            :value="currentMin | unitTime"
            @input="(e) => (currentMin = e.target.value)"
            id="edit__time-min"
            class="edit__input--rounded"
            type="number"
            min="0"
            max="59"
            required
          />
          :
          <input
            :value="currentSec | unitTime"
            @input="(e) => (currentSec = e.target.value)"
            class="edit__input--rounded"
            type="number"
            min="0"
            max="59"
            required
          />
        </div>
      </div>
      <div class="edit__group">
        <label for="edit__auto" class="edit__label">Autoplay :</label>
        <div class="edit__input">
          <toggle-switch
            id="edit__auto"
            :checked="currentAuto"
            @toggle="currentAuto = !currentAuto"
          />
        </div>
      </div>
      <input type="submit" />
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import ToggleSwitch from '@/components/ToggleSwitch'

export default {
  components: { ToggleSwitch },
  data() {
    return {
      currentNbSerie: this.$store.state.serie[1],
      currentMin: this.$store.state.refTime[0],
      currentSec: this.$store.state.refTime[1],
      currentAuto: this.$store.state.auto
    }
  },
  methods: {
    ...mapActions(['saveSettings']),
    save() {
      this.saveSettings({
        nbSerie: this.currentNbSerie,
        min: this.currentMin,
        sec: this.currentSec,
        auto: this.currentAuto
      })
      this.$router.push({ name: 'workout' })
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

    &--rounded
      border none
      border solid .1rem color-bg-input
      border-radius: .5rem

  &__time
    max-width 17rem
    margin 0 auto
    & > input
      display inline
      text-align center
</style>
