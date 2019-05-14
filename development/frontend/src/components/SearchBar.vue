<template>
  <nav class="navbar is-light">
      <div class="navbar-brand">
        <div class="navbar-item">
          <router-link to="/home" class="navbar-brand control">
            <i class="material-icons nav-btn">arrow_back</i>
          </router-link>
        </div>
        <div class="navbar-item">
          <div class="field ">
            <div class="control has-icons-left">
              <input v-model="query"  class="input" type="text" placeholder="Search" @input="submit">
              <span class="icon is-small is-left">
                <i class="material-icons">search</i>
              </span>
            </div>
          </div>
        </div>
      </div>
  </nav>
</template>

<style scoped>
.nav-btn {
   padding-top: 14px;
}
.navbar-item {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>

<script>
import Vue from 'vue';
import router from '../router';

export default Vue.extend({
  data() {
    return {
      query: '',
      };
  },
  methods: {
    submit() {
      const { query } = this;
      const data = {
        query
      };
      this.$emit('submit', data);
    }
  }
});
</script>

