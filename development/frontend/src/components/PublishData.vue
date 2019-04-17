<template>
  <publish-listing @submit="createListing"/>
</template>


<script>
import Vue from 'vue';
import gql from 'graphql-tag';
import PublishListing from '@/components/PublishListing.vue';
import {CREATE_LISTING_MUTATION} from '@/services/backend';
import {GET_ALL_LISTINGS_QUERY} from '@/services/backend';
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
        },
        update: (store, { data: { createListing } }) => {
          const query = gql`${GET_ALL_LISTINGS_QUERY}`;
          const cacheData = store.readQuery({query: query});
          cacheData.getAllListings.push(createListing)
          store.writeQuery({ query: query, data: cacheData })
      },
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
