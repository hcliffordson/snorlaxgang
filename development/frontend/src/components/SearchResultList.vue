<template>
  <div>
    <h3 class="title is-5 is-marginless" v-if="searchCategoryResults && searchCategoryResults.length > 0">
      Categories
    </h3>
    <div v-for="result in searchCategoryResults" v-bind:key="result.id">
      <router-link :to="'/category/' + result.id">
      {{result.label}}
      </router-link>
    </div>
    <h3 class="title is-5 is-marginless" v-if="searchListingResults && searchListingResults.length > 0">
      Listings
    </h3>
    <div v-for="result in searchListingResults" v-bind:key="result.id">
      <router-link :to="'/listing/' + result.id">
        <SearchResultItem :title="result.title" :price="result.price" :imgURL="result.imgURL" >
        </SearchResultItem>
      </router-link>
    </div>
    <h4 v-if="searchCategoryResults && searchListingResults && !searchCategoryResults.length && !searchListingResults.length">Nothing was found 😢 </h4>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SearchResultItem from '@/components/SearchResultItem.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'SearchResultList',
  components: {
    SearchResultItem
  },
  props: {
    searchListingResults: Array,
    searchCategoryResults: Array
  }
});
</script>
