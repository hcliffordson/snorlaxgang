<template>
  <div>{{ listing }}</div>
</template>

<script lang="ts">
import gql from 'graphql-tag';
import {GET_LISTING_QUERY} from '@/services/backend';

import Vue from 'vue';
export default Vue.extend({
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
