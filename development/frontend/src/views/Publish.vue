<template>
  <div class ="publish">
    <publish-data/>
  </div>
</template>

<script>
import Vue from 'vue';
import PublishData from '@/components/PublishData.vue';

export default Vue.extend ({
  name: 'publish',
  components: {
    PublishData,
  },
});
</script>
