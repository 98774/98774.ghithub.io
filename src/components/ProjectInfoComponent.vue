<template>
  <div class="project-info">
    <h1>{{ projectTitle }}</h1>
    <div class="summary">
      <slot name="summary"></slot>
      <a v-if="githubLink" href="githubLink" target="_blank" rel="noopener noreferrer"
        >GitHub Repository</a
      >
    </div>
    <div class="content-panel">
      <slot name="detailed-description"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProjectInfoComponent',
  props: {
    projectTitle: String,
    githubLink: String
  }
})
</script>

<style scoped>
.project-info {
  max-width: var(--content-max-width);
}

/* Add more styling based on your design preferences */
</style>
