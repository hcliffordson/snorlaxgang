<template>
  <section class="section">
    <figure class="image is-128x128 container field">
      <img class="is-rounded" src="../assets/otrade512.png" alt="123">
    </figure>
    <login-form-data></login-form-data>
    <div class="container">
      <p class="content">If you wish to add your organization to this application, please contact us at
        <a href="mailto:info@otrade.com">info@otrade.com</a>
      </p>
    </div>
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
