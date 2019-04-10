<template>
  <div>
    <ProductGrid v-bind:productCards="getAllListings"/>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag';

import Vue from 'vue';
import ProductGrid from '@/components/ProductGrid.vue';

export default Vue.extend({
  components: {
    ProductGrid
  },
  apollo: {
    getAllListings: gql`
      query {
        getAllListings {
          price
          title
          description
        }
      }
    `
  }
});
</script>
