<template>
  <NativeAnimationStage
    label="Twelve-second conceptual token accounting flow from selected evidence through measured usage and model-specific rates to a verified human routing decision"
  >
    <div class="token-scene">
      <div class="reduced-steps" aria-hidden="true">
        <span>1 Select evidence</span><span>2 Measure with model rates</span><span>3 Human verifies the next route</span>
      </div>

      <div class="teaching teaching--select">Select only the evidence this task needs</div>
      <div class="teaching teaching--input">Conceptual usage: input + cached (when applicable)</div>
      <div class="teaching teaching--output">Output usage joins the measured interaction</div>
      <div class="teaching teaching--measure">Measured usage × model-specific rates → AI credits</div>
      <div class="teaching teaching--verify">Compare observed usage, result quality, latency, policy, and availability</div>

      <section class="evidence-zone" aria-label="Selected evidence">
        <strong>Supplied evidence</strong>
        <div class="evidence-rack">
          <span class="tile selected"></span><span class="tile"></span><span class="tile selected"></span>
          <span class="tile selected"></span><span class="tile"></span>
        </div>
        <div class="selection-label">Selected scope</div>
        <div class="packet" aria-label="Bounded request packet">Bounded request</div>
      </section>

      <div class="model-boundary" aria-label="Conceptual model boundary">
        <span>Conceptual model boundary</span>
      </div>

      <section class="ledger-zone" aria-label="Measured usage ledger">
        <strong>Measured usage</strong>
        <div class="usage-row input"><span>Input</span><i></i><i></i><i></i></div>
        <div class="usage-row cached"><span>Cached, when applicable</span><i></i><i></i></div>
        <div class="usage-row output"><span>Output</span><i></i><i></i><i></i></div>
        <div class="rate-card">
          <strong>Selected route: Auto</strong>
          <span>Apply the selected model's source-verified input, cached, and output rates</span>
        </div>
        <div class="credit-result">
          <strong>1 AI credit = $0.01 USD</strong>
          <span>Measured usage × model-specific rates</span>
        </div>
      </section>

      <section class="verification-zone" aria-label="Observed evidence and routing verification">
        <div class="observed">
          <strong>Observed evidence</strong>
          <span>usage</span><span>quality</span><span>latency</span><span>policy + availability</span>
        </div>
        <div class="verification-ring"><span>Verified</span></div>
        <div class="route-control">
          <strong>Human decision</strong>
          <span class="chosen">Keep this route</span>
          <span>Change the next bounded attempt</span>
        </div>
      </section>

      <footer>
        <span>Conceptual accounting blocks — not exact tokenizer boundaries or hidden reasoning</span>
        <span>Plan, product, billing scope, policy, and availability may affect treatment</span>
      </footer>
    </div>
  </NativeAnimationStage>
</template>

<style scoped>
.token-scene { position: absolute; inset: 0; font-size: 12px; }
.teaching { position: absolute; inset: 0.3rem 1rem auto; text-align: center; font-size: 17px; font-weight: 750; opacity: 0; }
.teaching--select { animation: show-window 2.2s linear forwards; }
.teaching--input { animation: show-window 1.8s 2.2s linear forwards; }
.teaching--output { animation: show-window 1.4s 4s linear forwards; }
.teaching--measure { animation: show-window 2.6s 5.4s linear forwards; }
.teaching--verify { animation: show-hold 4s 8s linear forwards; }
.evidence-zone, .ledger-zone, .verification-zone { position: absolute; top: 4rem; bottom: 3rem; }
.evidence-zone { left: 2%; width: 25%; }
.ledger-zone { left: 39%; width: 31%; }
.verification-zone { right: 2%; width: 25%; }
section > strong { display: block; margin-bottom: 0.2rem; font-size: 14px; }
.evidence-rack { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.35rem; }
.tile { height: 1.8rem; border: 2px solid #8c959f; border-radius: 0.45rem; background: #d0d7de; }
.tile:nth-child(2), .tile:nth-child(4) { height: 2.25rem; }
.tile.selected { border-color: #1f883d; background: #dafbe1; animation: select-tile 1s cubic-bezier(.2,.8,.2,1) both; }
.selection-label { margin: 0.55rem 0; color: #1f883d; font-weight: 700; }
.packet { padding: 0.55rem; border: 2px solid #24292f; border-radius: 999px; background: #fff; text-align: center; animation: packet-move 2.2s 1s cubic-bezier(.2,.8,.2,1) both; }
.model-boundary { position: absolute; top: 4.4rem; bottom: 3.8rem; left: 31%; width: 6%; border-right: 5px double #8250df; }
.model-boundary span { position: absolute; top: 44%; left: -1rem; width: 7rem; color: #6e40c9; font-weight: 700; text-align: center; transform: rotate(-90deg); }
.usage-row { display: grid; grid-template-columns: 7rem repeat(3, 1fr); gap: 0.18rem; align-items: center; margin: 0.14rem 0; padding: 0.14rem 0.2rem; border: 1px solid #d0d7de; border-radius: 0.45rem; background: #fff; font-size: 9px; opacity: 0; animation: reveal-up .5s cubic-bezier(.2,.8,.2,1) both; }
.usage-row i { height: 0.65rem; border-radius: 999px; }
.usage-row.input { animation-delay: 2.2s; }.usage-row.input i { background: #1f883d; }
.usage-row.cached { animation-delay: 2.6s; }.usage-row.cached i { background: #8250df; }.usage-row.cached i:last-child { display: none; }
.usage-row.output { animation-delay: 4s; }.usage-row.output i { background: #0969da; }
.rate-card, .credit-result { margin-top: 0.18rem; padding: 0.2rem 0.35rem; border-radius: 0.55rem; background: #fff; font-size: 9px; line-height: 1.1; opacity: 0; animation: reveal-up .6s 6.8s cubic-bezier(.2,.8,.2,1) both; }
.rate-card { border: 2px solid #bf8700; }.rate-card span, .credit-result span { display: block; margin-top: .1rem; color: #57606a; font-size: 8px; line-height: 1.15; }
.credit-result { border: 2px solid #1f883d; animation-delay: 7.2s; }
.observed { display: grid; grid-template-columns: 1fr 1fr; gap: .18rem; font-size: 9px; opacity: 0; animation: reveal-up .6s 8s cubic-bezier(.2,.8,.2,1) both; }
.observed strong { grid-column: 1 / -1; }.observed span { padding: .2rem; border-radius: .35rem; color: #0550ae; background: #ddf4ff; text-align: center; }
.verification-ring { width: 3.8rem; height: 3.8rem; margin: .3rem auto; border: 4px solid #1f883d; border-radius: 50%; display: grid; place-items: center; opacity: 0; animation: ring-trace 1.2s 9.4s linear both; }
.verification-ring span { font-weight: 800; color: #1f883d; }
.route-control { display: grid; gap: .15rem; font-size: 9px; opacity: 0; animation: reveal-up .5s 10.6s cubic-bezier(.2,.8,.2,1) both; }
.route-control span { padding: .2rem; border: 1px solid #8c959f; border-radius: 999px; text-align: center; }
.route-control .chosen { border-color: #1f883d; color: #1f883d; background: #dafbe1; font-weight: 700; }
footer { position: absolute; inset: auto 1rem .12rem; display: grid; color: #57606a; font-size: 7px; line-height: 1.1; text-align: center; }
.reduced-steps { display: none; }
@keyframes select-tile { from { transform: translateY(8px); opacity: .45; } to { transform: none; opacity: 1; } }
@keyframes packet-move { 0% { opacity: 0; transform: translateX(-35px); } 55% { opacity: 1; transform: none; } 100% { opacity: 1; transform: translateX(42px); } }
@keyframes reveal-up { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
@keyframes ring-trace { from { opacity: 0; transform: rotate(-90deg) scale(.85); border-color: #d0d7de; } to { opacity: 1; transform: none; border-color: #1f883d; } }
@keyframes show-window { 0%,99% { opacity:1 } 100% { opacity:0 } }
@keyframes show-hold { from { opacity:1 } to { opacity:1 } }
@media (prefers-reduced-motion: reduce) {
  .token-scene * { animation: none !important; transition: none !important; }
  .usage-row, .rate-card, .credit-result, .observed, .verification-ring, .route-control { opacity: 1; transform: none; }
  .packet { transform: translateX(42px); }
  .teaching { display: none; }
  .reduced-steps { position: absolute; inset: .3rem 1rem auto; display: flex; justify-content: space-around; font-size: 14px; font-weight: 750; }
}
</style>
