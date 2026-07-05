# Module 1: Foundations — C++ / Hardware Skill Track Quiz

---

### 1. For an embedded C++ project, which Stage 1 Copilot use is safest?

- A) Ask Copilot CLI to run generated flashing commands immediately
- B) Use Copilot to inspect project structure and review commands before execution
- C) Paste board credentials so Copilot can infer deployment settings
- D) Skip explanations because firmware commands are usually harmless

<!--answer: B-->
<!--explanation: Stage 1 emphasizes baseline awareness, safe surface selection, and review before generated commands affect files, dependencies, remotes, or devices.-->

---

### 2. Which Copilot surface is best for a first explanation of a selected C++ register helper?

- A) VS Code chat with the relevant selection or file scoped
- B) A broad cloud-agent task with write access
- C) A plugin installation workflow
- D) A terminal command that rewrites the helper

<!--answer: A-->
<!--explanation: The Foundations module teaches scoped, low-risk interactions first. A selected file or selection gives useful context without unnecessary autonomy.-->

---

### 3. What should a developer do before accepting generated terminal commands in a firmware repo?

- A) Run them quickly to see whether they fail
- B) Review what files, dependencies, devices, or remote systems they touch
- C) Disable explanations to reduce tokens
- D) Add secrets to make the command more accurate

<!--answer: B-->
<!--explanation: CLI safety requires human review before executing commands, especially commands that change files, install dependencies, flash hardware, or touch remote systems.-->

---

### 4. Which model-routing choice best matches a complex driver modernization plan?

- A) Always use the cheapest response regardless of ambiguity
- B) Reserve deeper reasoning for ambiguity-heavy planning and risk sequencing
- C) Use no context because C++ projects are too large
- D) Use only the newest model for every small explanation

<!--answer: B-->
<!--explanation: The module teaches matching model depth to task complexity so deeper reasoning is reserved for work that needs planning, risk analysis, and tradeoffs.-->

---

### 5. Why is `compile_commands.json` useful for Copilot-assisted C++ work?

- A) It replaces human review
- B) It gives build context such as include paths, defines, standards, and target flags
- C) It stores private board credentials
- D) It lets agents flash hardware without approval

<!--answer: B-->
<!--explanation: Build context improves C++ understanding and reduces noisy broad prompts, while safety and validation remain human responsibilities.-->

---

### 6. Which Foundations outcome is appropriate for custom-agent work?

- A) Create production `.github\agents` files immediately
- B) Draft guardrails, stop conditions, permissions, and validation evidence for later use
- C) Remove review gates so the future agent can move faster
- D) Give the future agent unrestricted terminal access

<!--answer: B-->
<!--explanation: Foundations may draft delegation guardrails, but concrete repo-local skill and custom-agent artifacts belong in the Agentic module.-->

---

*Quiz for Module 1 Foundations — C++ / Hardware skill track*
