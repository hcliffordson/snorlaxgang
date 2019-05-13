<template>
<div>
  {{results}}
</div>
</template>
<script>
import gql from 'graphql-tag';
import Vue from 'vue';
import {SEARCH_LISTING_QUERY} from '@/services/backend';
export default Vue.extend({
  props: {
    query: String
  },
  apollo: {
    results: {
      query: gql`${SEARCH_LISTING_QUERY}`,
      variables() {
        return {
          query: this.query
        };
      },
      update(data) {
        return data.searchListings;
      }
    }
  }
});
</script>

