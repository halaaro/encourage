<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">🏠</router-link> |
      <!-- 
        
       -->
      <router-link to="/joyful">Joyful</router-link> |
      <router-link to="/lonely">Lonely</router-link> |
      <router-link to="/anger">Anger</router-link> |
      <router-link to="/pride">Pride</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="stylus">
body, html
  margin 0
  padding 0
  background linear-gradient(white, rgb(230,230,230))
  min-height 100vh



#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  user-select none


#nav
  background-color white
  padding 30px
  opacity 0.5

  a

    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #003b94bd
#nav:hover
  opacity 1
</style>
