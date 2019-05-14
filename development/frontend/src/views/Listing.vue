<template>
  <section class="section">
    <product-listing-data v-bind:listing-id="$route.params.id"></product-listing-data>
  </section>
</template>


<script lang="ts">
import Vue from 'vue';
import ProductListingData from '@/components/ProductListingData.vue';

export default Vue.extend({
  name: 'listing',
  components: {
    ProductListingData,
  },
});
</script>
