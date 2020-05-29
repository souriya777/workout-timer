// export const DEFAULT_MIN = 1
// export const DEFAULT_SEC = 0
// debug
export const DEFAULT_MIN = 0
export const DEFAULT_SEC = 10

export function toUnitTime(val) {
  return new String(val).padStart(2, '0')
}
