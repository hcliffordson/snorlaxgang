<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ProductGridData/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductGrid from '@/components/ProductGrid.vue'; // @ is an alias to /src
import ProductGridData from '@/components/ProductGridData.vue';

export default Vue.extend({
  name: 'about',
  components: {
    ProductGrid,
    ProductGridData
  },
});
</script>
