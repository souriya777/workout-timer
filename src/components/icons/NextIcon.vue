<template>
  <svg
    viewBox="0 0 24 24"
    :height="height"
    :width="width"
    preserveAspectRatio="xMidYMid"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"></path>
  </svg>
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: 30,
      required: false
    },
    width: {
      type: Number,
      default: 30,
      required: false
    }
  }
}
</script>
