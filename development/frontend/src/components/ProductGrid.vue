<template>
  <div class="columns">
    <div class="column">
      <ProductCard :title="productCard1.title" v-bind:price="productCard1.price" :imgURL="productCard1.imgURL"/>
    </div>
    <div class="column">
      <ProductCard :title="productCard2.title" v-bind:price="productCard2.price" :imgURL="productCard2.imgURL"/>
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
  data: function () {
  return {
    productCard1: {
      title: 'I am a donkey',
      price: 555,
      imgURL: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/12/11/naturo-monkey-selfie.jpg?w968h681',
    },
    productCard2: {
      title: 'Dawg the monkey',
      price: 1010010101,
      imgURL: 'https://secure.i.telegraph.co.uk/multimedia/archive/03013/selfie02_3013424b.jpg'
    }
  }
}

});
</script>
