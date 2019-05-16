<template>
  <section class="section">
    <category-label :categoryId="$route.params.id"/>
    <category-listings-data :categoryId="$route.params.id"/>
  </section>
</template>

<script>
import Vue from 'vue';
import CategoryListingsData from '@/components/CategoryListingsData.vue';
import CategoryLabel from '@/components/CategoryLabel.vue';

export default Vue.extend({
  name: 'categorylisting',
  components: {
    CategoryListingsData,
    CategoryLabel
  },
});
</script>

