<template>
  <div class="container">
    <div class="field">
      <label for="title" class="label">Titel</label>
      <input type="text" name="title" id="title" class="input" v-model="title">
    </div>
    <div class="field">
      <label for="category" class="label">Category</label>
      <div class="select">
        <select v-model="categoryId">
          <option v-for="category in categories" v-bind:key="category.id" v-bind:value="category.id">
            {{ category.label }}
          </option>
        </select>
      </div>
    </div>
    <div class="field">
      <label for="price" class="label">Pris</label>
      <input type="number" name="price" id="price" class="input" v-model="price">
    </div>
    <div class="field">
      <label for="price" class="label">Beskrivning</label>
      <div class="control is-normal">
        <textarea class="textarea" rows="5" v-model="description"></textarea>
      </div>
    </div>
    <div class="field">
      <label for="image-upload" class="label">Bild</label>
      <div class="file">
        <label class="file-label">
          <input class="file-input" accept="image/*" type="file" name="image-upload" @change="uploadImage($event)" >
          <span class="file-cta">
            <span class="file-label">Ändra bild</span>
          </span>
        </label>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <button class="button is-light" v-on:click="cancel">Avbryt</button>
      </p>
      <p class="control">
        <a class="button is-info" v-if="!formIsValid" disabled>Spara</a>
        <a class="button is-info" v-on:click="saveClicked" v-else>Spara</a>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import router from '../router';
import { uploadImage as uploadImgToServer } from '../services/backend/uploadImage';
export default Vue.extend ({
  props: {
    currentListing: Object,
    categories: Array
  },

  data() {
    return {
      title: this.currentListing.title,
      price: this.currentListing.price,
      description: this.currentListing.description,
      categoryId: this.currentListing.category.id,
      imgURL: this.currentListing.imgURL
    };
  },

  computed: {
    formIsValid() {
      return this.title !== '' &&
        this.description !== '' &&
        this.imageUrl !== '' &&
        this.categoryId !== '';
    }
  },

  methods: {
    saveClicked() {
      const { title, description, price, imgURL, categoryId } = this;
      const data = {
        title,
        description,
        price,
        imgURL,
        categoryId
      };
      this.$emit('update', data);
    },

    cancel() {
      router. go(-1);
    },

    uploadImage(event) {
      uploadImgToServer(event.target.files[0])
        .then((imgUrl) => {
          this.imgURL = imgUrl;
        });
    }

  }

});
</script>
