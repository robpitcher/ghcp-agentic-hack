---
name: QA Engineer Skill
description: Use this skill when planning, reviewing, automating, or interpreting software quality work with GitHub Copilot, including test strategy, defects, regression risk, CI evidence, and release readiness.
icon: 🧪
audience: QA engineers, test automation engineers, SDETs, release testers, and quality leads
order: 4
---

# QA Engineer Skill

Use this skill to help GitHub Copilot support quality engineering work with clear test intent, traceable evidence, and responsible review gates. It focuses Copilot on risk-based test planning, test automation, exploratory testing, defect analysis, CI evidence, regression impact, and release readiness without treating generated tests as proof that the product is correct.

## When to Use This Skill

- You are creating or reviewing test plans, acceptance tests, regression suites, automated tests, exploratory charters, or release readiness evidence.
- You need Copilot to explain feature behavior, identify risk areas, map requirements to test cases, or propose coverage gaps.
- You are debugging flaky tests, failing CI jobs, defect reports, environment drift, or inconsistent reproduction steps.
- You want Copilot to draft test data, test cases, automation scaffolds, page objects, API checks, or negative-path scenarios for human review.
- You need to summarize quality evidence for a pull request, release candidate, incident review, or stakeholder update.

## Core Operating Principles

| Principle | Guidance |
|-----------|----------|
| Test risk, not only code | Prioritize user impact, business risk, data risk, security risk, integration boundaries, and regression history. |
| Preserve traceability | Connect requirements, user stories, acceptance criteria, defects, test cases, automation, CI runs, and release decisions. |
| Separate evidence from confidence | Distinguish passing tests from actual quality confidence, known gaps, and untested assumptions. |
| Keep automation maintainable | Prefer readable tests with stable selectors, clear assertions, deterministic data, and useful failure output. |
| Investigate before fixing | Reproduce failures, isolate environment and data factors, and classify flakes before changing tests or product code. |
| Human accountability | Treat generated tests, defect analysis, and release summaries as drafts until reviewed by the quality owner and delivery team. |

## Recommended Setup

1. Open the product repository, test repository, or quality evidence package in VS Code.
2. Include approved sources such as requirements, user stories, acceptance criteria, product notes, test plans, defect reports, CI output, logs, API contracts, screenshots, or sanitized data fixtures.
3. Identify the task type: test planning, automation design, defect triage, failure investigation, coverage review, release readiness, or quality reporting.
4. Confirm the test stack, runner, environments, data strategy, browser or device matrix, service dependencies, and CI workflow names.
5. Provide only approved, non-sensitive logs, screenshots, payloads, and test data.
6. Ask Copilot to cite the source of each recommendation and label any assumption that is not backed by evidence.

> **Important**: Do not paste production data, credentials, customer records, regulated data, private screenshots, access tokens, or confidential incident details into Copilot. Use sanitized examples and reference secure systems by name rather than exposing their contents.

## QA Evidence Map

Use this map when asking Copilot to reason about quality work:

| Artifact | What to Ask Copilot For | Review Risk |
|----------|--------------------------|-------------|
| Requirement or user story | Acceptance criteria, risk areas, edge cases, missing examples, and test ideas. | Ambiguous requirements can produce confident but invalid tests. |
| Test plan | Coverage by workflow, persona, data shape, browser/device, integration, failure mode, and regression risk. | Plans may over-focus on happy paths and miss operational failures. |
| Automated test | Intent, setup, action, assertion quality, selector stability, data isolation, waits, and cleanup. | A passing test can assert implementation details instead of user-visible behavior. |
| CI failure | Failing command, stack trace, environment, changed files, rerun evidence, and likely failure class. | Retrying without classification can hide product defects or unstable infrastructure. |
| Defect report | Reproduction steps, expected behavior, actual behavior, severity, impact, evidence, and missing data. | Poor defect reports slow triage and can cause duplicate or unactionable issues. |
| Release evidence | Passed checks, failed or skipped checks, known gaps, risk acceptance, owners, and rollback notes. | A release summary can omit untested areas or unresolved quality concerns. |

## Prompt Patterns

### Create a Risk-Based Test Plan

```text
Create a risk-based test plan for this requirement. Include assumptions, personas, core workflows, edge cases, negative paths, integration boundaries, data variations, regression risks, and traceability to the acceptance criteria. Mark any unclear requirement as an open question.
```

### Review Test Automation

```text
Review this test for intent, setup, action, assertions, data isolation, selector stability, waits, cleanup, readability, and failure diagnostics. Do not rewrite it yet; list risks and recommended changes first. #file
```

### Investigate a CI Failure

```text
Analyze this failing CI output. Identify the exact failing command, failure class, likely cause, required evidence, safe rerun strategy, and whether this looks like product behavior, test code, environment, dependency, or data setup. Separate observed evidence from hypotheses.
```

### Improve a Defect Report

```text
Improve this defect report for engineering triage. Include title, environment, build or commit, steps to reproduce, expected behavior, actual behavior, evidence, severity, impact, suspected scope, and missing questions. Do not invent missing facts.
```

### Summarize Release Readiness

```text
Create a release readiness summary from this quality evidence. Include passed checks, failed checks, skipped checks, known risks, untested areas, defect status, owner decisions, rollback notes, and the recommendation with confidence.
```

## Safe QA Workflow

Use this workflow for QA tasks:

| Stage | Output | Approval Gate |
|-------|--------|---------------|
| Intake | Scope, requirements, environment, test stack, data sensitivity, and evidence sources | Confirm approved inputs and quality owner |
| Analyze | Risk map, coverage gaps, assumptions, and unclear requirements | Product and QA review scope |
| Design | Test cases, automation approach, data plan, and validation strategy | QA lead or team reviewer approves |
| Build | Narrow tests, fixtures, helper updates, or defect documentation | Peer review before merge |
| Validate | Test run output, CI evidence, rerun notes, failure classification, and coverage summary | Team accepts evidence and known gaps |
| Report | Release readiness, defects, risks, and owner decisions | Release owner approves or blocks |

## QA Review Checklist

- Confirm every test maps to a requirement, defect, risk, or explicit exploratory charter.
- Check happy path, negative path, boundary values, authorization, validation, accessibility, localization, performance-sensitive paths, and integration failures where relevant.
- Verify automated tests use deterministic data, stable selectors or contracts, meaningful assertions, clear failure messages, and cleanup.
- Review CI evidence for the exact command, environment, commit, artifacts, retries, skipped tests, and known flakes.
- Classify failures before applying fixes: product defect, test defect, flaky timing, environment drift, dependency issue, or data setup problem.
- Identify untested areas and make risk acceptance explicit rather than hiding gaps behind passing checks.
- Ensure release notes and defect reports avoid production data, secrets, customer identifiers, or regulated information.
- Keep generated test assets reviewable and aligned with the repository's existing test runner and conventions.

## Stop Conditions

Stop and ask for human guidance when any of these appear:

- Acceptance criteria, expected behavior, severity, or release risk is unclear.
- Test data may contain production, customer, regulated, credential, or private information.
- The proposed test change would mask failures, loosen assertions, skip checks, or delete coverage without owner approval.
- A CI failure affects security, payments, identity, permissions, data loss, compliance, or customer-facing availability.
- Required environments, credentials, devices, services, or test data are unavailable.
- Copilot cannot cite evidence for a quality conclusion or release recommendation.

## QA Instruction Template

Create `.github/copilot-instructions.md` in the target repository and adapt this template:

```markdown
# Copilot Instructions — QA Engineering

- Treat tests as quality evidence, not proof of correctness.
- Connect requirements, acceptance criteria, defects, test cases, automation, CI runs, and release decisions.
- Separate observed evidence from assumptions, hypotheses, and risk acceptance.
- Do not weaken assertions, skip tests, remove coverage, or change release gates without human approval.
- Prefer deterministic test data, stable selectors or contracts, clear assertions, useful failure messages, and cleanup.
- Classify failures before fixing: product defect, test defect, flaky timing, environment drift, dependency issue, or data setup problem.
- Do not paste production data, secrets, credentials, customer records, regulated data, or private screenshots into Copilot.
- Summarize known gaps and untested areas explicitly in release readiness output.
```

## Usage Optimization Tips

- Provide the requirement, acceptance criteria, changed files, and failing output before asking for test recommendations.
- Ask for a risk map before requesting a large test suite so Copilot can focus on the highest-value coverage.
- Reuse standard defect, test-plan, and release-readiness templates instead of restating them in every prompt.
- Keep prompts scoped to one feature, workflow, defect, or failing CI job at a time.
- Store durable quality conventions in repository instructions and keep temporary triage details in the current chat or issue.

*Technology skill for QA Engineers — GitHub Copilot Developer Training*
