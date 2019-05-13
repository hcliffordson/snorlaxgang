<template>
<div>
  <loading-bar v-if="$apollo.loading || loading"></loading-bar>
  <span v-else >
    {{results}}
  </span>

</div>
</template>
<script>
import gql from 'graphql-tag';
import Vue from 'vue';
import {SEARCH_LISTING_QUERY} from '@/services/backend';
import LoadingBar from '@/components/LoadingBar.vue';
import { setTimeout } from 'timers';
const SEARCH_DELAY = 500;
const searchDelay = () => new Promise((res) => setTimeout(res, SEARCH_DELAY));
export default Vue.extend({
  props: {
    query: String
  },
  data() {
    return {
      internalQuery: '',
      loading: true
    };
  },
  watch: {
    query(oldVal, newVal) {
      this.loading = true;
      searchDelay().then(() => {
        this.internalQuery = newVal;
        this.loading = false;
      });
    }
  },
  components: {
    LoadingBar
  },
  apollo: {
    results: {
      query: gql`${SEARCH_LISTING_QUERY}`,
      variables() {
        return {
          query: this.query
        };
      },
      update(data) {
        return data.searchListings;
      }
    }
  }
});
</script>

