<template>
  <section class="section">
    <figure class="image is-128x128 container field">
      <img class="is-rounded" src="../assets/otrade512.png" alt="123">
    </figure>
    <login-form></login-form>
  </section>
</template>
<script>

import Vue from 'vue';
import NavBar from '@/components/NavBar';
import LoginForm from '@/components/LoginForm.vue';

export default Vue.extend({
  name: 'login',
  components: {
    LoginForm,
    NavBar
  }
});

</script>
