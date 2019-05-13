<template>
  <login-form @submit="loginHandler" :isInvalidLogin="isInvalidLogin"></login-form>
</template>
<script>
import Vue from 'vue';
import { login } from '../services/backend/auth.ts';
import LoginForm from '@/components/LoginForm.vue';
export default Vue.extend({
  components: {
    LoginForm
  },
  data() {
    return {
      isInvalidLogin: false,
    };
  },
  methods: {
    loginHandler(input) {
      const email = input.email;
      const password = input.password;
      login(email, password)
        .then((data) => this.$router.push('home'))
        .catch((err) => {
          this.isInvalidLogin = true;
          console.log(err);
        });


    }
  }
});
</script>
