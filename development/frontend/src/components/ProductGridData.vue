<template>
  <div>
    <ProductGrid v-bind:productCards="listings"/>
  </div>
</template>

<script lang="ts">
import gql from 'graphql-tag';

import Vue from 'vue';
import ProductGrid from '@/components/ProductGrid.vue';

const GET_ALL_LISTINGS_QUERY = `
query {
  getAllListings {
    price
    title
    description
  }
}
`;
const apolloListings = {
  query: gql`${GET_ALL_LISTINGS_QUERY}`,
  update(data: any) {
    return data.getAllListings;
  }
};
export default Vue.extend({
  components: {
    ProductGrid
  },
  apollo: {
    listings: apolloListings
  }
});
</script>
