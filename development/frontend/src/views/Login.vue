<template>
  <section class="section">
    <figure class="image is-128x128 container field">
      <img class="is-rounded" src="../assets/otrade512.png" alt="123">
    </figure>
    <login-form-data></login-form-data>
  </section>
</template>
<script>

import Vue from 'vue';
import NavBar from '@/components/NavBar';
import LoginFormData from '@/components/LoginFormData.vue';

export default Vue.extend({
  name: 'login',
  components: {
    LoginFormData,
    NavBar
  }
});

</script>
