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
          <input class="file-input" type="file" name="image-upload">
          <span class="file-cta">
            <span class="file-label">Ladda upp bild</span>
          </span>
        </label>
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <button class="button is-light">Avbryt</button>
      </p>
      <p class="control">
        <button class="button is-primary" v-on:click="submit">Spara</button>
      </p>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';

export default Vue.extend({
  data: function() {
    return {
      title: '',
      description: '',
      price: 0
    }
  },
  methods: {
    submit: function() {
      const { title, description, price } = this;
      const data = {
        title,
        description,
        price
      }
      this.$emit('submit', data);
    }
  }
})
</script>

