<template>
  <div class="slidev-layout ghcp-video-full">
    <slot />
  </div>
</template>

<style scoped>
.ghcp-video-full {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem 2.75rem;
  align-items: stretch;
  justify-content: flex-start;
  gap: 1rem;
  color: #0d1117;
  background: #ffffff;
}

.ghcp-video-full :deep(img),
.ghcp-video-full :deep(video) {
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border: 1px solid #d0d7de;
  border-radius: 14px;
  background: #f6f8fa;
  box-shadow: 0 18px 34px rgb(31 35 40 / 8%);
}

.ghcp-video-full :deep(h1) {
  margin: 0;
  color: #0d1117;
  font-size: 2.1rem;
  font-weight: 750;
  line-height: 1.08;
  letter-spacing: -0.03em;
}

.ghcp-video-full :deep(p),
.ghcp-video-full :deep(li) {
  color: #57606a;
  font-size: 0.98rem;
  line-height: 1.35;
}
</style>
