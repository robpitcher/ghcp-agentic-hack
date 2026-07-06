---
name: GitHub Enterprise Product Manager Skill
description: Use this skill when a product, program, or project manager uses GitHub Enterprise to shape requirements, manage delivery, review progress, coordinate stakeholders, and summarize evidence responsibly.
icon: 📋
audience: Product managers, program managers, project managers, delivery leads, and engineering managers using GitHub Enterprise
order: 5
---

# GitHub Enterprise Product Manager Skill

Use this skill to help GitHub Copilot support product and program management work in GitHub Enterprise with clear requirements, traceable delivery evidence, and responsible stakeholder communication. It focuses Copilot on issues, Projects, milestones, pull request signals, dependencies, release readiness, governance boundaries, and decision records without letting generated summaries replace owner judgment.

## When to Use This Skill

- You are turning product ideas, stakeholder feedback, incidents, or roadmap goals into GitHub issues, epics, acceptance criteria, or delivery plans.
- You need Copilot to summarize issue threads, pull request discussions, project status, release risks, dependencies, or decision history.
- You are preparing stakeholder updates, sprint reviews, release notes, launch checklists, or executive summaries from GitHub Enterprise evidence.
- You want Copilot to improve requirements clarity, split work, identify missing acceptance criteria, or surface dependency and governance risks.
- You need to coordinate across engineering, QA, security, support, operations, and business stakeholders while preserving traceability.

## Core Operating Principles

| Principle | Guidance |
|-----------|----------|
| Start from GitHub evidence | Ground summaries in issues, Projects, milestones, pull requests, checks, discussions, releases, and decision records. |
| Preserve owner decisions | Separate team decisions, stakeholder asks, Copilot suggestions, and open questions. |
| Make scope explicit | Capture goals, non-goals, acceptance criteria, dependencies, constraints, risks, and release gates. |
| Avoid false certainty | Label stale data, missing owners, unresolved blockers, and assumptions instead of smoothing them away. |
| Respect enterprise boundaries | Treat permissions, private repos, audit needs, security findings, and sensitive roadmap details as governed data. |
| Human accountability | Treat generated plans, summaries, release notes, and stakeholder messages as drafts until reviewed by the accountable owner. |

## Recommended Setup

1. Open the relevant GitHub Enterprise repository, Project, milestone, issue list, pull request list, or release evidence in the browser or VS Code.
2. Include approved links, issue text, project fields, acceptance criteria, pull request summaries, check results, labels, milestones, discussions, and release notes.
3. Identify the task type: requirement shaping, backlog refinement, dependency mapping, project status, risk review, release readiness, stakeholder update, or decision log.
4. Confirm which GitHub Enterprise fields matter, such as owners, labels, milestones, iteration, priority, status, risk, target release, and security review.
5. Provide only approved non-sensitive excerpts. Reference private issues, customer names, incidents, or roadmap items by safe identifiers when possible.
6. Ask Copilot to cite the GitHub source for each summary point and mark missing or stale evidence.

> **Important**: Do not paste confidential roadmap details, customer data, private security findings, credentials, financial data, regulated records, or sensitive internal discussions into Copilot unless approved for that environment. Use links, issue IDs, or sanitized excerpts when possible.

## GitHub Enterprise Evidence Map

Use this map when asking Copilot to reason about PM work:

| Artifact | What to Ask Copilot For | Review Risk |
|----------|--------------------------|-------------|
| Issue | Problem statement, user value, acceptance criteria, owner, dependencies, labels, and open questions. | Vague issues can look actionable while hiding missing decisions. |
| Project view | Status, priority, iteration, blocked items, stale work, owners, risk, and delivery trend. | Project fields may be out of date or inconsistently maintained. |
| Milestone | Scope, completion, blockers, pull request status, risk items, and release readiness. | Milestones can hide cross-repo dependencies or unmerged work. |
| Pull request | User-facing change, review status, checks, linked issues, risk, rollout notes, and documentation impact. | PR summaries may omit failed checks, unresolved comments, or release gates. |
| Discussion or decision record | Options considered, decision, owner, rationale, follow-ups, and unresolved questions. | Generated summaries can blur decisions with suggestions. |
| Release evidence | Included work, excluded work, known risks, validation, approvals, rollback notes, and stakeholder message. | Release notes can overstate readiness if evidence is incomplete. |

## Prompt Patterns

### Refine an Issue

```text
Refine this GitHub issue for delivery. Produce a clearer problem statement, user value, acceptance criteria, non-goals, dependencies, risks, owner questions, and suggested labels. Do not invent decisions that are not in the issue. #selection
```

### Summarize Project Status

```text
Summarize this GitHub Project status for stakeholders. Include completed work, in-progress work, blocked items, stale items, scope changes, dependency risks, owner decisions needed, and confidence level. Cite the evidence source for each major point.
```

### Prepare a Sprint or Iteration Review

```text
Create an iteration review from these issues and pull requests. Group by outcome, summarize customer or business value, identify unfinished work, call out risks, and list follow-up decisions. Separate shipped, ready, blocked, and deferred work.
```

### Draft Release Notes

```text
Draft release notes from these merged pull requests and issues. Include user-facing changes, admin or operator notes, migration or rollout considerations, known limitations, validation evidence, and links to source items. Mark anything that needs owner confirmation.
```

### Map Dependencies and Risks

```text
Analyze these issues for delivery dependencies and risks. Identify cross-team dependencies, sequencing constraints, security or compliance gates, QA needs, documentation needs, unresolved decisions, and suggested next owner actions.
```

## Safe PM Workflow

Use this workflow for GitHub Enterprise PM tasks:

| Stage | Output | Approval Gate |
|-------|--------|---------------|
| Intake | Goal, audience, source artifacts, data sensitivity, and decision owner | Confirm approved evidence and communication scope |
| Shape | Problem statement, user value, acceptance criteria, non-goals, and open questions | Product owner approves scope |
| Plan | Issues, milestones, dependencies, labels, project fields, risks, and release gates | Delivery team confirms feasibility |
| Track | Status summary, blockers, stale work, owner actions, and changes from plan | Accountable owners update source of truth |
| Review | PR evidence, validation, QA status, security review, docs, and rollout notes | Release owner confirms readiness |
| Communicate | Stakeholder update, release notes, decision log, and follow-up actions | PM or program owner approves message |

## GitHub Enterprise PM Checklist

- Confirm the source of truth: repository, Project, milestone, issue set, release, or discussion.
- Make goals, non-goals, acceptance criteria, dependencies, risks, and owner decisions explicit.
- Check labels, status fields, milestones, iterations, assignees, reviewers, and linked pull requests for consistency.
- Identify stale issues, blocked work, failed checks, unresolved review comments, missing QA evidence, and documentation gaps.
- Separate shipped, merged, validated, ready, blocked, deferred, and descoped work.
- Preserve links or identifiers back to GitHub Enterprise evidence for every major status claim.
- Review stakeholder messages for confidentiality, customer sensitivity, roadmap sensitivity, and audience-appropriate detail.
- Keep generated project updates and release notes as drafts until approved by the accountable PM, engineering lead, or release owner.

## Stop Conditions

Stop and ask for human guidance when any of these appear:

- The source data is stale, inconsistent, incomplete, or spread across private locations that Copilot cannot see.
- A generated update could disclose confidential roadmap, customer, security, incident, financial, or regulated information.
- Acceptance criteria, owner decisions, release gates, or risk acceptance are unclear.
- Pull request checks, security findings, QA validation, documentation, or release approvals are missing.
- The prompt asks Copilot to make a product, staffing, launch, customer commitment, or risk acceptance decision on behalf of an owner.
- Copilot cannot cite evidence for a project status, delivery claim, or release recommendation.

## GitHub Enterprise PM Instruction Template

Create `.github/copilot-instructions.md` in the target repository and adapt this template:

```markdown
# Copilot Instructions — GitHub Enterprise PM

- Ground PM summaries in GitHub Enterprise evidence: issues, Projects, milestones, pull requests, checks, discussions, releases, and decision records.
- Separate shipped, merged, validated, ready, blocked, deferred, and descoped work.
- Do not invent acceptance criteria, owner decisions, release commitments, risk acceptance, or stakeholder approvals.
- Preserve links or identifiers back to the source items for major claims.
- Mark stale data, missing owners, failed checks, unresolved comments, security gates, QA gaps, and documentation gaps.
- Do not expose confidential roadmap details, customer data, private security findings, credentials, financial data, regulated records, or sensitive internal discussions.
- Treat generated stakeholder updates, release notes, plans, and decision summaries as drafts until reviewed by the accountable owner.
- Prefer concise updates with owner actions, evidence, risks, and decisions needed.
```

## Usage Optimization Tips

- Provide issue IDs, project fields, milestone names, and PR links instead of asking for broad repository-wide summaries.
- Ask Copilot to refine one issue, milestone, release, or stakeholder update at a time.
- Reuse templates for issue refinement, iteration review, release readiness, and stakeholder updates.
- Keep durable delivery conventions in repository instructions and keep temporary project state in GitHub Enterprise source-of-truth items.
- Ask for missing decisions and evidence before asking for polished stakeholder language.

*Technology skill for GitHub Enterprise Product Managers — GitHub Copilot Developer Training*
