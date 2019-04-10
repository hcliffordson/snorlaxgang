<template>
  <div>{{ getAllListings }}</div>
</template>

<script lang="ts">
import gql from 'graphql-tag';

import Vue from 'vue';
export default Vue.extend({
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
