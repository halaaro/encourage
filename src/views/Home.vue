<template>
  <div class="home">
    <img
      class="logo"
      src="../assets/logo.svg"
      alt="big penguin hugging a smaller penguin"
    />
    <div class="content">
      <div class="hello">
        <h1>The Encourage App</h1>
        <p>
          Our mission is to provide topical scripture selections so that the
          Word of God can encourage the children of God.
        </p>
        <p>Choose a path from the list to begin</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
.logo
  margin 5vmin
  height 33vmin
  transform-origin top center

h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

.hello
  width 80%
  margin 25px auto
</style>
