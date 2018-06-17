<template>
  <transition 
    name="appear" 
    appear="true">
    <div id="app">
    
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    
      <transition 
        name="fade-view" 
        mode="out-in">
        <router-view/>
      </transition>

    </div> 
  </transition>
</template>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  user-select none

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #003b94bd

.appear-enter
  opacity 0

.appear-enter-active
  transition opacity .5s

.fade-view-leave-active, .fade-view-leave-active .content,  .fade-view-leave-active .logo
  transition all .5s
.fade-view-enter-active, .fade-view-enter-active .content, .fade-view-enter-active .logo
  transition all .5s

.fade-view-enter .content, .fade-view-leave-to .content
  opacity 0



</style>
