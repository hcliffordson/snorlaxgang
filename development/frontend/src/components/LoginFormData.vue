<template>
  <button class="button" @click="loginHandler">TEST loginHandler</button>
</template>
<script>
import Vue from 'vue';
import { login } from '../services/backend/auth.ts';
export default Vue.extend({
  methods: {
    loginHandler(data) {
      // const email = data.email;
      // const password = data.password;
      const email = 'default@example.org';
      const password = 'defaultpass';
      login(email, password)
        .then(data => console.log(data));


    }
  }
})
</script>
