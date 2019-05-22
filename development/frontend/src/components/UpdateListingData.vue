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
      }).then((d) => {
        console.log(d);
      });
    }
  }

});
</script>
