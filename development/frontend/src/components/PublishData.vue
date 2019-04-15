<template>
  <publish-listing @submit="createListing"/>
</template>


<script>
import Vue from 'vue';
import gql from 'graphql-tag';
import PublishListing from '@/components/PublishListing.vue';
import {CREATE_LISTING_MUTATION} from '@/services/backend';
export default Vue.extend({
  components: {
    PublishListing
  },

  props: {
    ID: String
  },

  methods: {
    createListing(data) {
      const newListing = this.newListing;
      this.newListing = '';
      this.$apollo.mutate({
        mutation: gql `${CREATE_LISTING_MUTATION}`,
        variables: {
          price: parseInt(data.price),
          title : data.title,
          description : data.description,
          imgURL : 'TO BE CHANGED WHEN IMAGES IS SOLVED'
        }
      }).then((data) => {
        console.log(data);
      });
    }
  }

});
</script>
