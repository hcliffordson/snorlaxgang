<template>
  <div class="container">
    <div class="field">
      <label for="title" class="label">Titel</label>
      <input type="text" name="title" id="title" class="input" v-model="title">
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
            <span class="file-label">Ladda upp bild</span>
          </span>
        </label>
      </div>
      <p v-if="imageUrl != ''">Uploaded Successfully</p>
    </div>
    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <button class="button is-light" v-on:click="cancel">Avbryt</button>
      </p>
      <p class="control">
        <a class="button is-primary" v-if="imageUrl == ''" disabled>Spara</a>
        <a class="button is-primary" v-on:click="submit" v-else>Spara</a>
      </p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { uploadImage as uploadImgToServer } from '../services/backend/uploadImage';
import router from '../router';

export default Vue.extend({
  data() {
    return {
      title: '',
      description: '',
      price: 0,
      imageUrl: ''
    };
  },
  methods: {
    submit() {
      const { title, description, price, imageUrl } = this;
      const data = {
        title,
        description,
        price,
        imageUrl
      };
      this.$emit('submit', data);
    },
    cancel() {
      router.go(-1);
    },
    uploadImage(event) {
      uploadImgToServer(event.target.files[0])
        .then((imgUrl) => {
          this.imageUrl = imgUrl;
        });
    }
  }
});
</script>

