<template>
  <div class="card">
    <div class="card-image">
      <figure class=" image-is-square" >
        <img :src="productCardDetail.imgURL" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
         <p class="title is-2 has-text-centered" >{{ productCardDetail.title }}</p>
         <p class="subtitle is-3 has-text-centered">{{ productCardDetail.price }}:-</p>
         </div>
      </div>
      <div class="content">{{ productCardDetail.description }}</div>
      <div class="container">
        <div class="subtitle-is6 has-text-weight-bold"> {{ productCardDetail.seller }}</div>
        <a class="subtitle-is6 is-italic">{{ productCardDetail.email }}</a>
        <div class="subtitle-is6"> {{ productCardDetail.phone }}</div>
      </div>
      <div class="subtitle-is7 has-text-grey-light">Publicerad {{productCardDetail.date}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export interface ProductCardType {
  title: string;
  price: number;
  imgUrl: string;
  description: string;
  seller: string;
  email: string;
  phone: string;
  date: string;
}
export default Vue.extend({
  name: 'ProductCardDetail',
  props: {
    title: String,
    price: Number,
    imgURL: String,
    description: String,
    seller: String,
    email: String,
    phone: String,
    date: String,
  },
});
</script>

