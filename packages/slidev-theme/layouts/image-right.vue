<template>
  <div class="slidev-layout ghcp-image-right">
    <div class="ghcp-image-right__title">
      <slot name="title" />
    </div>
    <div class="ghcp-image-right__content">
      <slot />
    </div>
    <div class="ghcp-image-right__image">
      <slot name="image" />
    </div>
  </div>
</template>

<style scoped>
.ghcp-image-right {
  display: grid;
  grid-template-areas:
    "title title"
    "content image";
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  grid-template-rows: auto minmax(0, 1fr);
  gap: 3rem;
  height: 100%;
  padding: 1.75rem 2.75rem;
  align-items: center;
  color: #0d1117;
  background: #ffffff;
}

.ghcp-image-right__title {
  grid-area: title;
  min-height: 0;
}

.ghcp-image-right__title :deep(h1) {
  margin: 0;
  color: #0d1117;
  font-size: 2.9rem;
  font-weight: 770;
  line-height: 1.02;
  letter-spacing: -0.035em;
}

.ghcp-image-right__content {
  grid-area: content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.65rem;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  padding: 2rem;
  border: 1px solid #d0d7de;
  border-radius: 14px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0 18px 34px rgb(31 35 40 / 5%);
}

.ghcp-image-right__content :deep(h2) {
  margin: 0 0 0.35rem;
  color: #1f2328;
  font-size: 1.35rem;
  line-height: 1.15;
}

.ghcp-image-right__content :deep(p) {
  margin: 0.15rem 0 0.2rem;
  color: #57606a;
  font-size: 1.1rem;
  line-height: 1.4;
}

.ghcp-image-right__content :deep(ul) {
  margin: 0.25rem 0 0;
  padding-left: 1.35rem;
  list-style: disc outside !important;
}

.ghcp-image-right__content :deep(li) {
  margin: 0.35rem 0;
  color: #0d1117;
  font-size: 1.08rem;
  line-height: 1.35;
  list-style: disc outside !important;
}

.ghcp-image-right__content :deep(li::marker) {
  color: #57606a;
  font-size: 0.95em;
}

.ghcp-image-right__content :deep(strong) {
  color: #0d1117;
}

.ghcp-image-right__image {
  grid-area: image;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid #d0d7de;
  border-radius: 14px;
  background: #f6f8fa;
  box-shadow: 0 18px 34px rgb(31 35 40 / 8%);
}

.ghcp-image-right__image :deep(img),
.ghcp-image-right__image :deep(video) {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.ghcp-image-right :deep(.ghcp-callout) {
  margin-top: 0.35rem;
  padding: 0.7rem 0.9rem;
  border: 1px solid #d0d7de;
  border-left: 4px solid #0969da;
  border-radius: 0.65rem;
  color: #1f2328;
  background: #f6f8fa;
  font-size: 0.83rem;
  line-height: 1.3;
}

.ghcp-image-right :deep(.ghcp-safety) {
  border-left-color: #9a6700;
  background: #fff8c5;
}

.ghcp-image-right :deep(.ghcp-optimization) {
  border-left-color: #1f883d;
  background: #dafbe1;
}
</style>
