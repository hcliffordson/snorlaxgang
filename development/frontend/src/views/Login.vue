<template>
  <div>
    <login-form></login-form>
  </div>
</template>
<script>

import Vue from 'vue';
import NavBar from '@/components/NavBar';
import LoginForm from '@/components/LoginForm.vue'

export default Vue.extend({
  name: 'login',
  components: {
    LoginForm,
    NavBar
  }
})

</script>
