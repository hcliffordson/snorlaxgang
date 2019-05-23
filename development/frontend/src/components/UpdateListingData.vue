<template>
<div>
  <div v-if="!listing || !categories">Loading...</div>
  <update-listing
    :currentListing="listing"
    v-if="categories && listing"
    :categories="categories"
  @update="updateListing" />
</div>


</template>

<script>
import Vue from 'vue';
import { UPDATE_LISTING_MUTATION} from '@/services/backend';
import gql from 'graphql-tag';
import UpdateListing from '@/components/UpdateListing.vue';
import { GET_LISTING_QUERY } from '../services/backend';
import {GET_ALL_CATEGORIES_QUERY} from '@/services/backend';
import {GET_ALL_LISTINGS_QUERY} from '@/services/backend';
import router from '../router';

export default Vue.extend({

  components: {
    UpdateListing
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
    },

    categories: {
      query: gql`${GET_ALL_CATEGORIES_QUERY}`,

      update(data) {
        return data.getAllCategories;

      }
    }
  },

  methods: {
    updateListing(data) {
      console.log(data);
      console.log(this.listingId);
      this.$apollo.mutate({
        mutation: gql `${UPDATE_LISTING_MUTATION}`,
        variables: {
          id : this.listingId,
          imgURL : data.imgURL,
          title : data.title,
          description : data.description,
          price : parseInt(data.price, 10),
          categoryId : data.categoryId
        },
        update: (store, { data: { updateListing } }) => {
          try {
            const query = gql`${GET_ALL_LISTINGS_QUERY}`;
            const cacheData = store.readQuery({query});
            const updatedCache = cacheData.getAllListings
              .filter(listing => listing.id !== updateListing.id)
              .concat(updateListing);
            store.writeQuery({
              query,
              data: {
                getAllListings: updatedCache
              }
            });


          } catch (ex) {
            console.log('No cache existed for all listings');
          }
          try {
            const query = gql`${GET_LISTING_QUERY}`;
            store.writeQuery({
              query,
              variables: {
                id: updateListing.id
              },
              data: {
                getListing: updateListing
              }
            })
          } catch (ex) {
            console.log('No cache existed for single item')
          }

      },
      }).then((resp) => {
        router.push({
          name: 'listingDetail',
          params: {
            id: resp.data.updateListing.id
          }});
      });
    }
  }

});
</script>
