<template>
  <div class="box">
      <article class="media">
        <div class="media-left">
            <figure class="image is-64x64">
              <img :src="imgURL" alt="Placeholder image">
            </figure>
          </div>
        <div class="media-content">
            <div class="content">
              <p class="title is-5">{{ title }}</p>
              <p class="subtitle is-6">{{ price }}:-</p>
            </div>
        </div>
      </article>
  </div>
</template>

<style scoped>
.box{margin-bottom: 1rem}
</style>


<script lang="ts">
import Vue from 'vue';
export interface ProductCardType {
  title: string;
  price: number;
  imgUrl: string;
}
export default Vue.extend({
  name: 'SearchResultItem',
  props: {
    title: String,
    price: Number,
    imgURL: String
  }
});
</script>


