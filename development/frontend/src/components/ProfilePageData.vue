<template>
  <div>
    <SearchResultList v-bind:searchResults="myListings" />
  </div>
</template>

<script>
import Vue from 'vue';
import SearchResultList from '@/components/SearchResultList.vue';
import {GET_MY_LISTINGS_QUERY} from '@/services/backend';
import gql from 'graphql-tag';

export default Vue.extend({

  name: 'ProfilePageData',
  components: {
    SearchResultList,
  },

  data() {
    return {
      query: ''
    };
  },

  apollo: {
    myListings: {
      query: gql`${GET_MY_LISTINGS_QUERY}`,
      variables() {
        return {
          query: this.query
        };
      },
      update(data) {
        return data.getMyListings;
      }
    }
  }
});
</script>
