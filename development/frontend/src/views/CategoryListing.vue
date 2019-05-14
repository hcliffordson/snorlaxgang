<template>
  <section class="section">
    <category-listings-data :categoryId="$route.params.id"/>
  </section>
</template>

<script>
import Vue from 'vue';
import CategoryListingsData from '@/components/CategoryListingsData.vue';

export default Vue.extend({
  name: 'categorylisting',
  components: {
    CategoryListingsData
  },
});
</script>

