<template>
  <page-body>
    <page-title>Pride</page-title>
    <scripture-carousel v-bind="{ verses }" />
  </page-body>
</template>

<script>
import verses from '@/verses.js'
export default {
  computed: {
    verses() {
      return verses.filter(v => v.tags.includes('humble'))
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  //background url('./bg/glory.svg')
</style>
