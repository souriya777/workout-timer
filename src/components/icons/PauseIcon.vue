<template>
  <svg
    viewBox="0 0 24 24"
    :height="height"
    :width="width"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
  </svg>
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: 100,
      required: false
    },
    width: {
      type: Number,
      default: 100,
      required: false
    }
  }
}
</script>
