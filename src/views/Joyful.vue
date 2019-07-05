<template>
  <page-body>
    <page-title>Joyful</page-title>
    <scripture-carousel v-bind="{ verses }" />
  </page-body>
</template>

<script>
import verses from '@/verses.js'
export default {
  computed: {
    verses() {
      return verses.filter(v => v.tags.includes('joy'))
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  //background url('./bg/bubbles.svg')
</style>
