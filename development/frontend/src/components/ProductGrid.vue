<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-half-mobile" v-for="productCard in productCards" v-bind:key="productCard.id">
      <ProductCard :title="productCard.title" :price="productCard.price" imgURL="https://secure.i.telegraph.co.uk/multimedia/archive/03013/selfie02_3013424b.jpg">
      </ProductCard>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductCard from '@/components/ProductCard.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'ProductGrid',
  components: {
    ProductCard
  },
  props: {
    productCards: Array,
  }
});
</script>
