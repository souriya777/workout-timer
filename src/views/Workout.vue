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
    ...mapMutations({
      next: 'next',
      previous: 'previous',
      switchAuto: 'switchAuto'
    }),
    ...mapActions({
      playOrPause: 'playOrPause'
    })
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
  },
  filters: {
    unitTime(val) {
      return new String(val).padStart(2, '0')
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
  height 100%
  padding 1rem
  background-color #ddd
  font-size 10rem

  &__time
    font-weight 600

  &__play
    display flex
    justify-content center
    width 100%
    &-button
      display flex
      justify-content center
      align-items center
      height 12rem
      width 12rem
      border 0.3rem solid
      border-radius 50%

  &__move
    display flex
    justify-content space-between
    align-items center
    width 100%
    &--inactive > svg
      fill transparent

  &__auto
    border .1rem solid
    border-radius .5rem
    padding 0rem .3rem
    font-size 1.7rem
    font-weight 600
    &--active
      border .3rem solid
      background-color alpha(color-bg-primary, .9)
</style>
