<template>
  <div id="app">
    <NavBar v-if="showNavbar"></NavBar>
    <router-view :class="showNavbar && 'navbar-margin'"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'App',
  computed: {
    showNavbar() {
      return !this.$route.meta.guest && !this.$route.meta.hideNav;
    }
  },
  components: {
    NavBar,
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.navbar-margin {
  margin-top: 16px;
}
</style>
