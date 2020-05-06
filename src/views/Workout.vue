<template>
  <div class="workout">
    <div class="serie">
      1 / 5
    </div>
    <div class="time">
      01:00
    </div>
    <div class="workout__state" @click="playOrPause">
      <div class="workout__state-button">
        <previous-icon />
      </div>
      <div v-show="!playing" class="workout__state-button">
        <play-icon />
      </div>
      <div v-show="playing" class="workout__state-button">
        <pause-icon />
      </div>
      <div class="workout__state-button">
        <next-icon />
      </div>
    </div>
  </div>
</template>
<script>
import PlayIcon from '@/components/icons/PlayIcon'
import PauseIcon from '@/components/icons/PauseIcon'
import PreviousIcon from '@/components/icons/PreviousIcon'
import NextIcon from '@/components/icons/NextIcon'

export default {
  components: { PlayIcon, PauseIcon, PreviousIcon, NextIcon },
  data() {
    return {
      playing: false
    }
  },
  methods: {
    playOrPause() {
      this.playing = !this.playing
    }
  }
}
</script>
<style lang="stylus">
.workout
  display flex
  flex-direction column
  justify-content space-evenly
  align-items center
  height 100%
  padding 1rem
  background-color #ddd
  font-size: 10rem
  .time
    font-weight 600
  &__state
    display flex
    &-button
      display: flex
      justify-content: center
      align-items center
      height: 12rem
      width: 12rem
      border: 0.3rem solid
      border-radius: 50%
</style>
