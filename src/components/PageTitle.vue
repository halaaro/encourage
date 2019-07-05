<template />

<script>
export default {
  mounted() {
    document.title = this.$slots.default[0].text + ' - Encourage'
  }
}
</script>
