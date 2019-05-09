<template>
  <div>
    <div v-if="!categories">Loading...</div>
    <publish-listing @submit="createListing"
      v-if="categories"
      :categories="categories"
    />
  </div>
</template>


<script>
import Vue from 'vue';
import gql from 'graphql-tag';
import PublishListing from '@/components/PublishListing.vue';
import {CREATE_LISTING_MUTATION} from '@/services/backend';
import {GET_ALL_LISTINGS_QUERY} from '@/services/backend';
import {GET_ALL_CATEGORIES_QUERY} from '@/services/backend';
import router from '../router';
export default Vue.extend({
  components: {
    PublishListing
  },

  apollo: {
    categories: {
      query: gql`${GET_ALL_CATEGORIES_QUERY}`,

      update(data) {
        return data.getAllCategories;

      }
    }
  },

  methods: {
    createListing(data) {
      this.$apollo.mutate({
        mutation: gql `${CREATE_LISTING_MUTATION}`,
        variables: {
          price: parseInt(data.price, 10),
          title : data.title,
          description : data.description,
          imgURL : data.imageUrl,
          categoryId: data.categoryId
        },
        update: (store, { data: { createListing } }) => {
          const query = gql`${GET_ALL_LISTINGS_QUERY}`;
          const cacheData = store.readQuery({query});
          cacheData.getAllListings.push(createListing);
          store.writeQuery({ query, data: cacheData });
      },
      }).then((resp) => {
        router.push({
          name: 'listingDetail',
          params: {
            id: resp.data.createListing.id
          }});
      });
    }
  }

});
</script>
