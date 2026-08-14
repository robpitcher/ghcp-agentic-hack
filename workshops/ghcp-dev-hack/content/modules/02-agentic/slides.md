---
theme: ghcp
title: "Module 2: Agentic Development — Workshop Guide"
layout: two-panel
transition: slide-left
mdc: true
class: agentic-slide agentic-priority-slide
---

::title::
# Module 2: Agentic Development — Workshop Guide
::text::

<div class="agentic-kicker">GitHub Copilot · Agentic development</div>

## Direct bounded software work. Inspect the evidence. Keep the decision human.

**2 hours · 75 min instruction + 45 min mission**

::visual::
<div class="agentic-static-stage" role="group" aria-label="Mergewell reviews a consequential request with Riley stopped beyond the boundary and Purrmission marking the stop line">
  <img src="/images/approval-boundary-human-decision.png" alt="Agent Mergewell reviews a consequential request while Riley Relay waits beyond the boundary and Purrmission marks the stop line">
</div>

<!--
Agentic Development moves from Foundations' bounded delegation into multi-step repository work where the human still owns the brief, boundaries, acceptance, and merge. Riley Relay represents the software-agent collaborator: she performs only delegated digital work, returns evidence, asks when blocked, and stops at stated boundaries. Purrmission appears only at the consequential permission or scope threshold; she does not replace Mergewell's decision or Riley's bounded-work role. Use this zero-minute opener to establish module identity and role hierarchy, not to teach literal product architecture. [Sources: module.md; visual-intent.md; agentic-content-verification.md AGT-12 and AGT-28; Agent Mergewell and Riley Relay character briefs.]
-->

---
layout: two-panel
class: agentic-agenda-slide
---

::title::
# Session Agenda
::text::

<div class="agentic-stack" role="list" aria-label="Seventy-five-minute instruction route">
  <div class="agentic-card" role="listitem"><b>1 · Who does what? — 15 min</b><span>Human accountability, bounded software work, reusable guidance, and tools</span></div>
  <div class="agentic-card" role="listitem"><b>2 · Prepare a job worth delegating — 20 min</b><span>Instructions, context, scope, checks, stops, and evidence</span></div>
  <div class="agentic-card" role="listitem"><b>3 · Choose and trust the helper — 20 min</b><span>Skills, custom agents, tool controls, planning, and approval boundaries</span></div>
  <div class="agentic-card" role="listitem"><b>4 · Stay in charge of the result — 20 min</b><span>Observable loops, repository and cloud evidence, optimization, and the human call</span></div>
</div>

::visual::
<div class="agentic-surface agentic-stack" role="region" aria-label="Separate forty-five-minute mission">
  <div class="agentic-kicker">Mission · 45 min</div>
  <div class="agentic-card agentic-green">
    <b>Hand off work with confidence</b>
    <span>Carry the Foundations case forward and return inspected evidence.</span>
  </div>
  <div class="agentic-callout agentic-safety"><b>Keep the mission time protected.</b><br>Detailed actions stay in the Missions experience.</div>
</div>

<!--
The route keeps the current instruction budget at 75 minutes: 15 minutes for role clarity, then three 20-minute sections for briefing, helper and control choices, and evidence-based decisions. The separate 45-minute mission follows instruction and carries the Foundations case file forward without moving detailed mission actions into the deck. This agenda adapts the Foundations timed-route pattern while using Agentic's approved section architecture and current topic sequence. Protect the mission timebox by shortening discussion rather than dropping required content. [Sources: module.md timing; copilot-dev-agentic-workshop.md “Instruction architecture”; slide-manifest.md; Foundations slide 2.]
-->

---
layout: two-panel
---

::title::
# Agentic Development
::text::

## Delegate the work—not the decision

The human defines the brief, boundaries, and acceptance. A software
collaborator plans, edits, uses allowed tools, and returns evidence.

<div class="agentic-callout"><b>Agent Mergewell is the human field agent.</b><br>He retains acceptance and merge authority.</div>

::visual::
<div class="agentic-static-stage" role="group" aria-label="A human briefs bounded work, Riley performs it, evidence returns, and the human accepts or rejects">
  <img src="/images/human-directed-operating-split.png" alt="Mergewell briefs Riley, who returns evidence to Mergewell for a human decision">
  <div class="agentic-static-overlay agentic-static-overlay--top">
    <div class="agentic-static-chip agentic-static-chip--green">Human brief</div>
    <div class="agentic-static-chip agentic-static-chip--purple">Delegated software work</div>
    <div class="agentic-static-chip">Returned evidence</div>
    <div class="agentic-static-chip agentic-static-chip--green">Human acceptance</div>
  </div>
</div>

<!--
The human defines the brief, boundaries, and acceptance before delegated work begins. A visibly separate software collaborator may plan, edit, use allowed tools, and return evidence within that brief. Agent Mergewell remains the accountable human field agent with final acceptance and merge authority. [Sources: module.md; visual-intent.md; AGT-12; AGT-28.]
-->

---
layout: two-panel
---

::title::
# Instructions for Agentic Work
::text::

## Put durable guidance where future work can find it

- Repository-wide rules: `.github/copilot-instructions.md`
- Path-specific rules: `.github/instructions/**/*.instructions.md`
- Agent-specific instructions: recurring role behavior
- Current task: goal, limits, checks, and stop points

::visual::
<div class="agentic-surface agentic-stack" role="img" aria-label="Instruction homes separated by scope">
  <div class="agentic-card"><b>Repository-wide</b><span>Shared conventions and validation</span></div>
  <div class="agentic-card"><b>Path-specific</b><span>Guidance for matching files</span></div>
  <div class="agentic-card agentic-purple"><b>Agent-specific</b><span>Recurring role instructions</span></div>
  <div class="agentic-card agentic-green"><b>Current task stays separate</b><span>What this job needs now</span></div>
</div>

<!--
GitHub documents repository-wide, path-specific, and agent instruction files, but support and combination rules vary by Copilot surface. Durable reviewed guidance belongs in the matching scope, while one-time task details remain in the current request. Developers should inspect reusable guidance before trusting it. [Sources: AGT-01; AGT-02; visual-intent.md.]
-->

---
layout: two-panel
---

::title::
# Memory and Its Limits
::text::

## Use remembered facts as clues—not as the whole brief

- Repository facts stay with one repository
- User preferences can follow the same user
- Supported experiences retrieve relevant entries selectively
- Supply the current goal, limits, and critical facts again

::visual::
<div class="agentic-grid agentic-grid--3" role="img" aria-label="Separate memory scopes and current task">
  <div class="agentic-card agentic-green"><b>Repository facts</b><span>One repository</span></div>
  <div class="agentic-card agentic-purple"><b>User preferences</b><span>Same user across repositories</span></div>
  <div class="agentic-card agentic-amber"><b>Current task</b><span>Supply explicitly</span></div>
</div>

<!--
GitHub Copilot Memory is a public-preview feature that stores repository facts and user preferences for limited supported consumers. It is selective, user-controlled, scoped, and retention-limited rather than permanent or complete. Reviewed instructions and explicit current task context remain authoritative inputs. [Sources: AGT-04; AGT-05.]
-->

---
layout: two-panel
---

::title::
# Context for Long-Running Work
::text::

## Carry forward what the next decision needs

- Goal and current repository state
- Reviewed decisions and open questions
- Relevant files and checks
- A focused handoff when the work changes direction

::visual::
<div class="agentic-grid" role="img" aria-label="Focused context contrasted with stale clutter">
  <div class="agentic-card agentic-green"><b>Focused context</b><span>Current facts · decisions · checks</span></div>
  <div class="agentic-card agentic-amber"><b>Too much context</b><span>Old logs · unrelated files · old mistakes</span></div>
</div>

<!--
Long-running work benefits from preserving the goal, current repository state, reviewed decisions, open questions, and checks. Copilot CLI has named context and compaction controls, but those controls and thresholds must not be generalized to other surfaces. A fresh or compacted session still needs the important facts supplied again. [Sources: AGT-06; AGT-07.]
-->

---
layout: single-panel
---

::title::
# Context Hierarchy and Instruction Layering
::content::

<div class="agentic-static-stage agentic-static-stage--with-band" role="group" aria-label="Conflicting instructions stop Riley until Mergewell makes the human choice">
  <img src="/images/instruction-conflict-human-resolution.png" alt="Riley pauses between conflicting instruction sheets until Mergewell resolves the conflict">
  <div class="agentic-static-overlay agentic-static-overlay--top">
    <div class="agentic-static-chip"><b>1 · Detect</b><span>Instructions disagree</span></div>
    <div class="agentic-static-chip agentic-static-chip--amber"><b>2 · Expose</b><span>Show the conflict</span></div>
    <div class="agentic-static-chip agentic-static-chip--purple"><b>3 · Human chooses</b><span>Name the surface</span></div>
    <div class="agentic-static-chip agentic-static-chip--green"><b>4 · Continue</b><span>Use reviewed guidance</span></div>
  </div>
  <div class="agentic-static-band">Do not invent one universal precedence order across GitHub.com, IDEs, CLI, code review, and cloud agent.</div>
</div>

<!--
Repository-wide and matching path-specific instructions can both apply, while precedence behavior differs by product surface. A conflict should be detected and exposed so the human can resolve it instead of letting the collaborator guess. This teaching sequence deliberately avoids claiming one universal hierarchy. [Sources: AGT-01; AGT-02; AGT-03.]
-->

---
layout: two-panel
---

::title::
# Strong Agentic Prompts
::text::

## Tell the collaborator what success and stopping look like

- **Outcome:** observable behavior or repository state
- **Limits:** what may change and what must not
- **Evidence:** diff, checks, and unresolved questions
- **Stop points:** ambiguity, scope expansion, or consequential access

::visual::
<div class="agentic-surface agentic-stack" role="img" aria-label="Bounded task dispatch">
  <div class="agentic-kicker">Dispatch</div>
  <div class="agentic-card"><b>Goal</b><span>Make invalid input produce useful feedback</span></div>
  <div class="agentic-card agentic-red"><b>What not to change</b><span>Dependencies · pricing · public contracts</span></div>
  <div class="agentic-card agentic-green"><b>What comes back</b><span>Changed files · tests · open risks</span></div>
</div>

<!--
Official prompt guidance supports a clear outcome, relevant context, constraints, acceptance criteria, and decomposition for complex work. Evidence requirements, non-goals, and stop conditions are workshop refinements that make multi-step delegation observable and bounded. A strong request says both what success looks like and when not to continue. [Sources: AGT-08; module.md.]
-->

---
layout: two-panel
---

::title::
# Reusable Skills
::text::

## A skill is a saved procedure—not a worker

- Packages reviewed instructions, scripts, and resources
- Loads when that specialized procedure is relevant
- Requires provenance and script inspection before trust
- Guides the collaborator's use of tools

::visual::
<div class="agentic-flow" role="img" aria-label="Skill procedure used by a software collaborator">
  <div class="agentic-step agentic-purple"><b>Reusable skill</b><span>Clue Wrangler procedure</span></div>
  <div class="agentic-arrow">→</div>
  <div class="agentic-step"><b>Software collaborator</b><span>Follows the procedure</span></div>
  <div class="agentic-arrow">→</div>
  <div class="agentic-step agentic-green"><b>Tool</b><span>Performs the action</span></div>
</div>

<!--
Agent skills are folders of instructions, scripts, and resources loaded when relevant for specialized repeatable tasks. A skill is not an independent worker, and shared content requires provenance and security review before use. Clue Wrangler is only the workshop metaphor for a reusable supplied-evidence procedure. [Sources: AGT-09; visual-intent.md.]
-->

---
layout: two-panel
---

::title::
# Custom Agents
::text::

## Define a recurring specialist role

- State its purpose and working instructions
- Give it only the tools the role needs
- Define the expected result
- Name the changes that require it to stop
- Check support on the selected product surface

::visual::
<div class="agentic-static-stage" role="group" aria-label="Riley's specialist dossier separates permitted test work from required stops">
  <img src="/images/custom-agent-specialist-role.png" alt="Riley stands beside a specialist dossier with bounded permissions and stops">
  <div class="agentic-static-overlay agentic-static-overlay--bottom">
    <div class="agentic-static-chip agentic-static-chip--green"><b>May do</b><span>Read code · edit tests · run focused checks</span></div>
    <div class="agentic-static-chip agentic-static-chip--red"><b>Must stop before</b><span>Production edits · dependencies · public contracts</span></div>
  </div>
</div>

<!--
A custom agent is a reusable role profile with a required description, behavior instructions, and optional model or tool configuration. Supported properties differ by environment, and an omitted tool list can enable all available tools while an empty list disables them. The workshop therefore favors an explicit minimal tool list where the selected surface supports it. [Sources: AGT-10.]
-->

---
layout: two-panel
---

::title::
# Tools
::text::

## A tool performs a concrete action

A skill supplies the reusable workflow that tells the software collaborator
how and when to use tools.

::visual::
<div class="agentic-static-stage agentic-static-stage--with-band" role="group" aria-label="Riley selects concrete actions while a separate skill guides tool use">
  <img src="/images/tool-action-workbench.png" alt="Riley uses one action at a workbench while a separate workflow card guides the work">
  <div class="agentic-static-overlay agentic-static-overlay--top">
    <div class="agentic-static-chip">Search</div>
    <div class="agentic-static-chip">Read</div>
    <div class="agentic-static-chip">Edit</div>
    <div class="agentic-static-chip agentic-static-chip--green">Run</div>
  </div>
  <div class="agentic-static-band">Skill guides tool use</div>
</div>

<!--
A tool performs a concrete action such as searching, reading, editing, or running a command. A reusable skill instead guides how and when the software collaborator uses those actions. Tool defaults and approval behavior vary by host, and even read operations can expose sensitive data. [Sources: AGT-09; AGT-11.]
-->

---
layout: single-panel
class: agentic-priority-slide
---

::title::
# The Agentic Loop
::content::

<AgenticLoopNativeAnimation />

<!--
Follow the moving emphasis: from 0–4 seconds Mergewell frames the brief in Understand, from 4–8 he reviews Riley's bounded Plan, from 8–12 Riley Acts, and from 12–16 Riley Observes the consequential result and stops. From 16–20, Purrmission signals the Ask boundary but does not decide; accountable Mergewell chooses how to Adjust. From 20–24 Riley performs the narrowed Corrective Act, from 24–28 Mergewell Verifies the returned evidence, and the final two-second hold reinforces that verification does not itself imply acceptance. Retry, Ask, Stop, and Recover remain visible as deliberate evidence-based outcomes rather than mandatory steps in one linear path. Present this as an observable learner workflow synthesized from visible capabilities, not a universal internal state machine or a claim about hidden reasoning. [Sources: AGT-12; AGT-13; AGT-14.]
-->

---
layout: two-panel
---

::title::
# Planning Before Action
::text::

## Review the proposed path before edits

- Target behavior
- Files likely to change
- Checks that will test the result
- Risks and shared behavior to inspect
- Stop points for dependencies, access, or public contracts

::visual::
<div class="agentic-static-stage" role="group" aria-label="Riley presents a proposed repository route and Mergewell reviews it before edits">
  <img src="/images/plan-before-action-route.png" alt="Riley shows a proposed change route to Mergewell before action">
  <div class="agentic-static-overlay agentic-static-overlay--top">
    <div class="agentic-static-chip">Inspect</div>
    <div class="agentic-static-chip agentic-static-chip--purple">Change</div>
    <div class="agentic-static-chip agentic-static-chip--green">Human reviews plan</div>
  </div>
  <div class="agentic-static-overlay agentic-static-overlay--bottom">
    <div class="agentic-static-chip">Scope</div>
    <div class="agentic-static-chip">Checks</div>
    <div class="agentic-static-chip agentic-static-chip--amber">Risks</div>
    <div class="agentic-static-chip agentic-static-chip--red">Stops</div>
  </div>
</div>

<!--
Planning begins by inspecting relevant repository state and proposing a bounded approach before implementation. A useful plan names the target, likely files, checks, risks, and stop points without exposing or claiming hidden reasoning. The human reviews that route before authorizing edits. [Sources: AGT-08; AGT-13; visual-intent.md.]
-->

---
layout: two-panel
class: agentic-priority-slide
---

::title::
# Approval Boundaries
::text::

## Decide access before the request appears

- **Allowed:** routine actions inside the brief
- **Ask first:** consequential or expanded actions
- **Not allowed:** actions outside the task boundary
- Inspect scope, consequence, and reversibility at the gate

<div class="agentic-callout agentic-safety"><b>Purrmission checkpoint:</b> only the access needed.</div>

::visual::
<div class="agentic-static-stage agentic-static-stage--with-band" role="group" aria-label="Purrmission flags a stopped request while Mergewell chooses among three predeclared action classes">
  <img src="/images/approval-boundary-human-decision.png" alt="A request stops at Purrmission's gate while Mergewell decides and Riley waits">
  <div class="agentic-static-overlay agentic-static-overlay--top">
    <div class="agentic-static-chip agentic-static-chip--green"><b>Allowed</b><span>Inside the brief</span></div>
    <div class="agentic-static-chip agentic-static-chip--amber"><b>Ask first</b><span>Consequential gate</span></div>
    <div class="agentic-static-chip agentic-static-chip--red"><b>Not allowed</b><span>Outside the boundary</span></div>
  </div>
  <div class="agentic-static-band agentic-static-band--decision">DEVELOPER ALLOWS · NARROWS · REJECTS · STOPS</div>
</div>

<style>
.agentic-gate-stack{--ink:#24211f;--muted:#625b54;--line:#d8cfc2;--paper:#fffdf7;--rail:#403a36;--green:#287a45;--amber:#9a6700;--red:#b4232d;position:relative;display:grid;gap:.6rem;width:calc(100% - 2.4rem);padding:1rem;border:1px solid var(--line);border-radius:1rem;background:linear-gradient(145deg,var(--paper),#f8f1e7);box-shadow:0 16px 30px rgb(77 61 45 / 11%)}
.agentic-gate-stack::before{content:"";position:absolute;z-index:0;top:1.5rem;bottom:4.7rem;left:2.25rem;border-left:4px solid var(--rail)}.agentic-gate-stack>*{position:relative;z-index:1}
.agentic-gate-card{display:grid;grid-template-columns:2.15rem minmax(0,1fr);gap:.65rem;align-items:center;padding:.65rem;border:1px solid var(--line);border-radius:.75rem;background:var(--paper);box-shadow:0 5px 12px rgb(77 61 45 / 7%)}
.agentic-gate-card b,.agentic-gate-card span{display:block}.agentic-gate-card span{margin-top:.16rem;color:var(--muted);font-size:.68rem;line-height:1.25}
.agentic-gate-label{margin-bottom:.22rem!important;font-size:.58rem!important;font-weight:850;letter-spacing:.07em;text-transform:uppercase}
.agentic-gate-shape{display:grid;width:2rem;height:2rem;place-items:center;border:2px solid currentColor;background:#fff;font-size:.75rem;font-weight:900}.agentic-gate-card--allowed .agentic-gate-shape{border-radius:50%;color:var(--green)}.agentic-gate-card--ask .agentic-gate-shape{transform:rotate(45deg);color:var(--amber)}.agentic-gate-card--ask .agentic-gate-shape span{transform:rotate(-45deg)}.agentic-gate-card--blocked .agentic-gate-shape{border-radius:.2rem;color:var(--red)}
.agentic-gate-card--allowed{border-color:#79a989;background:#eef8ef}.agentic-gate-card--ask{border:2px solid #c59a3a;background:#fff6d8;box-shadow:0 0 0 4px rgb(154 103 0 / 10%),0 7px 14px rgb(77 61 45 / 8%)}.agentic-gate-card--blocked{border-color:#cb7278;background:#fff0ee}
.agentic-gate-stack .agentic-decision{padding:.65rem;border:1px solid #1e6337;border-radius:.55rem;color:#fff;background:#276f42;box-shadow:0 5px 0 #184b2b;text-align:center;font-size:.72rem;font-weight:800;letter-spacing:.025em}
</style>

<!--
Consequential tool requests should expose the action, parameters, reach, likely consequence, reversibility, and developer decision. Interactive controls and recovery options differ across hosts, so the slide promises no universal approval or rollback behavior. Purrmission marks this consequential permission boundary while Agent Mergewell retains the decision. [Sources: AGT-11; AGT-14; visual-intent.md.]
-->

---
layout: two-panel
---

::title::
# Verification and Evidence
::text::

## Check the work—not the completion claim

- **Diff:** did only the intended files change?
- **Tests:** which behavior did they exercise?
- **Open risk:** what remains unknown or unchecked?
- **Acceptance criteria:** does the result meet the brief?

::visual::
<div class="agentic-static-stage" role="group" aria-label="Mergewell reviews four separate forms before judging whether the work meets the brief">
  <img src="/images/evidence-human-verification.png" alt="Mergewell reviews four separate evidence forms at a desk">
  <div class="agentic-static-overlay agentic-static-overlay--grid">
    <div class="agentic-static-chip">Changed files</div>
    <div class="agentic-static-chip agentic-static-chip--green">Test results</div>
    <div class="agentic-static-chip agentic-static-chip--amber">Open risks</div>
    <div class="agentic-static-chip">Meets the brief</div>
  </div>
</div>

<!--
Verification separates a collaborator's completion language from artifacts the developer can inspect. A diff, tests, configured checks, review comments, and acceptance criteria answer different questions and prove only what they checked. Progress, drift, and unresolved uncertainty become visible by comparing this evidence with the original brief. [Sources: AGT-12; AGT-16; AGT-28.]
-->

---
layout: single-panel
---

::title::
# Repository State as a Checkpoint
::content::

<div class="agentic-flow" role="img" aria-label="Repository checkpoint sequence">
  <div class="agentic-step"><b>Branch</b><span>Separate task line</span></div>
  <div class="agentic-arrow">→</div>
  <div class="agentic-step"><b>Working diff</b><span>Inspect every change</span></div>
  <div class="agentic-arrow">→</div>
  <div class="agentic-step"><b>Validation</b><span>Keep exact results</span></div>
  <div class="agentic-arrow">→</div>
  <div class="agentic-step agentic-green"><b>Reviewable commit</b><span>Named checked checkpoint</span></div>
</div>

<div class="agentic-callout agentic-safety">A Git checkpoint does not reverse every external side effect.</div>

<!--
Git branches provide lines of development, commits record snapshots, and pushes update the remote branch. Branch, working diff, validation, and a reviewable commit create visible scope and recovery checkpoints for the delegated task. Version control does not reverse every network, data, or external-system effect, so recovery remains consequence-specific. [Sources: AGT-14; AGT-15.]
-->

---
layout: single-panel
class: agentic-priority-slide
---

::title::
# Security Before and After Push
::content::

<div class="agentic-loop-plate" role="group" aria-label="Focused active-change review followed by three distinct conditional security checkpoints and Purrmission-marked human validation">
  <div class="agentic-security-plate">
    <div class="agentic-security-origin"><span class="agentic-route-condition">Before push · active changes</span><b>`/security-review`</b><span>Focused review—not a complete audit</span></div>
    <div class="agentic-security-connector" aria-hidden="true">→</div>
    <div class="agentic-security-lanes" aria-label="Conditional repository security evidence">
      <div class="agentic-security-lane"><span class="agentic-route-condition">At push · may</span><div><b>Push protection</b><span>Can block detected supported secrets</span></div></div>
      <div class="agentic-security-lane"><span class="agentic-route-condition">Configured event</span><div><b>Configured code scanning</b><span>Inspect resulting alerts</span></div></div>
      <div class="agentic-security-lane"><span class="agentic-route-condition">Applicable PR</span><div><b>Applicable dependency review</b><span>Inspect changed dependencies on the pull request</span></div></div>
    </div>
    <div class="agentic-security-connector" aria-hidden="true">→</div>
    <div class="agentic-security-review"><span class="agentic-route-condition">Purrmission · safety boundary</span><b>Human validates</b><span>Findings are evidence, not acceptance</span></div>
  </div>
  <div class="agentic-callout agentic-safety"><b>Conditional checkpoints:</b> no one control is a complete security audit or permission to merge.</div>
</div>

<style>
.agentic-loop-plate{--ink:#24211f;--muted:#625b54;--line:#d8cfc2;--paper:#fffdf7;--rail:#403a36;--purple:#7650b7;--green:#287a45;--amber:#9a6700;display:grid;grid-template-rows:1fr auto;gap:.8rem;height:100%;color:var(--ink)}
.agentic-security-plate{display:grid;grid-template-columns:minmax(8.5rem,.8fr) 1.1rem minmax(0,2.8fr) 1.1rem minmax(8.5rem,.8fr);gap:.65rem;align-items:center;height:100%}
.agentic-security-origin,.agentic-security-review{padding:.9rem;border:1px solid var(--line);border-top:5px solid var(--purple);border-radius:.75rem;background:var(--paper);box-shadow:0 5px 12px rgb(77 61 45 / 7%)}.agentic-security-review{border-top-color:var(--green)}
.agentic-security-origin b,.agentic-security-review b{display:block;font-size:.86rem}.agentic-security-origin span,.agentic-security-review span{display:block;margin-top:.3rem;color:var(--muted);font-size:.68rem;line-height:1.3}
.agentic-route-condition{display:block;margin-bottom:.28rem!important;color:var(--amber)!important;font-size:.59rem!important;font-weight:850;letter-spacing:.07em;text-transform:uppercase}.agentic-security-connector{color:var(--rail);font-size:1.15rem;font-weight:900;text-align:center}
.agentic-security-lanes{display:grid;gap:.48rem;padding:.6rem;border-block:2px dashed #9d8f83;background:#fbf7f0}.agentic-security-lane{display:grid;grid-template-columns:5.8rem minmax(0,1fr);gap:.6rem;align-items:center;padding:.55rem .65rem;border:1px solid var(--line);background:#fff}.agentic-security-lane:nth-child(1){border-radius:999px}.agentic-security-lane:nth-child(2){border-radius:.65rem}.agentic-security-lane:nth-child(3){border-radius:.2rem}
.agentic-security-lane b{display:block;font-size:.78rem}.agentic-security-lane span{display:block;margin-top:.15rem;color:var(--muted);font-size:.64rem;line-height:1.25}
.agentic-loop-plate .agentic-callout{margin:0;padding:.65rem .8rem;border:1px solid var(--line);border-left:5px solid var(--amber);border-radius:.55rem;background:#fff6d8;box-shadow:0 4px 10px rgb(77 61 45 / 6%)}
</style>

<!--
In an interactive Copilot CLI session, `/security-review` is a focused on-demand review of active local changes and not a full repository audit. Applicable push protection may block supported secrets, while configured code scanning and applicable pull-request dependency review provide separate evidence with their own setup, coverage, trigger, and availability boundaries. A finding, clean result, suggested fix, successful push, or passing check still requires human validation and is never automatic acceptance or merge permission. [Sources: AGT-32; AGT-33; AGT-34; AGT-35; AGT-36; AGT-37; AGT-38.]
-->

---
layout: single-panel
---

::title::
# GitHub Actions as Loop Feedback
::content::

<div class="agentic-flow" role="img" aria-label="Configured workflow feedback loop">
  <div class="agentic-step"><b>Push or pull request</b><span>Repository event</span></div>
  <div class="agentic-arrow">→</div>
  <div class="agentic-step"><b>Configured workflow</b><span>Runs permitted jobs</span></div>
  <div class="agentic-arrow">→</div>
  <div class="agentic-step agentic-amber"><b>Check evidence</b><span>Pass · fail · skip · missing</span></div>
  <div class="agentic-arrow">→</div>
  <div class="agentic-step agentic-green"><b>Developer decision</b><span>Continue · revise · stop</span></div>
</div>

<div class="agentic-callout">Keep ordinary repository workflows separate from cloud-agent environments and product-specific review runs.</div>

<!--
An ordinary GitHub Actions workflow runs because a configured repository event such as `push` or `pull_request` triggered it, not because Copilot inherently ran continuous integration. Cloud-agent environments and product-specific Code Quality or code-review runs have separate security and runner boundaries. Commit-associated pass, fail, skipped, or missing evidence guides the next developer decision. [Sources: AGT-16; AGT-17.]
-->

---
layout: two-panel
---

::title::
# Pull Requests as Agent Handoffs
::text::

## Return the change, proof, and open questions

- What was intended and what changed
- Which checks ran and what they reported
- What remains uncertain or risky
- Which human or review tool should look next
- Opening the pull request does not accept the change

::visual::
<div class="agentic-static-stage" role="group" aria-label="Riley hands Mergewell a three-part pull-request evidence package for human review">
  <img src="/images/pull-request-evidence-handoff.png" alt="Riley presents a structured evidence folio to Mergewell for review">
  <div class="agentic-static-overlay agentic-static-overlay--bottom">
    <div class="agentic-static-chip">What changed</div>
    <div class="agentic-static-chip agentic-static-chip--green">Proof to review</div>
    <div class="agentic-static-chip agentic-static-chip--amber">Open question</div>
  </div>
</div>

<!--
A pull request packages branch changes, checks, uncertainty, and requested review into a visible handoff. Cloud-agent commits, logs, diffs, test output, and discussion can contribute evidence, but every signal remains subject to human evaluation. Opening a pull request or receiving a Copilot Comment review is not acceptance. [Sources: AGT-15; AGT-20; AGT-28.]
-->

---
layout: two-panel
---

::title::
# Copilot Cloud Agent
::text::

## Use background work when it can return for review

- Current name: **GitHub Copilot cloud agent**
- One session works in one repository on one working branch
- Start paths and pull-request timing vary
- Eligibility depends on plan, policy, repository, and write access
- The cloud agent cannot approve or merge its own pull request

::visual::
<div class="agentic-static-stage" role="group" aria-label="Interactive and cloud work remain separate and return evidence to Mergewell's human review">
  <img src="/images/cloud-agent-parallel-handoff.png" alt="Riley performs bounded cloud work on a separate track that returns evidence to Mergewell">
  <div class="agentic-static-overlay agentic-static-overlay--top">
    <div class="agentic-static-chip">Interactive work</div>
    <div class="agentic-static-chip agentic-static-chip--purple">Cloud agent</div>
    <div class="agentic-static-chip agentic-static-chip--green">Mergewell · developer</div>
  </div>
</div>

<!--
The current product name is GitHub Copilot cloud agent, and eligibility depends on a paid plan, policy, repository compatibility, and write access. Sessions can start from several documented entry points and may create or update a pull request at different points in the workflow. One session works in one repository on one branch and cannot approve or merge its own pull request. [Sources: AGT-18; AGT-19; AGT-20.]
-->

---
layout: two-panel
---

::title::
# Cloud-Agent Handoffs
::text::

## Give background work clearer rules

- Goal and current repository state
- Scope, non-goals, and permissions
- Checks and stop points
- Commits, logs, changed files, results, and open questions

<div class="agentic-callout agentic-safety"><b>Purrmission checkpoint:</b> more autonomy requires clearer limits.</div>

::visual::
<div class="agentic-static-stage" role="group" aria-label="Mergewell packages four grouped cloud-handoff requirements before Riley begins">
  <img src="/images/cloud-agent-bounded-brief.png" alt="Mergewell holds a bounded handoff case while Riley waits beyond the work boundary">
  <div class="agentic-static-overlay agentic-static-overlay--grid">
    <div class="agentic-static-chip"><b>Goal</b><span>Current state</span></div>
    <div class="agentic-static-chip agentic-static-chip--purple"><b>Scope</b><span>Non-goals · permissions</span></div>
    <div class="agentic-static-chip agentic-static-chip--amber"><b>Checks</b><span>Stops</span></div>
    <div class="agentic-static-chip agentic-static-chip--green"><b>Returned evidence</b><span>Commits · logs · results · open questions</span></div>
  </div>
</div>

<!--
A cloud handoff repeats the outcome, current repository state, references, scope, non-goals, checks, permissions, stops, and expected evidence. Cloud-agent secrets and variables require explicit environment configuration, and ordinary Actions secrets are not an automatic grant. Fresh Lead is a reusable packaging skill, while Purrmission marks the consequential high-autonomy boundary owned by Mergewell. [Sources: AGT-08; AGT-19; AGT-21; visual-intent.md.]
-->

---
layout: single-panel
---

::title::
# Manage Cloud Agents from GitHub Mobile
::content::

<div class="agentic-static-stage agentic-static-stage--dense" role="group" aria-label="GitHub Mobile oversight follows a five-step route while human acceptance remains separate">
  <img src="/images/mobile-cloud-agent-oversight.png" alt="Mergewell oversees a five-step mobile-to-cloud route while Riley performs bounded remote work">
  <ol class="agentic-static-overlay agentic-static-overlay--five" aria-label="Supported GitHub Mobile cloud-agent flow">
    <li class="agentic-static-chip"><b>Start or assign</b><span>Eligible repository and user</span></li>
    <li class="agentic-static-chip"><b>Track status</b><span>Find current agent work</span></li>
    <li class="agentic-static-chip"><b>Review diff</b><span>Inspect visible changes</span></li>
    <li class="agentic-static-chip agentic-static-chip--purple"><b>Iterate</b><span>No invented exact control</span></li>
    <li class="agentic-static-chip agentic-static-chip--green"><b>Review pull request</b><span>Human acceptance stays separate</span></li>
  </ol>
  <div class="agentic-static-overlay agentic-static-overlay--bottom">
    <div class="agentic-static-chip"><b>GitHub Mobile boundary</b><span>No fabricated session log, chat, status, or follow-up control</span></div>
    <div class="agentic-static-chip agentic-static-chip--amber"><b>Separate eligible action</b><span>Request and inspect GitHub Copilot code review</span></div>
  </div>
</div>

<!--
In GitHub Mobile, an eligible developer can start a GitHub Copilot cloud-agent session or assign an issue, track agent work, review the visible diff, iterate, and open the resulting pull request for human review. Current sources do not verify clarification responses, an exact follow-up control, complete GitHub.com session parity, or universal automatic pull-request creation, review, or acceptance. GitHub Copilot code review is a separate eligible action whose Comment review still requires human validation, and availability remains subject to plan, policy, repository, access, app, and notification-platform boundaries. [Sources: AGT-39; AGT-40; AGT-41; AGT-42; AGT-43; AGT-44; AGT-45; AGT-46.]
-->

---
layout: single-panel
class: agentic-init-title-slide
---

::title::
# Teach Copilot How Your Project Works with `/init`
::content::

<div class="agentic-flow" role="img" aria-label="Copilot CLI init sequence">
  <div class="agentic-step"><b>1 · Scaffold</b><span>Project structure exists</span></div>
  <div class="agentic-arrow">→</div>
  <div class="agentic-step"><b>2 · Build + test work</b><span>Real commands are known</span></div>
  <div class="agentic-arrow">→</div>
  <div class="agentic-step agentic-purple"><b>3 · Run `/init`</b><span>Copilot CLI analyzes the repository</span></div>
  <div class="agentic-arrow">→</div>
  <div class="agentic-step agentic-amber"><b>4 · Review + correct</b><span>Inspect proposed guidance</span></div>
  <div class="agentic-arrow">→</div>
  <div class="agentic-step agentic-green"><b>5 · Commit</b><span>`.github/copilot-instructions.md`</span></div>
</div>

<div class="agentic-callout">Revisit reviewed instructions after major framework, architecture, or workflow changes.</div>

<!--
`/init` is an interactive Copilot CLI command, with `copilot init` as its command-line counterpart, that analyzes a repository and writes or updates `.github/copilot-instructions.md`. Run it after the project has meaningful structure, dependencies, conventions, and real build and test commands so the proposal has useful evidence. The developer must inspect, correct, and choose whether to commit the result because the command does not silently approve or commit team guidance. [Sources: AGT-01; AGT-22; visual-intent.md.]
-->

---
layout: single-panel
---

::title::
# Agentic Optimization
::content::

<div class="agentic-grid" role="img" aria-label="Noisy and focused agentic workflows">
  <div class="agentic-card agentic-amber">
    <b>Before · noisy process</b>
    <span>Unrelated context<br>Broad checks after every edit<br>Blind retries with no new evidence</span>
  </div>
  <div class="agentic-card agentic-green">
    <b>After · focused process</b>
    <span>Relevant context<br>Targeted check, then broader validation<br>Each retry explains what changed</span>
  </div>
</div>

<div class="agentic-callout">Measure irrelevant context, check scope, repeated attempts, and proof quality—do not promise fixed savings or success.</div>

<!--
Portable optimization practices include clear tasks, lean relevant context, focused sessions, minimal tools, phased work, deterministic checks, and explicit stopping conditions. These practices can reduce unnecessary exploration or retries, but no reviewed source establishes a guaranteed quality improvement or fixed AI-credit saving. Compare observable workflow evidence before and after the change rather than describing optimization as model magic. [Sources: AGT-23; AGT-24; AGT-31.]
-->

---
layout: single-panel
---

::title::
# Make Cost-Conscious Choices Before You Start
::content::

<div class="agentic-static-stage agentic-static-stage--dense agentic-static-stage--with-band" role="group" aria-label="Mergewell selects four supported pre-run controls, then compares result quality with available AI-credit usage">
  <img src="/images/cost-conscious-preflight-controls.png" alt="Mergewell sets physical pre-run controls before Riley starts, with quality and usage evidence kept separate">
  <div class="agentic-static-overlay agentic-static-overlay--grid">
    <div class="agentic-static-chip agentic-static-chip--purple"><b>Auto where supported</b><span>Paid plans currently receive a 10% model-cost discount; routing still depends on policy, model pool, availability, and task</span></div>
    <div class="agentic-static-chip"><b>Regular defaults first</b><span>Increase context or reasoning only when complexity and the selected surface justify it</span></div>
    <div class="agentic-static-chip"><b>Fresh or compacted context</b><span>Start fresh for unrelated work; use CLI <code>/compact</code> only for continuing long work</span></div>
    <div class="agentic-static-chip agentic-static-chip--amber"><b>Optional CLI soft ceiling</b><span><code>/limits set max-ai-credits NUMBER</code><br>Public preview · per session · may finish slightly over</span></div>
  </div>
  <div class="agentic-static-band agentic-static-band--decision">RUN BOUNDED WORK → CHECK RESULT QUALITY + AVAILABLE AI-CREDIT USAGE → CONTINUE OR STOP</div>
</div>

<!--
GitHub AI Credits depend on model and token usage, so pre-run controls must be taught only for their named plans, models, and product surfaces. Start with regular context and reasoning, use Auto where supported, carry only relevant history, and optionally set the public-preview soft Copilot CLI session ceiling before a bounded run. Auto's current paid-plan 10 percent model-cost discount is not a cheapest-successful-result promise, and none of these choices guarantees a fixed saving, so inspect both result quality and available usage evidence afterward. [Sources: CREDIT-01; CREDIT-03; CREDIT-04; CREDIT-05; CREDIT-06; CREDIT-07; CREDIT-08; SRC-01; SRC-02; SRC-03; SRC-04; SRC-05; SRC-06; SRC-07.]
-->

---
layout: single-panel
class: agentic-priority-slide
---

::title::
# Code Quality, Copilot Review, and Human Acceptance
::content::

<div class="agentic-static-stage agentic-static-stage--dense" role="group" aria-label="Four evidence streams remain separate through Purrmission's boundary before Mergewell's human decision">
  <img src="/images/evidence-streams-human-acceptance.png" alt="Four distinct evidence lanes reach Mergewell's review desk before a human decision">
  <div class="agentic-static-overlay agentic-static-overlay--six" style="grid-template-columns:repeat(4,minmax(0,1fr))">
    <div class="agentic-static-chip"><b>Diff</b><span>Stream 01 · changed work<br>What changed, and was it in scope?</span></div>
    <div class="agentic-static-chip"><b>Ordinary GitHub Actions</b><span>Stream 02 · configured checks<br>Did configured checks pass?</span></div>
    <div class="agentic-static-chip agentic-static-chip--purple"><b>GitHub Code Quality</b><span>Stream 03 · deterministic findings<br>Which deterministic CodeQL findings appeared?</span></div>
    <div class="agentic-static-chip agentic-static-chip--amber"><b>GitHub Copilot code review</b><span>Stream 04 · review comments<br>Which Comment findings need validation?</span></div>
  </div>
  <div class="agentic-static-band agentic-static-band--safety"><b>Purrmission guards the acceptance boundary.</b> The four streams remain separate evidence.</div>
  <div class="agentic-static-band agentic-static-band--decision">MERGEWELL'S HUMAN DECISION · ACCEPT · REVISE · REJECT · RECOVER · MERGE</div>
</div>

<style>
.agentic-evidence-plate{--ink:#24211f;--muted:#625b54;--line:#d8cfc2;--paper:#fffdf7;--green:#287a45;--amber:#9a6700;display:grid;grid-template-rows:1fr auto auto;gap:.72rem;height:100%;color:var(--ink)}
.agentic-evidence-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:.72rem;width:100%}.agentic-evidence-card{min-width:0;padding:.85rem;border:1px solid var(--line);background:var(--paper);box-shadow:0 7px 14px rgb(77 61 45 / 8%)}.agentic-evidence-card:nth-child(1){border-top:6px solid #557b9e;border-radius:.85rem}.agentic-evidence-card:nth-child(2){border-top:6px double #6c7e53;border-radius:.35rem}.agentic-evidence-card:nth-child(3){border-top:6px solid #8b6cae;border-radius:.85rem .2rem .85rem .2rem}.agentic-evidence-card:nth-child(4){border-top:6px dashed #a16c49;border-radius:.2rem .85rem .2rem .85rem}
.agentic-evidence-card b{display:block;font-size:.78rem;line-height:1.2}.agentic-evidence-card span:last-child{display:block;margin-top:.38rem;color:var(--muted);font-size:.67rem;line-height:1.3}.agentic-stream-tag{display:block;margin-bottom:.3rem;color:var(--muted);font-size:.58rem;font-weight:850;letter-spacing:.07em;line-height:1.15;text-transform:uppercase}
.agentic-evidence-plate .agentic-callout{margin:0;padding:.65rem .8rem;border:1px solid var(--line);border-left:5px solid var(--amber);border-radius:.55rem;background:#fff6d8;box-shadow:0 4px 10px rgb(77 61 45 / 6%)}.agentic-evidence-plate .agentic-decision{margin:0;padding:.7rem;border:1px solid #1e6337;border-radius:.55rem;color:#fff;background:#276f42;box-shadow:0 5px 0 #184b2b;text-align:center;font-size:.75rem;font-weight:800;letter-spacing:.025em}
</style>

<!--
GitHub Code Quality supplies deterministic CodeQL findings, while GitHub Copilot code review is a separate AI-powered review that produces comments requiring validation. Code Quality no longer automatically adds Copilot as a reviewer, and a manually requested Copilot review does not automatically repeat after every new push by default. Diff evidence, ordinary Actions, Code Quality, Copilot review, acceptance, and merge remain distinct, with Mergewell and Purrmission marking the final human decision. [Sources: AGT-25; AGT-26; AGT-27; AGT-28; AGT-29; AGT-30.]
-->

---
layout: single-panel
class: agentic-slide
---

::title::
# Your Mission: Hand Off Work with Confidence
::content::

### 🎯 MISSION

<div class="agentic-grid" role="img" aria-label="Agent Mergewell and Purrmission mission briefing">
  <div class="agentic-card agentic-purple"><b>AGENT MERGEWELL · MODULE 2 · 45 MIN</b><span>Bring your Foundations case file, or use the facilitator starter for catch-up.</span></div>
  <div class="agentic-card"><b>Hand Off Work with Confidence</b><span>50 core points · complete at 40 · bonus cap 10</span></div>
  <div class="agentic-card agentic-amber"><b>Purrmission safety checkpoint</b><span>Use one approved harness and keep the work inside the starter fixture.</span></div>
  <div class="agentic-card agentic-green"><b>Bring back evidence</b><span>Brief · diff · validation · Agentic + cumulative totals</span></div>
</div>

<div class="agentic-decision">MISSION ROUTE · workshops/ghcp-dev-hack/agentic/missions/agent-task/</div>

<!--
This briefing points participants to the separate 45-minute scored mission `Your Mission: Hand Off Work with Confidence`, which starts from the exported Foundations case file or the facilitator starter for legitimate catch-up entry. Participants choose an approved Copilot harness, stay inside the workshop-local starter fixture, and keep permissions limited enough to recover safely. The mission reuses the Foundations scoring envelope: 50 available core points, 40 core points required for completion, up to 10 bonus points, and no hint penalty or speed scoring. They return the updated case file, bounded brief, diff, validation output, and separate Foundations, Agentic, and cumulative totals before making the human accept, revise, reject, stop, or recover decision. [Sources: content/missions/agentic/agent-task.md; module.md.]
-->
