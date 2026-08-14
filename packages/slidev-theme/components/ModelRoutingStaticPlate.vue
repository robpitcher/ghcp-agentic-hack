<template>
  <NativeAnimationStage
    label="Twelve-second model-routing sequence: compose task and context, compare result and usage evidence, then make a human choice about the next route"
  >
    <div class="routing-stage">
      <img
        class="routing-stage__plate"
        src="/images/model-routing-static-plate.png"
        alt=""
        aria-hidden="true"
      />

      <div class="routing-stage__path">
        <section class="routing-stage__step routing-stage__step--one">
          <b>1</b>
          <strong>Compose task + context</strong>
          <span>Harness instructions · repository context · user task</span>
        </section>
        <i aria-hidden="true">→</i>
        <section class="routing-stage__step routing-stage__step--two">
          <b>2</b>
          <strong>Compare result + usage evidence</strong>
          <span>Quality · latency · fresh / cached / output usage</span>
        </section>
        <i aria-hidden="true">→</i>
        <section class="routing-stage__step routing-stage__step--three">
          <b>3</b>
          <strong>Human chooses the next route</strong>
          <span>Task fit · availability · cost</span>
        </section>
      </div>

      <footer>
        Cache is conditional: unchanged-prefix stability and provider, model, product, and harness
        support determine whether reuse is available; a cache hit is not guaranteed.
      </footer>
    </div>
  </NativeAnimationStage>
</template>

<style scoped>
.routing-stage {
  position: absolute;
  inset: 0;
  overflow: hidden;
  color: #1f2328;
  font-size: 12px;
}

.routing-stage__plate {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.routing-stage__path {
  position: absolute;
  z-index: 3;
  right: 3%;
  bottom: 13%;
  left: 22%;
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: center;
  gap: 0.42rem;
}

.routing-stage__path > i {
  color: #57606a;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  opacity: 0;
  animation: reveal 0.35s 3.5s forwards;
}

.routing-stage__path > i:nth-of-type(2) {
  animation-delay: 7.5s;
}

.routing-stage__step {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.2rem 0.38rem;
  min-height: 4.2rem;
  padding: 0.55rem;
  border: 1px solid #d0d7de;
  border-radius: 0.72rem;
  background: rgb(255 255 255 / 95%);
  box-shadow: 0 5px 14px rgb(31 35 40 / 14%);
  opacity: 0;
}

.routing-stage__step b {
  grid-row: 1 / 3;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 1.45rem;
  height: 1.45rem;
  border-radius: 50%;
  color: #fff;
  background: #1f883d;
}

.routing-stage__step strong {
  font-size: 12px;
  line-height: 1.15;
}

.routing-stage__step span {
  color: #57606a;
  font-size: 9px;
  font-weight: 650;
  line-height: 1.2;
}

.routing-stage__step--one {
  animation: step-in 0.7s .35s forwards;
}

.routing-stage__step--two {
  animation: step-in 0.7s 4.2s forwards;
}

.routing-stage__step--three {
  border-color: #1f883d;
  animation:
    step-in 0.7s 8.2s forwards,
    final-state-hold 3.1s 8.9s forwards;
}

.routing-stage footer {
  position: absolute;
  z-index: 4;
  right: 1.25rem;
  bottom: 0.35rem;
  left: 1.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.35rem;
  color: #57606a;
  background: rgb(255 255 255 / 94%);
  font-size: 9px;
  line-height: 1.2;
  text-align: center;
}

@keyframes reveal {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes step-in {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: none; }
}

@keyframes final-state-hold {
  from,
  to {
    opacity: 1;
    transform: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .routing-stage * {
    animation: none !important;
    transition: none !important;
  }

  .routing-stage__step,
  .routing-stage__path > i {
    opacity: 1;
    transform: none;
  }
}
</style>
