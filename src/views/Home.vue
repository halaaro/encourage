<template>
  <div 
    class="home">
    
    <img 
      class="logo"
      src="../assets/logo.svg" 
      alt="big penguin hugging a smaller penguin">
    <div class="content">
      <Hello msg="Welcome to barnub.us!"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from '@/components/Hello.vue'

export default {
  name: 'Home',
  components: {
    Hello
  }
}
</script>

<style lang="stylus" scoped>
.logo
  width 290px
  height 428px
  transform scale(1)
  transform-origin top center


.fade-view-leave .logo, .fade-view-enter-to .logo
  transform scale(1)
.fade-view-enter .logo, .fade-view-leave-to .logo
  transform scale(.3448)

</style>
