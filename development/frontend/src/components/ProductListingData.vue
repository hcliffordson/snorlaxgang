<template>
  <div>
    <div v-if="!listing">Loading...</div>
    <ProductCardDetail
      v-if="listing"
      :title="listing.title"
      :price="listing.price"
      :description="listing.description"
      :imgURL="listing.imgURL"
      :categoryLabel="listing.category.label"
      seller="Karl Karlsson"
      email="kalle@karlsson.se"
      phone="07011211211"
      date="4 April"
    />
  </div>

</template>

<script lang="ts">
import gql from 'graphql-tag';
import {GET_LISTING_QUERY} from '@/services/backend';
import ProductCardDetail from '@/components/ProductCardDetail.vue';

import Vue from 'vue';
export default Vue.extend({
  components: {
    ProductCardDetail
  },
  props: {
    listingId: String
  },
  apollo: {
    listing: {
      query: gql`${GET_LISTING_QUERY}`,
      variables() {
        return {
          id: this.listingId
        };
      },
      update(data) {
        return data.getListing;
      }
    }
  }
});
</script>
