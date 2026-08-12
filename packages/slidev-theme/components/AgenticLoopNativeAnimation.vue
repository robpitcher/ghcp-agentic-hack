<script setup lang="ts">
const stages = [
  { key: "understand", number: "01", label: "Understand", detail: "Brief + limits", x: 40 },
  { key: "plan", number: "02", label: "Plan", detail: "Bounded route", x: 300 },
  { key: "act", number: "03", label: "Act", detail: "Allowed action", x: 560 },
  { key: "observe", number: "04", label: "Observe", detail: "Visible result", x: 820 },
  { key: "adjust", number: "05", label: "Adjust", detail: "Choose next route", x: 1080 },
  { key: "verify", number: "06", label: "Verify", detail: "Human evidence gate", x: 1340 }
];

const outcomes = [
  { key: "retry", symbol: "↺", label: "Retry", detail: "Repeat bounded step", x: 350 },
  { key: "ask", symbol: "?", label: "Ask", detail: "Permission boundary", x: 585 },
  { key: "stop", symbol: "⊣", label: "Stop", detail: "End current work", x: 820 },
  { key: "recover", symbol: "↩", label: "Recover", detail: "Return to checkpoint", x: 1055 }
];
</script>

<template>
  <div class="agentic-loop-animation">
    <NativeAnimationStage
      label="Thirty-second fixed-camera agentic loop. Persistent stages are Understand, Plan, Act, Observe, Adjust, and Verify. Persistent outcomes are Retry, Ask, Stop, and Recover. Mergewell owns the brief, plan review, adjustment decision, and verification; Riley owns bounded action and observation; Purrmission only signals the consequential Ask boundary."
    >
      <div class="loop-scene">
        <svg
          viewBox="0 0 1600 650"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="agentic-loop-arrow"
              markerWidth="16"
              markerHeight="16"
              refX="14"
              refY="8"
              orient="auto"
              markerUnits="userSpaceOnUse"
            >
              <path d="M0 0 16 8 0 16Z" fill="context-stroke" />
            </marker>
            <pattern id="agentic-loop-hatch" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="12" height="12" fill="#fffdf8" />
              <rect width="4" height="12" fill="#f3f0ff" />
            </pattern>
          </defs>

          <g class="phase-banner">
            <rect x="250" y="12" width="1100" height="58" rx="29" />
            <text class="phase phase--understand" x="800" y="49">Understand · Mergewell frames the brief and limits</text>
            <text class="phase phase--plan" x="800" y="49">Plan · Mergewell reviews Riley’s bounded route</text>
            <text class="phase phase--act" x="800" y="49">Act · Riley performs one allowed action</text>
            <text class="phase phase--observe" x="800" y="49">Observe · Riley stops on a consequential result</text>
            <text class="phase phase--adjust" x="800" y="49">Ask / Adjust · Purrmission signals; Mergewell decides</text>
            <text class="phase phase--corrective" x="800" y="49">Corrective Act · Riley follows the narrowed route</text>
            <text class="phase phase--verify" x="800" y="49">Verify · Mergewell inspects returned evidence</text>
            <text class="phase phase--final" x="800" y="49">Full loop · Final state holds; acceptance is not implied</text>
          </g>

          <g class="base-route">
            <path d="M260 152H300" />
            <path d="M520 152H560" />
            <path d="M780 152H820" />
            <path d="M1040 152H1080" />
            <path d="M1300 152H1340" />
            <path class="return-route" d="M1560 152C1585 152 1585 264 1540 264H60C15 264 15 152 40 152" />
          </g>

          <g class="progress-route">
            <path class="progress progress--one" d="M260 152H300" />
            <path class="progress progress--two" d="M520 152H560" />
            <path class="progress progress--three" d="M780 152H820" />
            <path class="progress progress--four" d="M1040 152H1080" />
            <path class="progress progress--five" d="M1300 152H1340" />
            <path class="progress progress--loop" d="M1560 152C1585 152 1585 264 1540 264H60C15 264 15 152 40 152" />
          </g>

          <g
            v-for="stage in stages"
            :key="stage.key"
            class="station"
            :class="`station--${stage.key}`"
            :transform="`translate(${stage.x} 92)`"
          >
            <rect class="station-shell" width="220" height="120" rx="18" />
            <rect class="station-active" x="-5" y="-5" width="230" height="130" rx="22" />
            <circle class="station-number-disc" cx="31" cy="31" r="18" />
            <text class="station-number" x="31" y="38">{{ stage.number }}</text>
            <text class="station-label" x="110" y="69">{{ stage.label }}</text>
            <text class="station-detail" x="110" y="96">{{ stage.detail }}</text>
          </g>

          <g class="corrective-badge" transform="translate(616 105)">
            <rect width="160" height="28" rx="14" />
            <text x="80" y="19">2nd · Corrective Act</text>
            <rect class="corrective-badge-active" x="-3" y="-3" width="166" height="34" rx="17" />
          </g>

          <g class="outcome-lead">
            <path d="M1190 212V291H800" />
            <rect x="574" y="274" width="452" height="31" rx="15.5" />
            <text x="800" y="296">Observed evidence determines the next route</text>
          </g>

          <g
            v-for="outcome in outcomes"
            :key="outcome.key"
            class="outcome"
            :class="`outcome--${outcome.key}`"
            :transform="`translate(${outcome.x} 310)`"
          >
            <rect class="outcome-shell" width="210" height="68" rx="16" />
            <rect class="outcome-active" x="-5" y="-5" width="220" height="78" rx="20" />
            <text class="outcome-symbol" x="22" y="43">{{ outcome.symbol }}</text>
            <text class="outcome-label" x="52" y="31">{{ outcome.label }}</text>
            <text class="outcome-detail" x="52" y="53">{{ outcome.detail }}</text>
          </g>

          <path class="ask-corrective-path" d="M690 378V396H670V254" />

          <g class="work-token">
            <rect x="-57" y="-18" width="114" height="36" rx="18" />
            <text class="token-label token-label--work" y="7">work</text>
            <text class="token-label token-label--result" y="7">result !</text>
            <text class="token-label token-label--corrected" y="7">corrected</text>
            <text class="token-label token-label--evidence" y="7">evidence</text>
          </g>

          <g class="role-card role-card--mergewell" transform="translate(40 420)">
            <rect class="role-shell" width="480" height="132" rx="20" />
            <rect class="role-active" x="-5" y="-5" width="490" height="142" rx="24" />
            <g class="mergewell-marker" transform="translate(30 20)">
              <circle cx="42" cy="23" r="18" />
              <path d="M13 92 20 55Q42 38 64 55L72 92Z" />
              <path d="M27 55 42 73 57 55" />
              <rect x="35" y="74" width="14" height="14" rx="2" />
            </g>
            <text class="role-name" x="126" y="39">Mergewell</text>
            <text class="role-type" x="126" y="66">ACCOUNTABLE HUMAN</text>
            <text class="role-detail" x="126" y="98">Brief · plan review · adjust · verify</text>
          </g>

          <g class="role-card role-card--riley" transform="translate(560 420)">
            <rect class="role-shell" width="480" height="132" rx="20" />
            <rect class="role-active" x="-5" y="-5" width="490" height="142" rx="24" />
            <g class="riley-marker" transform="translate(30 19)">
              <path d="M42 5V17" />
              <circle cx="42" cy="4" r="4" />
              <rect x="13" y="17" width="58" height="48" rx="15" />
              <circle cx="31" cy="40" r="5" />
              <circle cx="53" cy="40" r="5" />
              <path d="M25 74H59M21 65 13 91M63 65 71 91M29 74 25 96M55 74 59 96" />
            </g>
            <text class="role-name" x="126" y="39">Riley</text>
            <text class="role-type" x="126" y="66">SOFTWARE COLLABORATOR</text>
            <text class="role-detail" x="126" y="98">Plan · bounded act · observe</text>
          </g>

          <g class="role-card role-card--purrmission" transform="translate(1080 420)">
            <rect class="role-shell" width="480" height="132" rx="20" />
            <rect class="role-active" x="-5" y="-5" width="490" height="142" rx="24" />
            <g class="purrmission-marker" transform="translate(28 23)">
              <path d="M18 28 24 5 39 19 56 5 63 29Q70 61 42 69Q13 61 18 28Z" />
              <circle cx="33" cy="37" r="3.5" />
              <circle cx="51" cy="37" r="3.5" />
              <path d="M42 43 38 48H46ZM62 57Q83 61 76 82" />
              <circle cx="42" cy="60" r="5" />
            </g>
            <text class="role-name" x="126" y="39">Purrmission</text>
            <text class="role-type" x="126" y="66">SAFETY SIGNAL</text>
            <text class="role-detail" x="126" y="98">Ask boundary only · never decides</text>
            <g class="signal-tab">
              <rect x="329" y="12" width="130" height="28" rx="14" />
              <text x="394" y="32">SIGNAL ONLY</text>
            </g>
          </g>

          <g class="evidence-callout">
            <rect x="40" y="586" width="1520" height="46" rx="14" />
            <text x="800" y="616">Inspect requests · outputs · diffs · logs · checks · decisions — not hidden reasoning</text>
          </g>
        </svg>
      </div>
    </NativeAnimationStage>

    <div class="visually-hidden">
      <p>The observable loop follows this reading order:</p>
      <ol>
        <li>Understand: Mergewell frames the brief and limits.</li>
        <li>Plan: Mergewell reviews Riley’s bounded route.</li>
        <li>Act: Riley performs one allowed action.</li>
        <li>Observe: Riley stops on a consequential result.</li>
        <li>Adjust: Purrmission signals the Ask boundary and Mergewell decides the route.</li>
        <li>Act, corrective pass: Riley follows the narrowed route.</li>
        <li>Verify: Mergewell inspects the returned evidence without implying acceptance.</li>
      </ol>
      <p>Adjustment outcomes remain available:</p>
      <ul>
        <li>Retry the bounded step.</li>
        <li>Ask at the permission boundary.</li>
        <li>Stop the current work.</li>
        <li>Recover to a verified checkpoint.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.agentic-loop-animation {
  width: 100%;
  height: 100%;
  min-height: 0;
}

.loop-scene {
  --duration: 30s;
  position: absolute;
  inset: 0;
  color: #24292f;
  background:
    radial-gradient(circle at 82% 15%, rgb(118 80 183 / 9%), transparent 30%),
    linear-gradient(155deg, #fffdf8, #f8f4ec);
}

.loop-scene svg {
  display: block;
  width: 100%;
  height: 100%;
}

.phase-banner rect {
  fill: #ffffff;
  stroke: #6e7781;
  stroke-width: 2;
}

.phase {
  opacity: 0;
  fill: #24292f;
  font-size: 25px;
  font-weight: 780;
  text-anchor: middle;
}

.phase--understand { animation: phase-understand var(--duration) linear forwards; }
.phase--plan { animation: phase-plan var(--duration) linear forwards; }
.phase--act { animation: phase-act var(--duration) linear forwards; }
.phase--observe { animation: phase-observe var(--duration) linear forwards; }
.phase--adjust { animation: phase-adjust var(--duration) linear forwards; }
.phase--corrective { animation: phase-corrective var(--duration) linear forwards; }
.phase--verify { animation: phase-verify var(--duration) linear forwards; }
.phase--final { animation: phase-final var(--duration) linear forwards; }

.base-route path,
.progress-route path,
.outcome-lead path,
.ask-corrective-path {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.base-route path {
  stroke: #8c959f;
  stroke-width: 5;
  marker-end: url("#agentic-loop-arrow");
}

.base-route .return-route {
  stroke-dasharray: 11 11;
  stroke-width: 4;
}

.progress {
  opacity: 0;
  stroke: #0969da;
  stroke-width: 9;
  marker-end: url("#agentic-loop-arrow");
}

.progress--one { animation: progress-one var(--duration) linear forwards; }
.progress--two { animation: progress-two var(--duration) linear forwards; }
.progress--three { animation: progress-three var(--duration) linear forwards; }
.progress--four { animation: progress-four var(--duration) linear forwards; }
.progress--five { animation: progress-five var(--duration) linear forwards; }
.progress--loop {
  stroke: #6e40c9;
  stroke-dasharray: 11 11;
  stroke-width: 5;
  animation: progress-loop var(--duration) linear forwards;
}

.station-shell {
  fill: #fffdf8;
  stroke: #57606a;
  stroke-width: 3;
}

.station-active {
  opacity: 0;
  fill: none;
  stroke: #0969da;
  stroke-width: 8;
  stroke-dasharray: 18 7;
}

.station--adjust .station-shell,
.station--verify .station-shell {
  fill: url("#agentic-loop-hatch");
}

.station--understand .station-active { animation: active-understand var(--duration) linear forwards; }
.station--plan .station-active { animation: active-plan var(--duration) linear forwards; }
.station--act .station-active { animation: active-act var(--duration) linear forwards; }
.station--observe .station-active { animation: active-observe var(--duration) linear forwards; }
.station--adjust .station-active { animation: active-adjust var(--duration) linear forwards; }
.station--verify .station-active {
  stroke: #6e40c9;
  animation: active-verify var(--duration) linear forwards;
}

.station-number-disc {
  fill: #24292f;
}

.station-number {
  fill: #ffffff;
  font-size: 18px;
  font-weight: 850;
  text-anchor: middle;
}

.station-label {
  fill: #24292f;
  font-size: 29px;
  font-weight: 820;
  text-anchor: middle;
}

.station-detail {
  fill: #57606a;
  font-size: 18px;
  font-weight: 650;
  text-anchor: middle;
}

.corrective-badge rect:first-child {
  fill: #f3f0ff;
  stroke: #6e40c9;
  stroke-width: 2;
}

.corrective-badge text {
  fill: #4c2889;
  font-size: 14px;
  font-weight: 780;
  text-anchor: middle;
}

.corrective-badge-active {
  opacity: 0;
  fill: none;
  stroke: #6e40c9;
  stroke-width: 4;
  stroke-dasharray: 10 5;
  animation: corrective-active var(--duration) linear forwards;
}

.outcome-lead path {
  stroke: #57606a;
  stroke-width: 3;
}

.outcome-lead rect {
  fill: #f6f8fa;
  stroke: #8c959f;
  stroke-width: 2;
}

.outcome-lead text {
  fill: #57606a;
  font-size: 17px;
  font-weight: 760;
  text-anchor: middle;
}

.outcome-shell {
  fill: #ffffff;
  stroke: #57606a;
  stroke-width: 3;
}

.outcome--stop .outcome-shell {
  stroke-width: 6;
}

.outcome--recover .outcome-shell {
  stroke-dasharray: 10 5;
}

.outcome-active {
  opacity: 0;
  fill: #fff8c5;
  fill-opacity: 0.72;
  stroke: #9a6700;
  stroke-width: 7;
  stroke-dasharray: 15 6;
}

.outcome--ask .outcome-active {
  animation: ask-active var(--duration) linear forwards;
}

.outcome-symbol {
  fill: #24292f;
  font-size: 30px;
  font-weight: 900;
}

.outcome-label {
  fill: #24292f;
  font-size: 22px;
  font-weight: 820;
}

.outcome-detail {
  fill: #57606a;
  font-size: 14px;
  font-weight: 650;
}

.ask-corrective-path {
  opacity: 0;
  stroke: #6e40c9;
  stroke-width: 5;
  stroke-dasharray: 12 7;
  marker-end: url("#agentic-loop-arrow");
  animation: corrective-active var(--duration) linear forwards;
}

.work-token {
  transform: translate(150px, 238px);
  animation: token-route var(--duration) linear forwards;
}

.work-token rect {
  fill: #ddf4ff;
  stroke: #0969da;
  stroke-width: 3;
}

.token-label {
  opacity: 0;
  fill: #0550ae;
  font-size: 16px;
  font-weight: 820;
  text-anchor: middle;
}

.token-label--work { animation: token-work var(--duration) linear forwards; }
.token-label--result { animation: token-result var(--duration) linear forwards; }
.token-label--corrected { animation: token-corrected var(--duration) linear forwards; }
.token-label--evidence { animation: token-evidence var(--duration) linear forwards; }

.role-shell {
  fill: #ffffff;
  stroke: #8c959f;
  stroke-width: 2;
}

.role-active {
  opacity: 0;
  fill: none;
  stroke: #0969da;
  stroke-width: 6;
  stroke-dasharray: 15 7;
}

.role-card--mergewell .role-active { animation: mergewell-active var(--duration) linear forwards; }
.role-card--riley .role-active { animation: riley-active var(--duration) linear forwards; }
.role-card--purrmission .role-active {
  stroke: #9a6700;
  animation: purrmission-active var(--duration) linear forwards;
}

.mergewell-marker,
.riley-marker,
.purrmission-marker {
  fill: #24292f;
  stroke: #24292f;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.mergewell-marker path:nth-of-type(2),
.mergewell-marker rect {
  fill: #fffdf8;
  stroke-width: 3;
}

.riley-marker circle:not(:first-of-type) {
  fill: #ddf4ff;
  stroke-width: 2;
}

.riley-marker rect {
  fill: #f3f0ff;
}

.purrmission-marker circle {
  fill: #fff8c5;
  stroke-width: 2;
}

.role-name {
  fill: #24292f;
  font-size: 29px;
  font-weight: 820;
}

.role-type {
  fill: #57606a;
  font-size: 16px;
  font-weight: 850;
  letter-spacing: 1.4px;
}

.role-detail {
  fill: #24292f;
  font-size: 18px;
  font-weight: 650;
}

.signal-tab {
  opacity: 0;
  animation: purrmission-active var(--duration) linear forwards;
}

.signal-tab rect {
  fill: #fff8c5;
  stroke: #9a6700;
  stroke-width: 2;
}

.signal-tab text {
  fill: #633c01;
  font-size: 13px;
  font-weight: 900;
  text-anchor: middle;
}

.evidence-callout rect {
  fill: #f6f8fa;
  stroke: #0969da;
  stroke-width: 3;
}

.evidence-callout text {
  fill: #24292f;
  font-size: 19px;
  font-weight: 720;
  text-anchor: middle;
}

.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

@keyframes phase-understand {
  0%, 13.333% { opacity: 1; }
  13.334%, 100% { opacity: 0; }
}

@keyframes phase-plan {
  0%, 13.333% { opacity: 0; }
  13.334%, 26.666% { opacity: 1; }
  26.667%, 100% { opacity: 0; }
}

@keyframes phase-act {
  0%, 26.666% { opacity: 0; }
  26.667%, 40% { opacity: 1; }
  40.001%, 100% { opacity: 0; }
}

@keyframes phase-observe {
  0%, 40% { opacity: 0; }
  40.001%, 53.333% { opacity: 1; }
  53.334%, 100% { opacity: 0; }
}

@keyframes phase-adjust {
  0%, 53.333% { opacity: 0; }
  53.334%, 66.666% { opacity: 1; }
  66.667%, 100% { opacity: 0; }
}

@keyframes phase-corrective {
  0%, 66.666% { opacity: 0; }
  66.667%, 80% { opacity: 1; }
  80.001%, 100% { opacity: 0; }
}

@keyframes phase-verify {
  0%, 80% { opacity: 0; }
  80.001%, 93.333% { opacity: 1; }
  93.334%, 100% { opacity: 0; }
}

@keyframes phase-final {
  0%, 93.333% { opacity: 0; }
  93.334%, 100% { opacity: 1; }
}

@keyframes active-understand {
  0%, 13.333% { opacity: 1; }
  13.334%, 100% { opacity: 0; }
}

@keyframes active-plan {
  0%, 13.333% { opacity: 0; }
  13.334%, 26.666% { opacity: 1; }
  26.667%, 100% { opacity: 0; }
}

@keyframes active-act {
  0%, 26.666% { opacity: 0; }
  26.667%, 40% { opacity: 1; }
  40.001%, 66.666% { opacity: 0; }
  66.667%, 80% { opacity: 1; }
  80.001%, 100% { opacity: 0; }
}

@keyframes active-observe {
  0%, 40% { opacity: 0; }
  40.001%, 53.333% { opacity: 1; }
  53.334%, 100% { opacity: 0; }
}

@keyframes active-adjust {
  0%, 53.333% { opacity: 0; }
  53.334%, 66.666% { opacity: 1; }
  66.667%, 100% { opacity: 0; }
}

@keyframes active-verify {
  0%, 80% { opacity: 0; }
  80.001%, 100% { opacity: 1; }
}

@keyframes ask-active {
  0%, 53.333% { opacity: 0; }
  53.334%, 66.666% { opacity: 1; }
  66.667%, 100% { opacity: 0; }
}

@keyframes corrective-active {
  0%, 66.666% { opacity: 0; }
  66.667%, 80% { opacity: 1; }
  80.001%, 100% { opacity: 0; }
}

@keyframes mergewell-active {
  0%, 26.666% { opacity: 1; }
  26.667%, 53.333% { opacity: 0; }
  53.334%, 66.666% { opacity: 1; }
  66.667%, 80% { opacity: 0; }
  80.001%, 100% { opacity: 1; }
}

@keyframes riley-active {
  0%, 13.333% { opacity: 0; }
  13.334%, 53.333% { opacity: 1; }
  53.334%, 66.666% { opacity: 0; }
  66.667%, 80% { opacity: 1; }
  80.001%, 100% { opacity: 0; }
}

@keyframes purrmission-active {
  0%, 53.333% { opacity: 0; }
  53.334%, 66.666% { opacity: 1; }
  66.667%, 100% { opacity: 0; }
}

@keyframes progress-one {
  0%, 13.333% { opacity: 0; }
  13.334%, 100% { opacity: 1; }
}

@keyframes progress-two {
  0%, 26.666% { opacity: 0; }
  26.667%, 100% { opacity: 1; }
}

@keyframes progress-three {
  0%, 40% { opacity: 0; }
  40.001%, 100% { opacity: 1; }
}

@keyframes progress-four {
  0%, 66.666% { opacity: 0; }
  66.667%, 100% { opacity: 1; }
}

@keyframes progress-five {
  0%, 80% { opacity: 0; }
  80.001%, 100% { opacity: 1; }
}

@keyframes progress-loop {
  0%, 93.333% { opacity: 0; }
  93.334%, 100% { opacity: 1; }
}

@keyframes token-route {
  0%, 11.5% { transform: translate(150px, 238px); }
  13.333%, 24.8% { transform: translate(410px, 238px); }
  26.666%, 37.8% { transform: translate(670px, 238px); }
  40%, 50.8% { transform: translate(930px, 238px); }
  53.333%, 63.8% { transform: translate(690px, 398px); }
  66.666%, 77.8% { transform: translate(670px, 238px); }
  80%, 100% { transform: translate(1450px, 238px); }
}

@keyframes token-work {
  0%, 39.999% { opacity: 1; }
  40%, 100% { opacity: 0; }
}

@keyframes token-result {
  0%, 39.999% { opacity: 0; }
  40%, 66.666% { opacity: 1; }
  66.667%, 100% { opacity: 0; }
}

@keyframes token-corrected {
  0%, 66.666% { opacity: 0; }
  66.667%, 79.999% { opacity: 1; }
  80%, 100% { opacity: 0; }
}

@keyframes token-evidence {
  0%, 79.999% { opacity: 0; }
  80%, 100% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .loop-scene *,
  .loop-scene *::before,
  .loop-scene *::after {
    animation: none !important;
    transition: none !important;
  }

  .phase,
  .station-active,
  .outcome-active,
  .corrective-badge-active,
  .ask-corrective-path,
  .role-active,
  .signal-tab,
  .token-label {
    opacity: 0;
  }

  .phase--final,
  .station--verify .station-active,
  .progress,
  .token-label--evidence,
  .role-card--mergewell .role-active {
    opacity: 1;
  }

  .work-token {
    transform: translate(1450px, 238px);
  }
}
</style>
