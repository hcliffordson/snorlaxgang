<template>
    <span class="tag category-tag is-info is-medium" v-if="category">{{ category.label }} &nbsp;
      <router-link to="/home">
      <button class="delete"></button>
      </router-link>
    </span>
</template>

<style scoped>
.category-tag{
  margin-bottom: 12px;
}
</style>

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
