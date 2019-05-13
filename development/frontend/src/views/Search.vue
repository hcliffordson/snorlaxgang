<template>
  <section class="section">
    <search-result-data :query="searchQuery" v-if="!searchBlank" />
    <p v-else>
      Please write a query in the search field.
    </p>
  </section>

</template>
<script>
import Vue from 'vue';
import SearchResultData from '@/components/SearchResultData.vue';
export default Vue.extend({
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    searchBlank() {
      return this.searchQuery === '';
    }
  },
  components: {
    SearchResultData
  }
});
</script>
