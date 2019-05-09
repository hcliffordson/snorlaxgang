<template>
  <div class="container">
    <div class="field control">
      <p class="control has-icons-left">
        <input class="input" type="email" placeholder="Email">
        <span class="icon is-small is-left">
          <i class="material-icons">email</i>
        </span>
      </p>
    </div>
    <div class="field control">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-on:keyup.enter="submit">
        <span class="icon is-small is-left">
          <i class="material-icons">lock</i>
        </span>
      </p>
    </div>
    <div class="field control">
      <button class="button is-info" v-on:click="submit">
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
