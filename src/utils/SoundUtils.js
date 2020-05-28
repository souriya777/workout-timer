import secondSound from '../assets/mp3/second.mp3'
import nextSound from '../assets/mp3/next.mp3'

const SECOND_AUDIO = new Audio(secondSound)
SECOND_AUDIO.loop = true
const NEXT_AUDIO = new Audio(nextSound)

export function playSecond() {
  SECOND_AUDIO.play()
  setTimeout(() => SECOND_AUDIO.pause(), 3000)
}

export function playNext() {
  NEXT_AUDIO.play()
}
