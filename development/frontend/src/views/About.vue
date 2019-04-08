<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ProductGrid></ProductGrid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductGrid from '@/components/ProductGrid.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'about',
  components: {
    ProductGrid,
  },
});
</script>
