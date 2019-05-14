<template>
  <product-grid v-bind:productCards="categoryListings" />
  <!-- <div>{{categoryListings}}</div> -->
</template>

<script>
import gql from 'graphql-tag';

import Vue from 'vue';
import ProductGrid from '@/components/ProductGrid.vue';
import {GET_ALL_LISTINGS_IN_CATEGORY_QUERY} from '@/services/backend';

const apolloCategoryListings = {
  query: gql`${GET_ALL_LISTINGS_IN_CATEGORY_QUERY}`,
  variables() {
    return {
      id: this.categoryId
    };
  },
  update(data) {
    return data.getListingsInCategory;
  }
};

export default Vue.extend({
  components: {
    ProductGrid
  },
  props: {
    categoryId: String
  },
  apollo: {
    categoryListings: apolloCategoryListings
  }
});

</script>
