<template>
  <div>
    <profile-page />
  </div>
</template>
<script>
import Vue from 'vue';
import ProfilePage from '@/components/ProfilePage.vue';


export default Vue.extend({
  name: 'profile',
  components: {
    ProfilePage
  },
});




</script>
