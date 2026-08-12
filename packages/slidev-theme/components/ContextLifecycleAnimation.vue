<template>
  <NativeAnimationStage
    label="Twelve-second context lifecycle showing selective packing, drift before capacity is full, blocked execution, human-invoked host recovery, re-anchoring, and independent verification"
  >
    <div class="context-scene">
      <div class="reduced-steps" aria-hidden="true">
        <span>1 Pack selectively</span><span>2 Detect drift</span><span>3 Block and recover in host</span><span>4 Re-anchor and verify</span>
      </div>
      <div class="teaching teaching--pack">Fixed bounded capacity — pack the smallest useful scope</div>
      <div class="teaching teaching--drift">Stale contradiction → observable drift before capacity is full</div>
      <div class="teaching teaching--anchor">Re-anchor the objective, current evidence, constraints, and validation</div>
      <div class="teaching teaching--verify">Independently verify the recovered result</div>

      <div class="host-frame">
        <strong>Product host boundary</strong>
        <div class="context-chamber old">
          <span class="objective">Objective</span>
          <span class="evidence current one">current reference</span>
          <span class="evidence current two">constraint</span>
          <span class="evidence current three">validation</span>
          <span class="evidence stale">stale contradiction</span>
          <span class="unused">unused capacity</span>
          <span class="headroom">Reserved output headroom</span>
          <svg viewBox="0 0 600 180" aria-hidden="true">
            <path class="execution-path" d="M90 98 C220 92 300 88 410 82" />
            <path class="drift-path" d="M90 98 C220 92 300 145 410 150" />
          </svg>
          <span class="probe">proposed execution</span>
          <span class="block-gate">Execution blocked: active context is not trustworthy</span>
        </div>

        <button class="recovery-control" type="button" tabindex="-1">
          Human-invoked host action: reset, compact, or start fresh when supported
        </button>

        <div class="history-capsule">History: stale context preserved, not active</div>

        <div class="context-chamber fresh">
          <span class="objective">Objective</span>
          <span class="evidence current one">current reference</span>
          <span class="evidence current two">constraint</span>
          <span class="evidence current three">validation</span>
          <span class="result">recovered result</span>
          <span class="unused">unused capacity</span>
          <span class="headroom">Reserved output headroom</span>
          <span class="verification-orbit">Independently verified</span>
        </div>
      </div>

      <footer>
        <span>Capacity varies by model and product support; this diagram does not expose hidden state</span>
        <span class="rot-note">“Context rot” is the workshop’s diagnosis, not a universal product feature name</span>
        <span class="recovery-note">Recovery behavior and commands are host-specific; no automatic recovery is implied</span>
      </footer>
    </div>
  </NativeAnimationStage>
</template>

<style scoped>
.context-scene { position: absolute; inset: 0; font-size: 11px; }
.teaching { position: absolute; inset: .3rem 1rem auto; text-align: center; font-size: 17px; font-weight: 750; opacity: 0; }
.teaching--pack { animation: show-window 4s linear forwards; }.teaching--drift { animation: show-window 4s 4s linear forwards; }.teaching--anchor { animation: show-window 1.4s 9s linear forwards; }.teaching--verify { animation: show-hold 1.6s 10.4s linear forwards; }
.host-frame { position: absolute; inset: 3.2rem 2rem 3.5rem; padding: 1.4rem 1rem .8rem; border: 3px solid #24292f; border-radius: 1rem; background: #fff; }
.host-frame > strong { position: absolute; top: .2rem; left: 1rem; }
.context-chamber { position: absolute; top: 2.2rem; left: 12%; width: 72%; height: 50%; overflow: hidden; border: 3px solid #0969da; border-radius: .8rem; background: #f6f8fa; }
.headroom { position: absolute; inset: 0 0 0 auto; display: grid; place-items: center; width: 28%; padding: .3rem; border-left: 2px dashed #0969da; color: #0550ae; background: repeating-linear-gradient(135deg,#ddf4ff,#ddf4ff 7px,#fff 7px,#fff 14px); text-align: center; font-weight: 700; }
.unused { position: absolute; top: .25rem; right: 30%; color: #57606a; }
.objective { position: absolute; top: 44%; left: 31%; z-index: 2; padding: .2rem .3rem .2rem 2.1rem; color: #1f883d; background: #fff; font-weight: 800; }
.objective::before { position: absolute; top: 50%; left: .2rem; z-index: -1; width: 1.45rem; height: 1.45rem; content: ""; background: #1f883d; transform: translateY(-50%) rotate(45deg); }
.evidence { position: absolute; left: 4%; padding: .25rem .4rem; border-radius: .35rem; background: #ddf4ff; opacity: 0; animation: pack .7s cubic-bezier(.2,.8,.2,1) both; }
.evidence.one { top: 14%; animation-delay: .8s; }.evidence.two { top: 40%; animation-delay: 1.25s; }.evidence.three { top: 66%; animation-delay: 1.7s; }
.evidence.stale { top: 67%; left: 28%; color: #57606a; background: #d0d7de; animation-delay: 2s; }
.old .stale { animation: stale-conflict 1.2s 4s linear both; }
.context-chamber svg { position: absolute; inset: 0; width: 72%; height: 100%; }
.execution-path, .drift-path { fill: none; stroke-width: 5; stroke-linecap: round; stroke-dasharray: 500; stroke-dashoffset: 500; }
.execution-path { stroke: #8250df; animation: draw-path 1.8s 2.2s linear both; }
.drift-path { stroke: #cf222e; animation: draw-path 1.4s 5.2s linear both; }
.probe { position: absolute; left: 12%; bottom: 12%; color: #6e40c9; font-weight: 700; animation: probe-drift 4.4s 2.2s cubic-bezier(.2,.8,.2,1) both; }
.block-gate { position: absolute; right: 27%; bottom: 5%; padding: .4rem; border-left: 7px solid #bf8700; color: #7d4e00; background: #fff8c5; opacity: 0; animation: reveal .4s 6.6s linear both; }
.recovery-control { position: absolute; right: 1rem; bottom: .4rem; width: 43%; min-height: 2.3rem; padding: .3rem .45rem; border: 2px solid #24292f; border-radius: .5rem; color: #24292f; background: #fff; font: inherit; font-size: 9px; font-weight: 700; opacity: 0; animation: activate .8s 8s linear both; }
.history-capsule { position: absolute; left: 1rem; bottom: .4rem; width: 43%; min-height: 2.3rem; padding: .4rem; border: 2px solid #8c959f; border-radius: 999px; color: #57606a; text-align: center; opacity: 0; animation: reveal .6s 8.4s linear both; }
.fresh { opacity: 0; animation: swap-chamber .8s 8.6s cubic-bezier(.2,.8,.2,1) both; }
.fresh .evidence { opacity: 0; animation: pack .5s 9s cubic-bezier(.2,.8,.2,1) both; }
.fresh .two { animation-delay: 9.35s; }.fresh .three { animation-delay: 9.7s; }
.result { position: absolute; top: 44%; left: 55%; padding: .35rem .5rem; border-radius: .4rem; color: #fff; background: #0969da; opacity: 0; animation: reveal .5s 10.4s linear both; }
.verification-orbit { position: absolute; top: 17%; left: 28%; display: grid; place-items: start center; width: 43%; height: 70%; padding-top: .05rem; border: 4px solid #1f883d; border-radius: 50%; color: #1f883d; font-size: 8px; font-weight: 800; opacity: 0; animation: orbit .6s 11.4s linear both; }
footer { position: absolute; inset: auto 1rem .35rem; display: grid; color: #57606a; font-size: 9px; text-align: center; }
.rot-note { opacity: 0; animation: show-window 4s 4s linear forwards; }.recovery-note { opacity: 0; animation: show-hold 4s 8s linear forwards; }
.reduced-steps { display: none; }
@keyframes pack { from { opacity:0; transform:translateX(-45px); } to { opacity:1; transform:none; } }
@keyframes stale-conflict { 0% { opacity:1; color:#57606a; background:#d0d7de; } 100% { opacity:1; color:#fff; background:#cf222e; } }
@keyframes draw-path { to { stroke-dashoffset:0; } }
@keyframes probe-drift { 0% { transform:translate(0,0); } 42% { transform:translate(190px,-45px); } 100% { transform:translate(300px,16px); color:#8c959f; } }
@keyframes reveal { from { opacity:0; } to { opacity:1; } }
@keyframes activate { from { opacity:0; background:#fff; } to { opacity:1; border-color:#1f883d; background:#dafbe1; } }
@keyframes swap-chamber { from { opacity:0; transform:scale(.94); } to { opacity:1; transform:none; } }
@keyframes orbit { from { opacity:0; transform:rotate(-90deg) scale(.8); border-color:#d0d7de; } to { opacity:1; transform:none; border-color:#1f883d; } }
@keyframes show-window { 0%,99% { opacity:1 } 100% { opacity:0 } }
@keyframes show-hold { from { opacity:1 } to { opacity:1 } }
@media (prefers-reduced-motion: reduce) {
  .context-scene * { animation: none !important; transition: none !important; }
  .teaching, .old { display:none; }
  .reduced-steps { position:absolute; inset:.3rem 1rem auto; display:flex; justify-content:space-around; font-size:12px; font-weight:750; }
  .fresh, .fresh .evidence, .result, .verification-orbit, .recovery-control, .history-capsule { opacity:1; transform:none; }
  .rot-note { opacity:0; }.recovery-note { opacity:1; }
}
</style>
