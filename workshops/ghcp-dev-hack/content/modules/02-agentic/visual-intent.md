# Agentic Module: Visual Intent Proposal

**Initiative:** `agentic-module-development`
**Workshop:** `workshops/ghcp-dev-hack`
**Module:** `02-agentic`

## Visual Language Summary
The Agentic module visuals rely on a warm, human-centered editorial cartoon style that grounds abstract software concepts in a physical detective world. Agent Mergewell is the accountable human field agent who owns all final decisions, while software collaborators are depicted as distinct glowing or specialized avatars who perform delegated typing and searching. Reusable skills are represented as mechanical gadgets deployed by Mergewell, preventing confusion between a script and a worker. The environment uses physical props like corkboards, desk trays, structured folders, and route maps instead of abstract cloud diagrams to make invisible repository state obvious. Purrmission the cat appears specifically to mark consequential safety, permission, or acceptance boundaries. All exact text, code, commands, product UI, and repository evidence remain as native Slidev overlays to ensure technical accuracy and maintainability.

## Treatment Categories
- **Illustration required:** 9
- **Illustration recommended:** 6
- **Native graphic preferred:** 10

## Highest-Priority Concepts for Owner Approval
1. **Slide 1 (Human-directed operating split):** Establishing Mergewell's brief, boundaries, acceptance, and merge authority beside the software collaborator's planning, editing, tool use, and returned evidence.
2. **Slide 10 (The Agentic Loop):** Converting abstract planning and acting into a physical circular path with a human gate.
3. **Slide 12 (Approval Boundaries):** Making allowed, ask-first, and prohibited actions visible at the moment a consequential tool request appears.
4. **Slide 15 (Security Before and After Push):** Separating an on-demand `/security-review` from repository security checks on pushes and pull requests.
5. **Slide 24 (Human Acceptance):** Separating the four distinct evidence streams landing on the desk before Mergewell merges.

## Graphics Recommended for Discard
Most current abstract `boards`, `trays`, `folios`, and `routes` created purely with CSS borders should be discarded or heavily simplified in favor of either clear native UI/text layouts or the proposed physical-world illustrations. Abstract boxes without a clear physical metaphor currently fail to convey the human relationship to the software.

## Remaining Terminology Risks
Words like "Bounded issue", "Delegated work", "durable repository guidance", and "Agentic Optimization" still sound overly academic or production-oriented. They risk alienating developers who just want to know how to use the tools safely. We recommend simpler phrasing like "Clear task limits", "Team rules", and "Getting better results".

## Execution Context
- **Risk Tier:** Medium (approved slide-contract and native-deck revision; no media generated)
- **Reuse:** Incorporates established Agent Mergewell and Purrmission character continuity rules.
- **Review/Rework Exposure:** Validates intent before any storyboard or media generation costs are incurred.
- **Validation Performed:** Checked against `key-topics.md` human-comprehension rubric and `agent-task.md` constraints.
- **Paid calls/candidates/retries:** All zero.

## Concept Flow
Slide 1 establishes the human-directed module promise. Each instructional slide
then teaches one concept with a small, self-contained example only where it
improves understanding. Slide 24 brings the evidence concepts together for the
human acceptance decision, while slide 25 points to the separate
`Your Mission: Hand Off Work with Confidence` mission.

---

## Slide-by-Slide Proposals

### 1. Agentic Development
1. **What the developer should understand:** The human defines the brief, boundaries, and acceptance; the software collaborator plans, edits, uses allowed tools, and returns evidence; the human retains final acceptance and merge authority.
2. **What we would show:** Agent Mergewell at the center of a warm editorial workspace setting the brief and boundary, a distinct software-agent collaborator working through plan/edit/tool/evidence stations, and the final acceptance and merge control remaining at Mergewell's desk.
3. **Why this visual helps:** Opens with the complete operational split without turning the cover into a second instructional slide or implying that agents work autonomously end to end.
4. **Character use:** Mergewell and distinct software collaborator.
5. **Native overlay:** "Human: brief + boundaries", "Software: plan + edit + tools + evidence", "Human: accept + merge".
6. **Concept example:** Module promise only; topic-specific examples begin on later slides.
7. **Treatment:** illustration required.
8. **Owner preview sentence:** You would see Mergewell define the work, the collaborator execute and return proof, and acceptance and merge remain visibly human.

### 2. Instructions for Agentic Work
1. **What the developer should understand:** Before delegating work, the team organizes durable guidance by scope—repository-wide rules, path-specific rules, and agent-specific role instructions—and keeps the current task's goal, boundaries, checks, and stop points in the task request.
2. **What we would show:** A repository map with three clearly separated homes: `.github/copilot-instructions.md` for repository-wide guidance, `.github/instructions/**/*.instructions.md` for matching paths, and agent instruction files for recurring roles. A separate current-task card sits outside those durable stores.
3. **Why this visual helps:** Shows where reviewed guidance lives, what each location is for, and why issue-specific details should not be mixed into standing instructions.
4. **Character use:** character-world-only/no character.
5. **Native overlay:** "Repository-wide", "Path-specific", "Agent-specific", "Current task"; include the exact file locations as native text and note that support and combination rules vary by Copilot surface.
6. **Concept example:** Keep a one-time bug-fix brief separate from durable repository and path-specific guidance.
7. **Treatment:** native graphic preferred.
8. **Owner preview sentence:** You would see a repository map that makes each instruction home and its intended scope immediately clear, with the current task kept separate.

### 3. Memory and Its Limits
1. **What the developer should understand:** GitHub Copilot Memory can retain repository-level facts and user-level preferences, then retrieve relevant entries for supported experiences. It is selective, preview, and retention-limited, so reviewed instructions and current task context remain authoritative inputs.
2. **What we would show:** Two native memory stores feeding supported consumers: repository facts stay with one repository, while user preferences follow the user across repositories. A separate current-task packet flows directly into the active session rather than entering either memory store.
3. **Why this visual helps:** Separates where memory is stored, where it may be retrieved, and what the developer must deliberately supply again.
4. **Character use:** character-world-only/no character.
5. **Native overlay:** "Repository facts: one repository", "User preferences: same user across repositories", "Retrieved when relevant", "Current task: supply again"; identify cloud agent, Copilot code review, and Copilot CLI as the currently verified consumers, with code review using repository facts only.
6. **Concept example:** Distinguish retained repository facts and user preferences from task details that must be supplied again.
7. **Treatment:** native graphic preferred.
8. **Owner preview sentence:** You would see repository facts and user preferences stored at different scopes, selectively retrieved by supported Copilot experiences, while the current task is supplied explicitly.

### 4. Context for Long-Running Work
1. **What the developer should understand:** Too much old information confuses the software, so pack only the facts that matter right now.
2. **What we would show:** A clean, thin folder containing just the essential files, sitting next to an overflowing, messy cardboard box of old logs.
3. **Why this visual helps:** Visualizes "context rot" and the need for curation.
4. **Character use:** character-world-only/no character.
5. **Native overlay:** "Focused context", "Too much context".
6. **Concept example:** Carry forward only the repository state and evidence needed for the current fix.
7. **Treatment:** native graphic preferred.
8. **Owner preview sentence:** You would see a neat, thin folder of useful files contrasted with a bursting, messy box of old guesses.
* **Flagged language:** "Stale guesses"
* **Proposed replacement:** "Old mistakes"

### 5. Context Hierarchy and Instruction Layering
1. **What the developer should understand:** When two sets of rules disagree, the human must step in and choose which one to follow.
2. **What we would show:** A software helper looking confused with question marks between two conflicting instruction sheets, while Mergewell steps in to point at the correct one.
3. **Why this visual helps:** Shows that there is no automatic rule for conflicts; the human must resolve them.
4. **Character use:** Mergewell and distinct software collaborator.
5. **Native overlay:** "1 -> Detect", "2 -> Expose", "3 -> Reconcile", "4 -> Continue".
6. **Concept example:** Expose and resolve conflicting repository and task guidance before work continues.
7. **Treatment:** illustration required.
8. **Owner preview sentence:** You would see the software helper stuck between two conflicting rule sheets until Mergewell points to the winner.
* **Flagged language:** "Reconcile"
* **Proposed replacement:** "Human chooses"

### 6. Strong Agentic Prompts
1. **What the developer should understand:** A good request tells the software exactly what success looks like, what it cannot touch, and when to stop.
2. **What we would show:** A formal dispatch clipboard with clear checklists for "Goal", "Do not touch", and "When to stop", checked off by a human hand.
3. **Why this visual helps:** Replaces vague "prompts" with a concrete bounded contract.
4. **Character use:** character-world-only/no character.
5. **Native overlay:** "Goal", "Limits", "What comes back".
6. **Concept example:** Define the desired fix, allowed files, excluded dependency changes, required checks, and stop points.
7. **Treatment:** native graphic preferred.
8. **Owner preview sentence:** You would see a clipboard holding a clear checklist of what the software is allowed to do and what it must leave alone.
* **Flagged language:** "Constraints", "non-goals"
* **Proposed replacement:** "Limits", "What not to change"

### 7. Reusable Skills
1. **What the developer should understand:** A skill is just a saved set of instructions or a script, not an independent worker.
2. **What we would show:** Mergewell handing a mechanical sorting gadget (a skill) to the software helper, who then uses it on some files.
3. **Why this visual helps:** Makes skill versus worker versus tool obvious; gadgets represent reusable skills only.
4. **Character use:** Mergewell and distinct software collaborator.
5. **Native overlay:** "Reusable skill -> Clue Wrangler", "Software collaborator", "Tool".
6. **Concept example:** Reuse a reviewed test-triage procedure instead of rewriting the same workflow for every failure.
7. **Treatment:** illustration required.
8. **Owner preview sentence:** You would see Mergewell pulling a mechanical sorting gadget out of his coat and handing it to the software helper to use.
* **Flagged language:** "procedure"
* **Proposed replacement:** "saved instructions"

### 8. Custom Agents
1. **What the developer should understand:** You can set up a recurring software helper with specific rules and only the tools it actually needs.
2. **What we would show:** A named ID badge or dossier for a "Test Specialist" software helper, listing its specific job and a crossed-out "No Production Code" rule.
3. **Why this visual helps:** Grounds "custom agent" into a restricted, specific role rather than an all-knowing AI.
4. **Character use:** distinct software collaborator.
5. **Native overlay:** "Custom-agent profile", "May do", "Must stop before".
6. **Concept example:** Define a recurring test-specialist role without confusing the role profile with the worker or its tools.
7. **Treatment:** illustration recommended.
8. **Owner preview sentence:** You would see a detailed ID badge for a specialist software helper that clearly says what it is allowed to touch.
* **Flagged language:** "Custom-agent profile"
* **Proposed replacement:** "Specialist role"

### 9. Tools
1. **What the developer should understand:** A tool performs an action. A skill provides reusable instructions/workflows telling the agent how and when to use tools.
2. **What we would show:** A software collaborator at a compact workbench selecting one concrete action at a time: search, read, edit, or run.
3. **Why this visual helps:** Separates an action capability from the reusable workflow that guides the agent's use of that capability.
4. **Character use:** distinct software collaborator.
5. **Native overlay:** "Tool = action", "Search", "Read", "Edit", "Run".
6. **Concept example:** Use search to locate validation logic, edit to change it, and run tests to check the result.
7. **Treatment:** native-first illustration recommended.
8. **Owner preview sentence:** You would see a software collaborator choose a specific action from a workbench while a skill card provides the reusable workflow.

### 10. The Agentic Loop
1. **What the developer should understand:** The software works in a cycle of planning, acting, and checking, pausing for your approval when needed.
2. **What we would show:** A circular track where the software helper walks through stations (Plan, Act, Observe, Adjust) with Mergewell standing at a final "Verify" gate.
3. **Why this visual helps:** Shows a causal loop with a start, repeated work/evidence cycle, a human control point, and a visible exit when acceptance is met.
4. **Character use:** Mergewell and distinct software collaborator.
5. **Native overlay:** "Understand", "Plan", "Act", "Observe", "Adjust", "Verify".
6. **Concept example:** Move a bounded bug fix from its brief through observable actions and results to verification or an explicit stop.
7. **Treatment:** illustration required.
8. **Owner preview sentence:** You would see the software helper walking a circular path of planning and acting, stopping at Mergewell's gate for final verification.
* **Flagged language:** "Agentic Loop"
* **Proposed replacement:** "Work Cycle"

### 11. Planning Before Action
1. **What the developer should understand:** Always review the software's proposed plan of which files it will touch before it actually changes them.
2. **What we would show:** Mergewell looking at a physical map drawn by the software helper, showing the exact files it wants to edit.
3. **Why this visual helps:** Makes planning a concrete step that humans can verify before execution.
4. **Character use:** Mergewell.
5. **Native overlay:** "Proposed path", "Inspect repository -> Validator -> Message -> Tests".
6. **Concept example:** Review the proposed validator, message-component, test, risk, and stop-point route before edits.
7. **Treatment:** illustration recommended.
8. **Owner preview sentence:** You would see Mergewell looking over a drawn map of proposed file changes before giving the thumbs up.
* **Flagged language:** "Bounded plan"
* **Proposed replacement:** "Clear plan"

### 12. Approval Boundaries
1. **What the developer should understand:** Give the software only the permissions it needs. Decide which actions are allowed, which require approval, and which are not allowed before work begins, then pause again when a risky request appears.
2. **What we would show:** Three permission keys labeled "Allowed", "Ask First", and "Not Allowed", with Purrmission placing her paw on the approval gate when the software collaborator proposes installing a package.
3. **Why this visual helps:** Makes least-privilege access and the human approval boundary visible without confusing permissions with the tools themselves.
4. **Character use:** Mergewell and Purrmission.
5. **Native overlay:** "Allowed", "Ask first", "Not allowed", "Requested action", "Developer decision".
6. **Concept example:** Reject a proposed validation-package installation because dependency changes are outside the brief.
7. **Treatment:** illustration required.
8. **Owner preview sentence:** You would see three permission keys and Purrmission stopping a risky request until Mergewell explicitly approves or rejects it.
* **Flagged language:** "Least privilege"
* **Proposed replacement:** "Only the access needed"

### 13. Verification and Evidence
1. **What the developer should understand:** Do not trust the software when it says it is done; check the changed files and test results yourself.
2. **What we would show:** Mergewell sitting at a review desk, looking through physical printed sheets of code changes and green test results.
3. **Why this visual helps:** Shows that verification requires looking at real artifacts, not just reading the chat.
4. **Character use:** Mergewell.
5. **Native overlay:** "Changed files", "Tests", "Open risk", "Meets the brief".
6. **Concept example:** Compare the intended changed files, behavior tests, open risks, and requested outcome with the brief.
7. **Treatment:** illustration recommended.
8. **Owner preview sentence:** You would see Mergewell carefully inspecting printed code changes and test results at his desk.
* **Flagged language:** "Verification"
* **Proposed replacement:** "Checking the work"

### 14. Repository State as a Checkpoint
1. **What the developer should understand:** Use Git branches and commits as safe save points so you can review the work and easily undo mistakes.
2. **What we would show:** A timeline on a wall with clear pushpins for "Branch", "Diff", and "Commit", showing where it is safe to pause.
3. **Why this visual helps:** Connects the agent workflow back to standard, reliable Git mechanics.
4. **Character use:** character-world-only/no character.
5. **Native overlay:** "Branch", "Working diff", "Validation", "Reviewable commit".
6. **Concept example:** Use branches, diffs, validation, and commits as reviewable recovery points.
7. **Treatment:** native graphic preferred.
8. **Owner preview sentence:** You would see a simple timeline with pushpins marking safe Git save points for the software's work.
* **Flagged language:** "Repository State"
* **Proposed replacement:** "Git Save Points"

### 15. Security Before and After Push
1. **What the developer should understand:** Run `/security-review` to inspect the active changes before pushing, then treat push protection, code scanning, and dependency review as separate GitHub security evidence on the push or pull request.
2. **What we would show:** One local review lane feeding a GitHub repository checkpoint, followed by three distinct security gates for secrets, code findings, and dependency changes.
3. **Why this visual helps:** Prevents learners from treating one Copilot command as a complete security audit or confusing it with repository security controls.
4. **Character use:** character-world-only/no character.
5. **Native overlay:** "`/security-review`", "Active changes", "Push protection", "Code scanning", "Dependency review", "Human reviews findings".
6. **Concept example:** Review a code diff locally, push the reviewed checkpoint, and inspect each configured security result before continuing.
7. **Treatment:** native graphic preferred.
8. **Owner preview sentence:** You would see a local security review flow into separate GitHub gates that check secrets, code, and dependency changes.
* **Flagged language:** "Security audit"
* **Proposed replacement:** "Security review and repository checks"

### 16. GitHub Actions as Loop Feedback
1. **What the developer should understand:** Pushing code triggers automated checks, and you use those pass/fail results to decide what the software should do next.
2. **What we would show:** A factory conveyor belt where a pushed code box goes through a scanner (Actions), comes out with a red light, and gets sent back.
3. **Why this visual helps:** Shows that Actions are independent validators, not something the agent magically runs itself.
4. **Character use:** character-world-only/no character.
5. **Native overlay:** "Push", "Configured trigger", "Check results", "Developer decision".
6. **Concept example:** Use configured checks on a commit to choose revise, continue, or stop.
7. **Treatment:** native graphic preferred.
8. **Owner preview sentence:** You would see a code box passing through an automated scanner that flashes a red light, sending it back for fixes.
* **Flagged language:** "Configured trigger"
* **Proposed replacement:** "Automated rules"

### 17. Pull Requests as Agent Handoffs
1. **What the developer should understand:** A pull request is how the software hands the work, the proof, and any questions back to the human.
2. **What we would show:** The software helper handing Mergewell a structured folder labeled "Pull Request" containing code changes, test results, and a sticky note with a question.
3. **Why this visual helps:** Frames the PR as a communication package rather than automatic integration.
4. **Character use:** Mergewell and distinct software collaborator.
5. **Native overlay:** "What changed", "Proof to review", "Open question".
6. **Concept example:** Package the diff, check results, remaining uncertainty, and requested review in the pull request.
7. **Treatment:** illustration required.
8. **Owner preview sentence:** You would see the software helper physically handing Mergewell a complete review folder with all the proof inside.
* **Flagged language:** "Agent Handoffs"
* **Proposed replacement:** "Handoff to Humans"

### 18. Copilot Cloud Agent
1. **What the developer should understand:** You can send a task to a background cloud agent, but it works on its own branch and you still must review the final pull request.
2. **What we would show:** Two work tracks side-by-side: Mergewell typing on the local track, while a distinct cloud helper works on a remote track, both leading to Mergewell's review desk.
3. **Why this visual helps:** Clarifies that cloud agents do not bypass human review or merge their own PRs.
4. **Character use:** Mergewell and distinct software collaborator.
5. **Native overlay:** "Interactive work", "Cloud agent", "Mergewell (developer)".
6. **Concept example:** Decide whether a bounded, repository-scoped task is suitable for asynchronous cloud execution.
7. **Treatment:** illustration required.
8. **Owner preview sentence:** You would see a split track showing Mergewell working locally on one side, and the cloud helper working remotely on the other, both meeting at Mergewell's review desk.
* **Flagged language:** "Asynchronous work"
* **Proposed replacement:** "Background work"

### 19. Cloud-Agent Handoffs
1. **What the developer should understand:** When sending work to the cloud, you must package the exact goal, limits, and checks before it leaves your desk.
2. **What we would show:** Mergewell using the "Fresh Lead" shoulder gadget to pack a secure briefcase with rules before handing it to the cloud helper.
3. **Why this visual helps:** Reinforces that cloud work needs more explicit boundaries than local interactive chat.
4. **Character use:** Mergewell.
5. **Native overlay:** "Goal", "Limits", "What comes back".
6. **Concept example:** Package the goal, current repository state, scope, permissions, checks, stops, and expected return evidence for cloud work.
7. **Treatment:** illustration recommended.
8. **Owner preview sentence:** You would see Mergewell carefully packing a briefcase with rules and limits before sending it off to the cloud helper.
* **Flagged language:** "High-autonomy handoff packet"
* **Proposed replacement:** "Clear rules for background work"

### 20. Manage Cloud Agents from GitHub Mobile
1. **What the developer should understand:** In GitHub Mobile, an eligible user can start a cloud-agent session or assign an issue, track its progress notifications, review the visible diff, iterate, and review the resulting pull request—while keeping final acceptance a separate human decision.
2. **What we would show:** Mergewell away from his desk using a phone to start a session, tracking its progress through documented states like "In progress" or "Completed", reviewing the visible diff, and reviewing the resulting pull request still waiting at his desk.
3. **Why this visual helps:** Makes remote assignment and oversight concrete while showing the exact supported flow—starting, tracking, reviewing diffs, and iterating—without inventing unsupported chat controls.
4. **Character use:** Mergewell and distinct remote software collaborator.
5. **Native overlay:** "GitHub Mobile", "Start or assign", "Track status", "Review diff", "Iterate", "Review pull request".
6. **Concept example:** Start a remote coding session from a mobile device, track its progress notifications, review the current diff, iterate, and return to the resulting pull request for evidence-based review.
7. **Treatment:** illustration recommended.
8. **Owner preview sentence:** You would see Mergewell assign the cloud helper from his phone, track its progress and review the diff, iterate, and review the resulting pull request waiting for human review.
* **Flagged language:** "Manage cloud agents"
* **Proposed replacement:** "Track and iterate background work"

### 21. Teach Copilot How Your Project Works with `/init`
1. **What the developer should understand:** Run `/init` after a new project has its initial structure, language or framework, dependencies, and real build and test commands—but before broad agentic work. It analyzes the repository and drafts `.github/copilot-instructions.md` with project structure, common commands, conventions, and guidance that the developer must review.
2. **What we would show:** A project-start timeline: scaffold the repository, add working build and test commands, run `/init`, review and correct the proposed instructions, then commit the approved file.
3. **Why this visual helps:** Shows both what `/init` produces and the best time to run it, while preventing the misconception that generated team guidance is automatically correct.
4. **Character use:** Mergewell.
5. **Native overlay:** "1 -> Scaffold", "2 -> Build + test work", "3 -> Run `/init`", "4 -> Review + correct", "5 -> Commit `.github/copilot-instructions.md`".
6. **Concept example:** Initialize instructions once the project's real commands and conventions are visible; revisit them after major framework, architecture, or workflow changes.
7. **Treatment:** native graphic preferred.
8. **Owner preview sentence:** You would see exactly when to run `/init`, what repository guidance it drafts, and the human review required before committing it.
* **Flagged language:** "Repository Instructions"
* **Proposed replacement:** "Team Rules"

### 22. Agentic Optimization
1. **What the developer should understand:** You get better results by giving the software fewer files to read and specific tests to run, rather than just hitting retry.
2. **What we would show:** A side-by-side comparison: a messy, noisy funnel failing to produce a fix versus a clean, targeted funnel working perfectly.
3. **Why this visual helps:** Moves optimization from "AI magic" to standard developer focus.
4. **Character use:** character-world-only/no character.
5. **Native overlay:** "Before -> noisy process", "After -> focused process".
6. **Concept example:** Compare noisy and focused task context, check breadth, retries, and proof quality without promising savings.
7. **Treatment:** native graphic preferred.
8. **Owner preview sentence:** You would see a before-and-after diagram showing how removing extra files and running targeted tests makes the software succeed.
* **Flagged language:** "Agentic Optimization"
* **Proposed replacement:** "Getting Better Results"

### 23. Make Cost-Conscious Choices Before You Start
1. **What the developer should understand:** Start with Auto, regular context, and regular reasoning where the selected Copilot surface supports them. Auto routes each task to an eligible model based on the work and availability, and paid plans currently receive a 10% discount on the routed model cost; it does not guarantee the cheapest successful result.
2. **What we would show:** Mergewell choosing three clear pre-run controls—Auto, regular context, and regular reasoning—while the software collaborator waits. A smaller CLI-specific tip card shows the optional soft session limit, and result quality plus available AI-credit usage remain the evidence for the next decision.
3. **Why this visual helps:** Separates broadly useful starting choices from the CLI-specific spending control and keeps quality—not cost alone—as the success measure.
4. **Character use:** Mergewell and distinct software collaborator.
5. **Native overlay:** "Start with Auto", "Regular context", "Regular reasoning", "Paid plans: current 10% Auto model-cost discount", "CLI tip: `/limits set max-ai-credits NUMBER`", "Public preview", "Soft session limit", "Check quality + available usage".
6. **Concept example:** Begin a supported agent task with Auto and regular settings; increase context or reasoning only when complexity justifies it. In Copilot CLI, optionally set a soft per-session AI-credit limit before a bounded run.
7. **Treatment:** illustration required.
8. **Owner preview sentence:** You would see Mergewell start with Auto and regular settings, with the CLI session limit clearly presented as an optional product-specific tip rather than a universal control.

### 24. Code Quality, Copilot Review, and Human Acceptance
1. **What the developer should understand:** Automated scans, AI reviews, and test results are just information; only the human decides to merge the code.
2. **What we would show:** Mergewell sitting at the final review desk. Four distinct paper streams (Diff, Actions, Code Quality, Copilot Review) land on his desk, while Purrmission guards the big green "MERGE" button.
3. **Why this visual helps:** Keeps Actions, Code Quality, Copilot review, diff, and human acceptance visibly separate.
4. **Character use:** Mergewell and Purrmission.
5. **Native overlay:** "Diff", "Ordinary GitHub Actions", "GitHub Code Quality", "GitHub Copilot code review", "HUMAN DECISION".
6. **Concept example:** Keep the diff, Actions, Code Quality, and Copilot review evidence separate before the human acceptance decision.
7. **Treatment:** illustration required.
8. **Owner preview sentence:** You would see four different streams of information arriving at Mergewell's desk, where he makes the final decision to push the merge button guarded by Purrmission.
* **Flagged language:** "Human Acceptance"
* **Proposed replacement:** "Human Approval"

### 25. Your Mission: Hand Off Work with Confidence
1. **What the developer should understand:** It is time to carry the Foundations case forward, delegate one bounded multi-file task, and return inspected evidence with separate module totals.
2. **What we would show:** A native mission briefing with four cards covering the Foundations case-file entry, the 45-minute scored envelope, the Purrmission safety checkpoint, and the evidence export.
3. **Why this visual helps:** Prepares them for the scored mission without duplicating the exact steps on the slide.
4. **Character use:** Agent Mergewell and Purrmission in native briefing framing.
5. **Native overlay:** "MODULE 2 · 45 MIN", "Bring your Foundations case file", "50 core · 40 required · +10 bonus cap", "Safety checkpoint", "Bring back scores and evidence".
6. **Mission:** Scored Module 2 mission.
7. **Treatment:** native graphic preferred.
8. **Owner preview sentence:** You would see a concise mission briefing that points participants from the Foundations case file into one bounded 45-minute scored task with a clear safety and evidence return path.

---

## Next Human Decisions
- **(A) Content-language direction:** Approve or revise the flagged terminology replacements to ensure developer clarity.
- **(B) Visual-intent concepts:** Approve or revise the concrete physical scenes proposed for each slide.
- **(C) Storyboard progression:** Only after (A) and (B) are approved, decide whether any concepts should proceed to storyboard and look development.
