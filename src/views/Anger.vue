<template>
  <page-body>
    <page-title>Anger</page-title>
    <scripture-carousel v-bind="{ verses }" />
  </page-body>
</template>

<script>
import verses from '@/verses.js'
export default {
  computed: {
    verses() {
      return verses.filter(v => v.tags.includes('peace'))
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  //background url('./bg/peace.svg')
</style>
