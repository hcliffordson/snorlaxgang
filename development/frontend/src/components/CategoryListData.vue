<template>
  <div>
    <category-list v-bind:categories="categories" />
  </div>
</template>

<script>
import gql from 'graphql-tag';

import Vue from 'vue';
import CategoryList from '@/components/CategoryList.vue';
import {GET_ALL_CATEGORIES_QUERY} from '@/services/backend';

const apolloCategories = {
  query: gql`${GET_ALL_CATEGORIES_QUERY}`,
  update(data) {
    console.log(data.getAllCategories);
    return data.getAllCategories;
  }
};
export default Vue.extend ({
  components: {
    CategoryList
  },

  apollo: {
    categories: apolloCategories
  }
});
</script>
