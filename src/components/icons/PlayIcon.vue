<template>
  <svg
    viewBox="0 0 24 24"
    :height="height"
    :width="width"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g><path d="M8 5v14l11-7z"></path></g>
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
