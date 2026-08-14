<template>
  <NativeAnimationStage
    label="Seven labeled context inputs move from the harness and product context through the illustrated model boundary, then hold in a complete final state"
  >
    <div class="handoff">
      <img
        class="handoff__plate"
        src="/images/token-input-handoff.png"
        alt=""
        aria-hidden="true"
      />
      <div class="handoff__boundary handoff__boundary--harness">
        Harness / product context
      </div>
      <div class="handoff__boundary handoff__boundary--model">
        Model boundary
      </div>
      <div class="handoff__items">
        <span style="--i: 0; --y: 8%">System prompt / harness instructions</span>
        <span style="--i: 1; --y: 20%">User prompt</span>
        <span style="--i: 2; --y: 32%">Repository instructions</span>
        <span style="--i: 3; --y: 44%">Selected files / selection</span>
        <span style="--i: 4; --y: 56%">Conversation history</span>
        <span style="--i: 5; --y: 68%">Tool results</span>
        <span style="--i: 6; --y: 80%">Cached context (when supported)</span>
      </div>
      <footer>
        The harness/product supplies these inputs; this is not visibility into hidden model internals.
      </footer>
    </div>
  </NativeAnimationStage>
</template>

<style scoped>
.handoff {
  position: absolute;
  inset: 0;
  overflow: hidden;
  color: #1f2328;
}

.handoff__plate {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.handoff__boundary {
  position: absolute;
  z-index: 3;
  top: 3%;
  padding: 0.25rem 0.48rem;
  border-radius: 999px;
  background: rgb(255 255 255 / 94%);
  box-shadow: 0 3px 10px rgb(31 35 40 / 14%);
  font-size: 10px;
  font-weight: 750;
}

.handoff__boundary--harness {
  left: 42%;
  border: 1px solid #1f883d;
  color: #1a7f37;
}

.handoff__boundary--model {
  right: 3%;
  border: 1px solid #8250df;
  color: #6e40c9;
}

.handoff__items {
  position: absolute;
  z-index: 4;
  inset: 10% 2% 12%;
}

.handoff__items span {
  position: absolute;
  top: var(--y);
  left: 44%;
  width: 18%;
  padding: 0.24rem 0.34rem;
  border: 1px solid #8250df;
  border-left: 4px solid #1f883d;
  border-radius: 0.42rem;
  color: #24292f;
  background: rgb(255 255 255 / 96%);
  box-shadow: 0 4px 10px rgb(31 35 40 / 16%);
  font-size: 9px;
  font-weight: 720;
  line-height: 1.12;
  opacity: 0;
  animation: context-handoff 2.4s calc(var(--i) * 0.82s) cubic-bezier(.2, .75, .2, 1) forwards;
}

.handoff footer {
  position: absolute;
  z-index: 5;
  right: 2%;
  bottom: 2%;
  left: 34%;
  padding: 0.28rem 0.5rem;
  border-radius: 0.4rem;
  color: #57606a;
  background: rgb(255 255 255 / 95%);
  font-size: 8px;
  font-weight: 650;
  line-height: 1.2;
  text-align: center;
}

@keyframes context-handoff {
  0% {
    left: 44%;
    opacity: 0;
    transform: translateX(-16px) scale(.96);
  }
  16% {
    opacity: 1;
  }
  62% {
    left: 70%;
    opacity: 1;
    transform: none;
  }
  100% {
    left: 80%;
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .handoff__items span {
    left: 80%;
    opacity: 1;
    transform: none;
    animation: none;
  }
}
</style>
