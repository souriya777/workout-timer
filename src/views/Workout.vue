<template>
  <div class="workout" @click="playOrPause">
    <div class="workout__serie">{{ currentSerie }} / {{ totalSeries }}</div>
    <div class="workout__time">
      {{ minutes | unitTime }}:{{ seconds | unitTime }}
    </div>
    <div class="workout__play">
      <div v-show="!playing" class="workout__play-button">
        <play-icon />
      </div>
      <div v-show="playing" class="workout__play-button">
        <pause-icon />
      </div>
    </div>
    <div class="workout__move">
      <div v-if="showPrevious" @click.stop="previous">
        <previous-icon />
      </div>
      <div v-else class="workout__move--inactive">
        <previous-icon />
      </div>
      <div :class="workoutAutoClass" @click.stop="switchAuto">auto</div>
      <div v-if="showNext" @click.stop="next">
        <next-icon />
      </div>
      <div v-else class="workout__move--inactive">
        <next-icon />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import PlayIcon from '@/components/icons/PlayIcon'
import PauseIcon from '@/components/icons/PauseIcon'
import PreviousIcon from '@/components/icons/PreviousIcon'
import NextIcon from '@/components/icons/NextIcon'

export default {
  components: { PlayIcon, PauseIcon, PreviousIcon, NextIcon },
  methods: {
    ...mapMutations(['next', 'previous']),
    ...mapActions(['playOrPause', 'switchAuto'])
  },
  computed: {
    ...mapState(['serie', 'time', 'playing', 'auto']),
    currentSerie() {
      return this.serie[0]
    },
    totalSeries() {
      return this.serie[1]
    },
    minutes() {
      return this.time[0]
    },
    seconds() {
      return this.time[1]
    },
    showPrevious() {
      return this.currentSerie > 1
    },
    showNext() {
      return this.currentSerie < this.totalSeries
    },
    workoutAutoClass() {
      return {
        workout__auto: true,
        'workout__auto--active': this.auto
      }
    }
  }
}
</script>
<style lang="stylus">
.workout
  display flex
  flex-direction column
  justify-content space-between
  align-items center
  padding 1rem
  font-size 10rem

  @media screen and (orientation:landscape)
    font-size 5rem

  &__time
    font-weight 600

  &__play
    display flex
    justify-content center
    width 100%
    color color-action
    fill color-action
    &-button
      display flex
      justify-content center
      align-items center
      height 12rem
      width 12rem
      border 0.3rem solid
      border-radius 50%
      @media screen and (orientation:landscape)
        height 8rem
        width 8rem

  &__move
    display flex
    justify-content space-between
    align-items center
    width 100%
    &--inactive > svg
      fill transparent

  &__auto
    border .1rem solid color-txt-secondary
    border-radius .5rem
    padding 0rem .3rem
    color color-txt-secondary
    font-size 2.5rem
    font-weight 600
    &--active
      border .3rem solid color-action
      color color-txt-secondary
</style>
