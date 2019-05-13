<template>
  <aside class="menu">
    <p class="menu-label">Categories</p>
    <ul class="menu-list">
      <li v-for="category in categories" v-bind:key="category.id">
        <a>{{ category.label }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "CategoryList",
  props: {
    categories: Array
  }
});
</script>
