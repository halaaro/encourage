<template>
  <div class="home">
    <img src="../assets/logo.svg">
    <Hello msg="Welcome to barnub.us!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from "@/components/Hello.vue";

export default {
  name: "home",
  components: {
    Hello
  }
};
</script>
