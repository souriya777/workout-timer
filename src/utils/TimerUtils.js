export const DEFAULT_MIN = 0
export const DEFAULT_SEC = 5

export function toUnitTime(val) {
  return new String(val).padStart(2, '0')
}
