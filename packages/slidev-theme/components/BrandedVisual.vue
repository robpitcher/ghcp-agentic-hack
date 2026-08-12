<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
}>()
</script>

<template>
  <div class="branded-visual">
    <img :src="src" :alt="alt" class="branded-visual__image" />
  </div>
</template>

<style scoped>
.branded-visual {
  position: relative;
  width: 100%;
  height: 100%;
}

.branded-visual__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>
