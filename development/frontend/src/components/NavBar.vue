<template>
<span>
  <nav class="navbar" role="navigation" aria-label="main navigation" style="background-color: #efefef90">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
        v-on:click="menu"
        style="margin-left: 0"> <!-- not great but no left-adjusted burgers in bulma -->
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <!-- <a class="navbar-item" href=""> -->
        <router-link to="/home" class="navbar-item">
          <img src="../assets/otrade512.png" width="28" height="28">
        </router-link>
        <div class="navbar-item">
          <router-link to="/search" class="button">
            <i class="material-icons">search</i>
          </router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <router-link to="/publish" class="button">
              <i class="material-icons">add</i>
            </router-link>
            <router-link to="/profile" class="button">
              <i class="material-icons">account_box</i>
            </router-link>
          </div>
        </div>
       </div>
  </nav>
  <div v-if="isClicked" style="position: fixed;z-index: 1;background-color: ##33333399;width: 100%;height: 100%">
  <div style="position: fixed;z-index: 2;background-color: #f5f5f5;height: 100%;width: 50%">
    <category-list-data/>
  </div>
  </div>
</span>
</template>
<script>
import Vue from "vue";
import CategoryListData from '@/components/CategoryListData.vue';

export default Vue.extend ({
  components: {
    CategoryListData
  },
  data: function() {
    return {
      isClicked: false
    }
  },
  methods: {
    menu() {
      this.isClicked = !this.isClicked;
    }
  }
});
</script>
