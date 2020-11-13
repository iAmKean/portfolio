<template>
  <div class="login">
    <div data-aos="fade-up" data-aos-anchor-placement="center-center">
    test aos 
    </div>
    <button type="submit" @click="login()">Login</button>
  </div>
</template>

<script>
// @ is an alias to /src
import VueRouter from "vue-router";
const { isNavigationFailure, NavigationFailureType } = VueRouter;
import AOS from 'aos';

export default {
  name: "Login",
  components: {},
  methods: {
    login() {
      this.$router.push({ name: "Home" }).catch(failure => {
        if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
          console.log("Error attempting to the page");
        }
      });
    }
  },
  created() {
    AOS.init()
  }
};
</script>
