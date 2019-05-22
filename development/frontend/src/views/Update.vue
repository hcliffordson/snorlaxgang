<template>
<section class="section">
  <update-listing-data :listingId="$route.params.id" />
</section>

</template>

<script>

import Vue from 'vue';
import UpdateListingData from '@/components/UpdateListingData.vue';

export default Vue.extend ({
  components: {
    UpdateListingData
  }

});
</script>

