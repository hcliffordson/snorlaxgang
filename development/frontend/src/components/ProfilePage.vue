<template>

    <section class="section">
      <div v-if="user">
        <h1>Välkommen till din profil {{user.firstName}} {{user.surname}}</h1>
      </div>
      <div v-else>
        <loading-bar></loading-bar>
      </div>
      <hr>
      <profile-page-data />
    </section>

</template>

<script lang="ts">
import Vue from 'vue';
import ProfilePageData from '@/components/ProfilePageData.vue';
import {GET_USER_QUERY} from '@/services/backend';
import gql from 'graphql-tag';
import LoadingBar from '@/components/LoadingBar.vue';

export default Vue.extend({
  name: 'ProfilePage',
  components: {
    ProfilePageData,
    LoadingBar,
  },
  props: {
    myListings: Array,
  },

  apollo: {
    user: {
      query: gql`${GET_USER_QUERY}`,
      update(data) {
        return data.getUser;
      }
    }
  }
});
</script>



