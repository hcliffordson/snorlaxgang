<template>
  <div class ="listing">
    <product-listing-data v-bind:listing-id="$route.params.id"></product-listing-data>
  </div>
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
