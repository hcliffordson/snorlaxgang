<template>
  <div class="columns is-multiline is-mobile">
    <div class="column is-half-mobile" v-for="productCard in productCards" v-bind:key="productCard.id">
      <router-link :to="'/listing/' + productCard.id">
        <ProductCard :title="productCard.title" :price="productCard.price" :imgURL="productCard.imgURL" >
        </ProductCard>
      </router-link>
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
