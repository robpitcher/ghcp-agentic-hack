<script setup lang="ts">
import { onSlideEnter } from "@slidev/client";
import { ref } from "vue";

defineProps<{
  label: string;
}>();

const replayKey = ref(0);
onSlideEnter(() => {
  replayKey.value += 1;
});
</script>

<template>
  <div
    :key="replayKey"
    class="native-animation-stage"
    role="img"
    :aria-label="label"
  >
    <slot />
  </div>
</template>

<style scoped>
.native-animation-stage {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  color: #24292f;
  background: #f6f8fa;
  font-family: "Mona Sans", Inter, sans-serif;
}
</style>
