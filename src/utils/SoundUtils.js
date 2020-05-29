import countdown from '../assets/mp3/countdown.mp3'
import nextSound from '../assets/mp3/next.mp3'

const COUNTDOWN_AUDIO = new Audio(countdown)
const NEXT_AUDIO = new Audio(nextSound)

export function playCountdown() {
  COUNTDOWN_AUDIO.play()
}

export function playNext() {
  NEXT_AUDIO.play()
}
