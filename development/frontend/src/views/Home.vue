<template>
  <div class="home">
    <product-grid-data />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductGridData from '@/components/ProductGridData.vue';

export default Vue.extend({
  name: 'home',
  components: {
    ProductGridData
  },
});
</script>
