<template>
  <div>
    <div class="scripture">
      <!-- <div v-for="verse in verses" 
:key="verse.verse"> -->
      <p class="verse-text" v-html="verse.text" />
      <p class="verse-verse">
        {{ verse.verse }}
        <span 
v-if="verse.trans"               class="translation">({{ verse.trans }})</span>
      </p>
    </div>
    <button @click="next()">&rarr;</button>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    verses: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      idx: 0
    }
  },
  computed: {
    seq() {
      return this.verses
        .map((v, idx) => [idx, Math.random()])
        .sort((a, b) => b[1] - a[1])
        .map(a => a[0])
    },
    verse() {
      const v = this.verses[this.seq[this.idx]]
      if (v == undefined) debugger
      return v || {}
    }
  },
  mounted() {
    this.tmpIdx = Math.floor(Math.random() * this.verses.length)
    this._interval = setInterval(() => this.next(), 5 * 60 * 1000)
  },
  destroyed() {
    clearInterval(this._interval)
  },
  methods: {
    next() {
      this.idx = (this.idx + 1) % this.verses.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.verse-text
    font-size 2em
    width 80%
    text-align center
    margin 0 auto
    padding calc(vmin / 2 + 35px) 0

.verse-verse
    font-size 1.1em
    width 80%
    text-align right
    margin-left auto
    margin-right auto

.scripture
    user-select all
</style>
