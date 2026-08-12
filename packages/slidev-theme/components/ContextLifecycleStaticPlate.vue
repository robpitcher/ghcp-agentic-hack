<template>
  <NativeAnimationStage
    label="Twelve-second context-lifecycle sequence showing active-context categories, stale evidence obscuring focus before capacity is full, deliberate pruning and archiving, and human re-anchoring and validation"
  >
    <div class="context-stage">
      <img
        class="context-stage__plate"
        src="/images/context-lifecycle-static-plate.png"
        alt=""
        aria-hidden="true"
      />

      <div class="context-stage__steps" aria-hidden="true">
        <span>1 Notice stale clutter</span>
        <span>2 Prune + archive</span>
        <span>3 Re-anchor + validate</span>
      </div>

      <div class="context-stage__phase context-stage__phase--one">
        Active context combines instructions, history, evidence, requests, and tool results
      </div>
      <div class="context-stage__phase context-stage__phase--two">
        Context-rot risk: focus is degrading before capacity is full
      </div>
      <div class="context-stage__phase context-stage__phase--three">
        Focused context is maintained by deliberate human decisions
      </div>

      <div class="context-stage__labels">
        <span class="label label--host">Host/system instructions</span>
        <span class="label label--repo">Repository instructions</span>
        <span class="label label--history">Conversation history</span>
        <span class="label label--request">Current request</span>
        <span class="label label--evidence">Selected evidence/files</span>
        <span class="label label--tools">Tool results</span>
        <span class="label label--headroom">Reserved output headroom</span>
      </div>

      <svg class="context-stage__knot" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M8 72 C25 10 65 92 92 27" />
        <path d="M13 30 C39 94 57 5 90 67" />
      </svg>
      <div class="context-stage__warning">Stale + duplicate evidence obscures the current request</div>

      <div class="context-stage__prune">Prune irrelevant or duplicate evidence</div>
      <div class="context-stage__archive">Case Closed<br /><small>Old history preserved</small></div>

      <div class="context-stage__chain">
        <span>Current objective</span><i>→</i>
        <span>Essential evidence</span><i>→</i>
        <span>Constraints</span><i>→</i>
        <span>Validation</span>
      </div>

      <div class="context-stage__gauge">
        <span>Usage: clear → dense</span>
        <span>Focus: clear → obscured</span>
      </div>

      <footer>
        Active-context composition and capacity vary by harness and product. This conceptual board
        does not expose hidden model state.
      </footer>
    </div>
  </NativeAnimationStage>
</template>

<style scoped>
.context-stage {
  position: absolute;
  inset: 0;
  overflow: hidden;
  color: #1f2328;
  font-size: 10px;
}

.context-stage__plate {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.context-stage__phase {
  position: absolute;
  z-index: 5;
  top: 0.35rem;
  left: 50%;
  min-width: 38rem;
  padding: 0.35rem 0.8rem;
  border: 1px solid #d0d7de;
  border-radius: 999px;
  background: rgb(255 255 255 / 94%);
  box-shadow: 0 4px 12px rgb(31 35 40 / 12%);
  font-size: 14px;
  font-weight: 750;
  text-align: center;
  opacity: 0;
  transform: translateX(-50%);
}

.context-stage__phase--one {
  animation: phase-window 4s linear forwards;
}

.context-stage__phase--two {
  animation: phase-window 4s 4s linear forwards;
}

.context-stage__phase--three {
  animation: phase-hold 4s 8s linear forwards;
}

.label {
  position: absolute;
  z-index: 2;
  padding: 0.18rem 0.32rem;
  border: 1px solid #8c959f;
  border-radius: 0.35rem;
  background: rgb(255 255 255 / 93%);
  box-shadow: 0 2px 7px rgb(31 35 40 / 12%);
  font-weight: 700;
  line-height: 1.1;
  opacity: 0;
  animation: label-in 0.45s cubic-bezier(.2, .8, .2, 1) forwards;
}

.label--host { top: 22%; left: 36%; }
.label--repo { top: 22%; left: 51%; animation-delay: .35s; }
.label--history { top: 40%; left: 36%; animation-delay: .7s; }
.label--request { top: 40%; left: 51%; border-color: #1f883d; color: #1a7f37; animation-delay: 1.05s; }
.label--evidence { top: 64%; left: 36%; animation-delay: 1.4s; }
.label--tools { top: 64%; left: 51%; animation-delay: 1.75s; }
.label--headroom { top: 19%; left: 65%; border-style: dashed; color: #0550ae; animation-delay: 2.1s; }

.label--host,
.label--repo {
  font-size: 9px;
}

.context-stage__knot {
  position: absolute;
  z-index: 3;
  top: 32%;
  left: 44%;
  width: 17%;
  height: 26%;
  overflow: visible;
  opacity: 0;
  animation: knot-window 4s 2.2s linear forwards;
}

.context-stage__knot path {
  fill: none;
  stroke: #cf222e;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-dasharray: 180;
  stroke-dashoffset: 180;
  animation: draw-knot 1.4s 2.2s linear forwards;
}

.context-stage__warning {
  position: absolute;
  z-index: 4;
  top: 54%;
  left: 43%;
  width: 25%;
  padding: 0.3rem 0.5rem;
  border-left: 5px solid #bf8700;
  border-radius: 0.35rem;
  color: #7d4e00;
  background: rgb(255 248 197 / 95%);
  font-weight: 750;
  text-align: center;
  opacity: 0;
  animation: warning-window 4s 4s linear forwards;
}

.context-stage__prune,
.context-stage__archive {
  position: absolute;
  z-index: 4;
  padding: 0.28rem 0.45rem;
  border: 1px solid #8c959f;
  border-radius: 0.4rem;
  background: rgb(255 255 255 / 94%);
  box-shadow: 0 3px 8px rgb(31 35 40 / 12%);
  font-weight: 750;
  line-height: 1.15;
  text-align: center;
  opacity: 0;
}

.context-stage__prune {
  left: 38%;
  bottom: 8%;
  animation: prune-route 2s 6s cubic-bezier(.2, .8, .2, 1) forwards;
}

.context-stage__archive {
  right: 19%;
  bottom: 8%;
  border-color: #8250df;
  color: #6e40c9;
  animation: archive-route 2s 6s cubic-bezier(.2, .8, .2, 1) forwards;
}

.context-stage__archive small {
  color: #57606a;
  font-weight: 600;
}

.context-stage__chain {
  position: absolute;
  z-index: 4;
  top: 47%;
  left: 37%;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  width: 43%;
  opacity: 0;
  animation: chain-in 1.3s 8.6s cubic-bezier(.2, .8, .2, 1) forwards;
}

.context-stage__chain span {
  flex: 1;
  padding: 0.28rem 0.25rem;
  border: 1px solid #1f883d;
  border-radius: 0.35rem;
  color: #1a7f37;
  background: rgb(255 255 255 / 94%);
  font-weight: 750;
  line-height: 1.1;
  text-align: center;
}

.context-stage__chain i {
  color: #1f883d;
  font-size: 1rem;
  font-style: normal;
  font-weight: 800;
}

.context-stage__gauge {
  position: absolute;
  z-index: 3;
  top: 27%;
  right: 2%;
  display: grid;
  gap: 0.35rem;
  width: 17%;
}

.context-stage__gauge span {
  padding: 0.28rem 0.35rem;
  border: 1px solid #8c959f;
  border-radius: 0.35rem;
  background: rgb(255 255 255 / 92%);
  font-weight: 700;
  opacity: 0;
  animation: reveal 0.45s 1.8s linear forwards;
}

.context-stage__gauge span:last-child {
  animation: focus-gauge 8s 3.6s linear forwards;
}

.context-stage footer {
  position: absolute;
  z-index: 5;
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

.context-stage__steps {
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

@keyframes label-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: none; }
}

@keyframes knot-window {
  0%, 93% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes draw-knot {
  to { stroke-dashoffset: 0; }
}

@keyframes warning-window {
  0%, 92% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes prune-route {
  from { opacity: 0; transform: translate(4rem, -8rem); }
  to { opacity: 1; transform: none; }
}

@keyframes archive-route {
  from { opacity: 0; transform: translate(-8rem, -7rem); }
  to { opacity: 1; transform: none; }
}

@keyframes chain-in {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: none; }
}

@keyframes reveal {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes focus-gauge {
  0% { opacity: 0; color: #1a7f37; }
  8%, 28% { opacity: 1; color: #1a7f37; }
  48%, 63% { opacity: 1; color: #cf222e; }
  82%, 100% { opacity: 1; color: #1a7f37; }
}

@media (prefers-reduced-motion: reduce) {
  .context-stage * {
    animation: none !important;
    transition: none !important;
  }

  .context-stage__phase,
  .context-stage__knot,
  .context-stage__warning {
    display: none;
  }

  .context-stage__steps {
    position: absolute;
    z-index: 6;
    top: 0.35rem;
    left: 50%;
    display: flex;
    gap: 0.5rem;
    width: max-content;
    transform: translateX(-50%);
  }

  .context-stage__steps span {
    padding: 0.28rem 0.55rem;
    border: 1px solid #d0d7de;
    border-radius: 999px;
    background: rgb(255 255 255 / 95%);
    font-weight: 750;
  }

  .label,
  .context-stage__prune,
  .context-stage__archive,
  .context-stage__chain,
  .context-stage__gauge span {
    opacity: 1;
    transform: none;
  }

  .context-stage__gauge span:last-child {
    color: #1a7f37;
  }
}
</style>
