<template>
  <div>
    <div v-for="result in searchResults" v-bind:key="result.id">
      <router-link :to="'/listing/' + result.id">
        <SearchResultItem :title="result.title" :price="result.price" :imgURL="result.imgURL" >
        </SearchResultItem>
      </router-link>
    </div>
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
    searchResults: Array,
  }
});
</script>
