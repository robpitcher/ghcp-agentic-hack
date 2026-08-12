<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string
    poster?: string
    label: string
    autoplay?: boolean
    loop?: boolean
    controls?: boolean
    muted?: boolean
    fit?: 'contain' | 'cover'
  }>(),
  {
    autoplay: true,
    loop: true,
    controls: false,
    muted: true,
    fit: 'contain',
  },
)
</script>

<template>
  <div class="workshop-video">
    <video
      class="workshop-video__media"
      :class="`workshop-video__media--${fit}`"
      :src="src"
      :poster="poster"
      :aria-label="label"
      :autoplay="autoplay"
      :loop="loop"
      :controls="controls"
      :muted="muted"
      playsinline
      preload="metadata"
    >
      {{ label }}
    </video>
  </div>
</template>

<style scoped>
.workshop-video {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #ffffff;
}

.workshop-video__media {
  display: block;
  width: 100%;
  height: 100%;
}

.workshop-video__media--contain {
  object-fit: contain;
}

.workshop-video__media--cover {
  object-fit: cover;
}
</style>