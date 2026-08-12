<script setup lang="ts">
defineProps<{
  conceptId: string
  title: string
  takeaway: string
  duration: 4 | 8 | 12
}>()
</script>

<template>
  <aside class="video-concept" :aria-label="`Planned video concept: ${title}`">
    <div class="video-concept__preview" aria-hidden="true">
      <span class="video-concept__play"></span>
    </div>
    <div class="video-concept__content">
      <div class="video-concept__meta">Video concept / {{ duration }}s / {{ conceptId }}</div>
      <h3>{{ title }}</h3>
      <p>{{ takeaway }}</p>
    </div>
  </aside>
</template>

<style scoped>
.video-concept {
  display: grid;
  grid-template-columns: minmax(8rem, 30%) 1fr;
  width: 100%;
  min-height: 10rem;
  overflow: hidden;
  border: 2px dashed #8c959f;
  border-radius: 8px;
  background: #f6f8fa;
  color: #24292f;
}

.video-concept__preview {
  display: grid;
  place-items: center;
  min-height: 10rem;
  border-right: 1px solid #d0d7de;
  background-color: #eaeef2;
  background-image: repeating-linear-gradient(
    135deg,
    transparent,
    transparent 14px,
    rgb(140 149 159 / 18%) 14px,
    rgb(140 149 159 / 18%) 28px
  );
}

.video-concept__play {
  width: 0;
  height: 0;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-left: 1.5rem solid #57606a;
}

.video-concept__content {
  align-self: center;
  padding: 1.25rem 1.5rem;
}

.video-concept__meta {
  margin-bottom: 0.5rem;
  color: #57606a;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}

.video-concept h3 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  line-height: 1.2;
}

.video-concept p {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.45;
}
</style>