<template>
  <publish-listing @submit="createListing"/>
</template>


<script>
import Vue from 'vue';
import gql from 'graphql-tag';
import PublishListing from '@/components/PublishListing.vue';
import {CREATE_LISTING_MUTATION} from '@/services/backend';
import router from '../router';
export default Vue.extend({
  components: {
    PublishListing
  },

  methods: {
    createListing(data) {
      this.$apollo.mutate({
        mutation: gql `${CREATE_LISTING_MUTATION}`,
        variables: {
          price: parseInt(data.price),
          title : data.title,
          description : data.description,
          imgURL : data.imageUrl
        }
      }).then((data) => {
        router.push({
          name: 'listingDetail',
          params:{
            id: data.data.createListing.id
            }});
      });
    }
  }

});
</script>
