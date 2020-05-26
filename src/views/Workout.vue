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
      <div v-else>&nbsp;</div>
      <div v-if="showNext" @click.stop="next">
        <next-icon />
      </div>
      <div v-else>&nbsp;</div>
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
      previous: 'previous'
    }),
    ...mapActions({
      playOrPause: 'playOrPause'
    })
  },
  computed: {
    ...mapState(['serie', 'time', 'playing']),
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
  font-size: 10rem

  &__time
    font-weight 600

  &__play
    display flex
    justify-content center
    width 100%
    &-button
      display: flex
      justify-content: center
      align-items center
      height: 12rem
      width: 12rem
      border: 0.3rem solid
      border-radius: 50%

  &__move
    display flex
    justify-content space-between
    width 100%
</style>
