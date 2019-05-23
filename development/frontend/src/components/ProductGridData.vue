<template>
  <ProductGrid v-bind:productCards="listings" v-if="listings != ''"/>
  <h1 v-else>
    Inga tillgängliga annonser 😢
  </h1>
</template>

<script lang="ts">
import gql from 'graphql-tag';

import Vue from 'vue';
import ProductGrid from '@/components/ProductGrid.vue';
import {GET_ALL_LISTINGS_QUERY} from '@/services/backend';

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
