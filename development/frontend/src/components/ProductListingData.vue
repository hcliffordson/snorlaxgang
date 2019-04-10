<template>
  <div>
    <div v-if="!listing">Loading...</div>
    <ProductCardDetail
      v-if="listing"
      :title="listing.title"
      :price="listing.price"
      :description="listing.description"
      imgURL="https://secure.i.telegraph.co.uk/multimedia/archive/03013/selfie02_3013424b.jpg"
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
