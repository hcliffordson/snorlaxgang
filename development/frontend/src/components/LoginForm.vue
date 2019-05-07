<template>
  <div class="container">
    <div class="field control">
      <input class="input" type="email" placeholder="Email">
    </div>
    <div class="field control">
      <input class="input" type="password" placeholder="Password" v-on:keyup.enter="submit">
    </div>
    <div class="field control">
      <button class="button is-success" v-on:click="submit">
        Login
      </button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import router from '../router';

export default Vue.extend({
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submit() {
      const { email,password } = this;
      const data = {
        email,
        password
      };
      this.$emit('submit', data);
      router.replace('/home');
    }
  }
});

</script>
