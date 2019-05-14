<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="imgURL" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{ title }}</p>
          <p class="subtitle is-6">Price: {{ price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export interface ProductCardType {
  title: string;
  price: number;
  imgUrl: string;
}
export default Vue.extend({
  name: 'ProductCard',
  props: {
    title: String,
    price: Number,
    imgURL: String
  }
});
</script>
<style scoped>
.card-content {
  padding: .5rem;
}
</style>


