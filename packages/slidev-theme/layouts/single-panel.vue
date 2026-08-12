<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const contentPanel = ref<HTMLElement>();
let resizeObserver: ResizeObserver | undefined;
let mutationObserver: MutationObserver | undefined;
let animationFrame: number | undefined;

function scheduleContentFit() {
  if (animationFrame !== undefined) return;
  animationFrame = requestAnimationFrame(() => {
    animationFrame = undefined;
    fitContent();
  });
}

function fitContent() {
  const panel = contentPanel.value;
  if (!panel) return;

  panel.style.setProperty("--ghcp-content-scale", "1");
  if (!overflows(panel)) return;

  let fittingScale = 0.68;
  let overflowingScale = 1;
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const scale = (fittingScale + overflowingScale) / 2;
    panel.style.setProperty("--ghcp-content-scale", scale.toFixed(3));
    if (overflows(panel)) overflowingScale = scale;
    else fittingScale = scale;
  }
  panel.style.setProperty("--ghcp-content-scale", fittingScale.toFixed(3));
}

function overflows(panel: HTMLElement) {
  return panel.scrollHeight > panel.clientHeight + 1 || panel.scrollWidth > panel.clientWidth + 1;
}

onMounted(async () => {
  await nextTick();
  resizeObserver = new ResizeObserver(scheduleContentFit);
  resizeObserver.observe(contentPanel.value!);
  mutationObserver = new MutationObserver(scheduleContentFit);
  mutationObserver.observe(contentPanel.value!, {
    childList: true,
    characterData: true,
    subtree: true
  });
  scheduleContentFit();
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  mutationObserver?.disconnect();
  if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
});
</script>

<template>
  <div class="slidev-layout ghcp-single-panel">
    <div class="ghcp-single-panel__title">
      <slot name="title" />
    </div>
    <section ref="contentPanel" class="ghcp-single-panel__content">
      <slot name="content">
        <slot />
      </slot>
    </section>
  </div>
</template>

<style scoped>
.ghcp-single-panel {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 1.5rem;
  height: 100%;
  padding: 3rem 3.5rem;
  color: #0d1117;
  background: #ffffff;
}

.ghcp-single-panel__title {
  min-height: 0;
}

.ghcp-single-panel__title :deep(h1) {
  margin: 0;
  color: #0d1117;
  font-size: 3rem;
  font-weight: 770;
  line-height: 1.02;
  letter-spacing: -0.035em;
}

.ghcp-single-panel__content {
  --ghcp-content-scale: 1;
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  padding: 1.5rem 1.75rem;
  border: 1px solid #d0d7de;
  border-radius: 1rem;
  color: #0d1117;
  background: #ffffff;
  box-shadow: 0 18px 34px rgb(31 35 40 / 8%);
}

.ghcp-single-panel__content :deep(h2) {
  margin: 0 0 0.6rem;
  color: #1f2328;
  font-size: calc(1.55rem * var(--ghcp-content-scale));
  line-height: 1.15;
}

.ghcp-single-panel__content :deep(p),
.ghcp-single-panel__content :deep(li) {
  color: #24292f;
  font-size: calc(1.08rem * var(--ghcp-content-scale));
  line-height: 1.35;
}

.ghcp-single-panel__content :deep(table) {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border: 1px solid #d0d7de;
  border-radius: 0.75rem;
  font-size: calc(0.92rem * var(--ghcp-content-scale));
  line-height: 1.25;
}

.ghcp-single-panel__content :deep(th),
.ghcp-single-panel__content :deep(td) {
  padding: calc(0.55rem * var(--ghcp-content-scale)) calc(0.7rem * var(--ghcp-content-scale));
  border-right: 1px solid #d0d7de;
  border-bottom: 1px solid #d0d7de;
  vertical-align: top;
  text-align: left;
}

.ghcp-single-panel__content :deep(th) {
  color: #1f2328;
  background: #f6f8fa;
  font-weight: 700;
}

.ghcp-single-panel__content :deep(tr:last-child td) {
  border-bottom: 0;
}

.ghcp-single-panel__content :deep(th:last-child),
.ghcp-single-panel__content :deep(td:last-child) {
  border-right: 0;
}

.ghcp-single-panel__content :deep(img),
.ghcp-single-panel__content :deep(video),
.ghcp-single-panel__content :deep(.branded-visual),
.ghcp-single-panel__content :deep(.workshop-video) {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.ghcp-single-panel__content :deep(.ghcp-callout) {
  margin-top: 0.65rem;
  padding: 0.75rem 1rem;
  border: 1px solid #d0d7de;
  border-left: 4px solid #0969da;
  border-radius: 0.65rem;
  color: #1f2328;
  background: #f6f8fa;
  font-size: calc(0.9rem * var(--ghcp-content-scale));
  line-height: 1.3;
}
</style>
