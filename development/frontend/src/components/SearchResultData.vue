<template>
  <div>
    <loading-bar v-if="$apollo.loading || loading"></loading-bar>
    <span v-else >
      <search-result-list :searchResults="results" />
    </span>

  </div>
</template>
<script>
import gql from 'graphql-tag';
import Vue from 'vue';
import {SEARCH_LISTING_QUERY} from '@/services/backend';
import LoadingBar from '@/components/LoadingBar.vue';
import SearchResultList from '@/components/SearchResultList.vue';
import { setTimeout, clearTimeout } from 'timers';
const SEARCH_DELAY = 1000;
const searchDelay = () => new Promise((res) => setTimeout(res, SEARCH_DELAY));
export default Vue.extend({
  props: {
    query: String
  },
  data() {
    return {
      internalQuery: '',
      loading: true,
      timeoutHandle: 0
    };
  },
  watch: {
    query(oldVal, newVal) {
      this.loading = true;
      if (this.timeoutHandle !== 0) {
        clearTimeout(this.timeoutHandle);
      }
      this.timeoutHandle = setTimeout(() => {
        this.internalQuery = newVal || oldVal;
        this.loading = false;
      }, SEARCH_DELAY);
    }
  },
  components: {
    LoadingBar,
    SearchResultList
  },
  apollo: {
    results: {
      query: gql`${SEARCH_LISTING_QUERY}`,
      variables() {
        return {
          query: this.internalQuery
        };
      },
      update(data) {
        return data.searchListings;
      }
    }
  }
});
</script>

