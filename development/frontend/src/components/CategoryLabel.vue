<template>
<h1 v-if="category">{{ category.label }} </h1>
</template>


<script lang="ts">
import gql from 'graphql-tag';
import {GET_CATEGORY_QUERY} from '@/services/backend';


import Vue from 'vue';
export default Vue.extend({
  props: {
    categoryId: String
  },
  apollo: {
    category: {
      query: gql`${GET_CATEGORY_QUERY}`,
      variables() {
        return { id: this.categoryId
        };
      },
      update(data) {
        return data.getCategory;
      }
    }
  }
});
</script>
