<template>
  <div>
    <BioComponent />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BioComponent from '@/components/BioComponent.vue' // Adjust the path based on your project structure

export default defineComponent({
  name: 'AboutView',
  components: {
    BioComponent
  }
})
</script>

<style scoped></style>
