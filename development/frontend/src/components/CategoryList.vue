<template>
  <aside class="menu">
    <p class="menu-label">Categories</p>
    <ul class="menu-list">
      <li v-for="category in categories" v-bind:key="category.id">
        <router-link :to="'/category/'+category.id">{{ category.label }}</router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'CategoryList',
  props: {
    categories: Array
  }
});
</script>
