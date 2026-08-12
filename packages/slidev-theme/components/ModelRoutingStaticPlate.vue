<template>
  <NativeAnimationStage
    label="Twelve-second model-routing sequence showing two composed requests, conditional cached input, separate qualitative usage bands, compared response evidence, and a human route decision"
  >
    <div class="routing-stage">
      <img
        class="routing-stage__plate"
        src="/images/model-routing-static-plate.png"
        alt=""
        aria-hidden="true"
      />

      <div class="routing-stage__steps" aria-hidden="true">
        <span>1 Compose Turn 1</span>
        <span>2 Reuse eligible prefix + add Turn 2</span>
        <span>3 Compare evidence and choose</span>
      </div>

      <div class="routing-stage__phase routing-stage__phase--one">Turn 1: compose the request</div>
      <div class="routing-stage__phase routing-stage__phase--two">
        Turn 2: cached input (when available) + fresh input → response
      </div>
      <div class="routing-stage__phase routing-stage__phase--three">
        Compare result evidence + observed usage
      </div>

      <div class="routing-stage__components">
        <span>Host/system instructions</span>
        <span><code>copilot-instructions.md</code> or repository instructions</span>
        <span>Selected context/files + tool results</span>
        <span>User request 1</span>
      </div>

      <div class="routing-stage__cache">
        Harness-managed cache: eligible unchanged prefix
      </div>
      <div class="routing-stage__request-two">User request 2</div>

      <div class="routing-stage__usage routing-stage__usage--fresh">
        <strong>Fresh input</strong><i></i>
      </div>
      <div class="routing-stage__usage routing-stage__usage--cached">
        <strong>Cached input</strong><i></i>
      </div>
      <div class="routing-stage__usage routing-stage__usage--output">
        <strong>Output</strong><i></i>
      </div>

      <div class="routing-stage__response routing-stage__response--one">Response 1</div>
      <div class="routing-stage__response routing-stage__response--two">Response 2</div>
      <div class="routing-stage__evidence">Compare result evidence + observed usage</div>
      <div class="routing-stage__choice">Human chooses the next model route</div>

      <footer>
        Conceptual usage—not exact token boundaries. Cache depends on unchanged-prefix stability and
        provider, model, product, and harness support; a cache hit is not guaranteed.
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
  font-size: 10px;
}

.routing-stage__plate {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.routing-stage__phase {
  position: absolute;
  z-index: 3;
  top: 0.35rem;
  left: 50%;
  min-width: 33rem;
  padding: 0.35rem 0.8rem;
  border: 1px solid #d0d7de;
  border-radius: 999px;
  background: rgb(255 255 255 / 94%);
  box-shadow: 0 4px 12px rgb(31 35 40 / 12%);
  font-size: 15px;
  font-weight: 750;
  text-align: center;
  opacity: 0;
  transform: translateX(-50%);
}

.routing-stage__phase--one {
  animation: phase-window 4s linear forwards;
}

.routing-stage__phase--two {
  animation: phase-window 4s 4s linear forwards;
}

.routing-stage__phase--three {
  animation: phase-hold 4s 8s linear forwards;
}

.routing-stage__components {
  position: absolute;
  z-index: 2;
  top: 39%;
  left: 35%;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.25rem;
  width: 34%;
}

.routing-stage__components span,
.routing-stage__cache,
.routing-stage__request-two,
.routing-stage__response,
.routing-stage__evidence,
.routing-stage__choice {
  padding: 0.24rem 0.35rem;
  border: 1px solid #8c959f;
  border-radius: 0.4rem;
  background: rgb(255 255 255 / 94%);
  box-shadow: 0 3px 8px rgb(31 35 40 / 12%);
  font-weight: 700;
  line-height: 1.15;
  text-align: center;
}

.routing-stage__components span {
  opacity: 0;
  animation: component-window 4s linear forwards;
}

.routing-stage__components span:nth-child(2) {
  animation-delay: 0.35s;
}

.routing-stage__components span:nth-child(3) {
  animation-delay: 0.7s;
}

.routing-stage__components span:nth-child(4) {
  border-color: #1f883d;
  animation-delay: 1.05s;
}

.routing-stage__components code {
  color: inherit;
  font-size: 0.92em;
}

.routing-stage__cache {
  position: absolute;
  z-index: 2;
  top: 16%;
  left: 52%;
  width: 22%;
  border-color: #8250df;
  color: #6e40c9;
  opacity: 0;
  animation: reveal 0.45s 6s linear forwards;
}

.routing-stage__request-two {
  position: absolute;
  z-index: 2;
  top: 41%;
  left: 43%;
  border-color: #1f883d;
  color: #1a7f37;
  opacity: 0;
  animation: request-two 1s 6.4s cubic-bezier(.2, .8, .2, 1) forwards;
}

.routing-stage__usage {
  position: absolute;
  z-index: 2;
  top: 61%;
  width: 13%;
  padding: 0.25rem 0.4rem;
  border-radius: 0.45rem;
  background: rgb(255 255 255 / 91%);
  box-shadow: 0 3px 8px rgb(31 35 40 / 12%);
}

.routing-stage__usage strong {
  display: block;
  margin-bottom: 0.18rem;
}

.routing-stage__usage i {
  display: block;
  height: 0.45rem;
  border-radius: 999px;
  transform: scaleX(0);
  transform-origin: left;
}

.routing-stage__usage--fresh {
  left: 27%;
  color: #1a7f37;
}

.routing-stage__usage--fresh i {
  background: #1f883d;
  animation: band-turn-one 4s 2s cubic-bezier(.2, .8, .2, 1) forwards;
}

.routing-stage__usage--cached {
  left: 45%;
  color: #6e40c9;
}

.routing-stage__usage--cached i {
  border: 2px solid #8250df;
  animation: band-turn-two 1.2s 8s cubic-bezier(.2, .8, .2, 1) forwards;
}

.routing-stage__usage--output {
  left: 64%;
  color: #0969da;
}

.routing-stage__usage--output i {
  background: #0969da;
  animation: band-output 7s 4.2s cubic-bezier(.2, .8, .2, 1) forwards;
}

.routing-stage__response {
  position: absolute;
  z-index: 2;
  left: 49%;
  bottom: 18%;
  border-color: #0969da;
  color: #0550ae;
  opacity: 0;
}

.routing-stage__response--one {
  animation: response-one 0.8s 4.5s cubic-bezier(.2, .8, .2, 1) forwards;
}

.routing-stage__response--two {
  animation: response-two 0.8s 9.2s cubic-bezier(.2, .8, .2, 1) forwards;
}

.routing-stage__evidence {
  position: absolute;
  z-index: 3;
  left: 42%;
  bottom: 8%;
  width: 28%;
  border-color: #0969da;
  opacity: 0;
  animation: reveal 0.5s 10s linear forwards;
}

.routing-stage__choice {
  position: absolute;
  z-index: 3;
  right: 2%;
  bottom: 7%;
  width: 25%;
  border: 2px solid #1f883d;
  color: #1a7f37;
  opacity: 0;
  animation: choice-slide 1s 10s cubic-bezier(.2, .8, .2, 1) forwards;
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
  font-size: 8px;
  line-height: 1.2;
  text-align: center;
}

.routing-stage__steps {
  display: none;
}

@keyframes phase-window {
  0%, 92% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes phase-hold {
  from { opacity: 1; }
  to { opacity: 1; }
}

@keyframes component-window {
  0% { opacity: 0; transform: translateY(-14px); }
  12%, 86% { opacity: 1; transform: none; }
  100% { opacity: 0; transform: none; }
}

@keyframes reveal {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes request-two {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: none; }
}

@keyframes band-turn-one {
  0% { transform: scaleX(0); }
  35%, 100% { transform: scaleX(.68); }
}

@keyframes band-turn-two {
  from { transform: scaleX(0); }
  to { transform: scaleX(.72); }
}

@keyframes band-output {
  0%, 8% { transform: scaleX(0); }
  20%, 55% { transform: scaleX(.45); }
  70%, 100% { transform: scaleX(.82); }
}

@keyframes response-one {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateX(-2.8rem); }
}

@keyframes response-two {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateX(2.8rem); }
}

@keyframes choice-slide {
  from { opacity: 0; transform: translateX(35px); }
  to { opacity: 1; transform: none; }
}

@media (prefers-reduced-motion: reduce) {
  .routing-stage * {
    animation: none !important;
    transition: none !important;
  }

  .routing-stage__phase,
  .routing-stage__components,
  .routing-stage__request-two {
    display: none;
  }

  .routing-stage__steps {
    position: absolute;
    z-index: 4;
    top: 0.35rem;
    left: 50%;
    display: flex;
    gap: 0.5rem;
    width: max-content;
    transform: translateX(-50%);
  }

  .routing-stage__steps span {
    padding: 0.28rem 0.55rem;
    border: 1px solid #d0d7de;
    border-radius: 999px;
    background: rgb(255 255 255 / 95%);
    font-weight: 750;
  }

  .routing-stage__cache,
  .routing-stage__response,
  .routing-stage__evidence,
  .routing-stage__choice {
    opacity: 1;
    transform: none;
  }

  .routing-stage__usage i {
    transform: scaleX(.72);
  }

  .routing-stage__response--one {
    transform: translateX(-2.8rem);
  }

  .routing-stage__response--two {
    transform: translateX(2.8rem);
  }
}
</style>
