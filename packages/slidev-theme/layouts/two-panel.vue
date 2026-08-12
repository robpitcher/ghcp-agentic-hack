<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";

const textPanel = ref<HTMLElement>();
let resizeObserver: ResizeObserver | undefined;
let mutationObserver: MutationObserver | undefined;
let animationFrame: number | undefined;

function scheduleTextFit() {
  if (animationFrame !== undefined) return;
  animationFrame = requestAnimationFrame(() => {
    animationFrame = undefined;
    fitText();
  });
}

function fitText() {
  const panel = textPanel.value;
  if (!panel) return;

  panel.style.setProperty("--ghcp-panel-scale", "1");
  if (!overflows(panel)) return;

  let fittingScale = 0.72;
  let overflowingScale = 1;
  for (let attempt = 0; attempt < 8; attempt += 1) {
    const scale = (fittingScale + overflowingScale) / 2;
    panel.style.setProperty("--ghcp-panel-scale", scale.toFixed(3));
    if (overflows(panel)) overflowingScale = scale;
    else fittingScale = scale;
  }
  panel.style.setProperty("--ghcp-panel-scale", fittingScale.toFixed(3));
}

function overflows(panel: HTMLElement) {
  return panel.scrollHeight > panel.clientHeight + 1 || panel.scrollWidth > panel.clientWidth + 1;
}

onMounted(async () => {
  await nextTick();
  resizeObserver = new ResizeObserver(scheduleTextFit);
  resizeObserver.observe(textPanel.value!);
  mutationObserver = new MutationObserver(scheduleTextFit);
  mutationObserver.observe(textPanel.value!, {
    childList: true,
    characterData: true,
    subtree: true
  });
  scheduleTextFit();
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  mutationObserver?.disconnect();
  if (animationFrame !== undefined) cancelAnimationFrame(animationFrame);
});
</script>

<template>
  <div class="slidev-layout ghcp-two-panel">
    <div class="ghcp-two-panel__title">
      <slot name="title" />
    </div>
    <div class="ghcp-two-panel__panels">
      <section ref="textPanel" class="ghcp-two-panel__text">
        <slot name="text" />
      </section>
      <section class="ghcp-two-panel__visual">
        <slot name="visual" />
      </section>
    </div>
  </div>
</template>

<style scoped>
.ghcp-two-panel {
  display: grid;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 2rem;
  height: 100%;
  padding: 3rem 3.5rem;
  color: #0d1117;
  background: #ffffff;
}

.ghcp-two-panel__title {
  min-height: 0;
}

.ghcp-two-panel__title :deep(h1) {
  margin: 0;
  color: #0d1117;
  font-size: 3rem;
  font-weight: 770;
  line-height: 1.02;
  letter-spacing: -0.035em;
}

.ghcp-two-panel__panels {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 3rem;
  min-height: 0;
}

.ghcp-two-panel__text,
.ghcp-two-panel__visual {
  min-width: 0;
  min-height: 0;
  overflow: hidden;
  border: 1px solid #d0d7de;
  border-radius: 1rem;
  background: #ffffff;
}

.ghcp-two-panel__text {
  --ghcp-panel-scale: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.65rem;
  padding: 2rem;
}

.ghcp-two-panel__text :deep(h2) {
  margin: 0 0 0.35rem;
  color: #1f2328;
  font-size: calc(1.5rem * var(--ghcp-panel-scale));
  line-height: 1.15;
}

.ghcp-two-panel__text :deep(p) {
  margin: 0.15rem 0 0.2rem;
  color: #57606a;
  font-size: calc(1.2rem * var(--ghcp-panel-scale));
  line-height: 1.4;
}

.ghcp-two-panel__text :deep(ul) {
  margin: 0.25rem 0 0;
  padding-left: 1.4rem;
  list-style: disc outside !important;
}

.ghcp-two-panel__text :deep(li) {
  margin: 0.45rem 0;
  color: #0d1117;
  font-size: calc(1.15rem * var(--ghcp-panel-scale));
  line-height: 1.35;
  list-style: disc outside !important;
}

.ghcp-two-panel__text :deep(li::marker) {
  color: #57606a;
}

.ghcp-two-panel__text :deep(strong) {
  color: #0d1117;
}

.ghcp-two-panel__visual {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f8fa;
  box-shadow: 0 18px 34px rgb(31 35 40 / 8%);
}

.ghcp-two-panel__visual :deep(img),
.ghcp-two-panel__visual :deep(video) {
  display: block;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.ghcp-two-panel :deep(.ghcp-callout) {
  margin-top: 0.35rem;
  padding: 0.75rem 1rem;
  border: 1px solid #d0d7de;
  border-left: 4px solid #0969da;
  border-radius: 0.65rem;
  color: #1f2328;
  background: #f6f8fa;
  font-size: calc(0.9rem * var(--ghcp-panel-scale));
  line-height: 1.3;
}

.ghcp-two-panel :deep(.ghcp-safety) {
  border-left-color: #9a6700;
  background: #fff8c5;
}

.ghcp-two-panel :deep(.ghcp-optimization) {
  border-left-color: #1f883d;
  background: #dafbe1;
}
</style>
