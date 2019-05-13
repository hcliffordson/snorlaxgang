<template>
  <div>
  <div v-for="category in categories" v-bind:key="category.id">
    <h1>
      {{ category.label }}
      {{ category.id }}
    </h1>
  </div>
  </div>

</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'CategoryList',
  props: {
    categories: Array,
  }
});
</script>
