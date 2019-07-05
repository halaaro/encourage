<template>
  <page-body>
    <page-title>Lonely</page-title>
    <scripture-carousel v-bind="{ verses }" />
  </page-body>
</template>

<script>
import verses from '@/verses.js'
export default {
  computed: {
    verses() {
      return verses.filter(
        v => v.tags.includes('relationship') || v.tags.includes('comfort')
      )
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  //background url('./bg/cloudy.svg')
</style>
