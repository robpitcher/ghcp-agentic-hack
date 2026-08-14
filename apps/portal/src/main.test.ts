import { describe, expect, it } from "vitest";
import {
  buildCaseFileText,
  calculateMissionScore,
  getMissionStorageKey,
  isScoredMission,
  loadMissionProgress,
  normalizeMission,
  parseMissionProgress,
  renderModule,
  renderMissionBackLink,
  summarizeWorkshopScores,
  type CatalogMission,
  type CatalogModule,
  type CatalogWorkshop,
  type MissionProgress,
  type StorageLike
} from "./main.js";

function createStorage(seed: Record<string, string> = {}): StorageLike {
  const entries = new Map(Object.entries(seed));
  return {
    getItem(key) {
      return entries.has(key) ? entries.get(key) ?? null : null;
    },
    setItem(key, value) {
      entries.set(key, value);
    },
    removeItem(key) {
      entries.delete(key);
    }
  };
}

function createMission(id: string, title: string): CatalogMission {
  return {
    id,
    title,
    durationMinutes: 45,
    route: `workshops/test/${id}/`,
    objectiveRefs: ["Use bounded context"],
    prerequisites: [],
    startingState: "Ready",
    goal: `Complete ${title}`,
    task: "Find the clues",
    constraints: [],
    evidence: ["Case file"],
    safetyCheckpoints: [],
    corePath: ["Complete the core clues"],
    stretchPath: [],
    debrief: ["What changed?"],
    validation: ["Explain the evidence."],
    casePacket: ["Create the repository."],
    harnesses: [{
      id: "copilot-cli",
      title: "Copilot CLI",
      description: "Use Copilot in the terminal.",
      instructions: ["Stay in scope."]
    }],
    coreClues: [
      {
        id: `${id}-core-1`,
        title: "Core 1",
        points: 10,
        objectiveRef: "Use bounded context",
        scene: "Scene 1",
        actions: ["Act 1"],
        routes: [{ harness: "copilot-cli", instructions: ["Start in the repo root."] }],
        evidence: "Evidence 1",
        hints: ["Hint 1"],
        safetyCheckpoint: "Check 1"
      },
      {
        id: `${id}-core-2`,
        title: "Core 2",
        points: 10,
        objectiveRef: "Use bounded context",
        scene: "Scene 2",
        actions: ["Act 2"],
        routes: [{ harness: "copilot-cli", instructions: ["Keep the context narrow."] }],
        evidence: "Evidence 2",
        hints: ["Hint 2"],
        safetyCheckpoint: "Check 2"
      },
      {
        id: `${id}-core-3`,
        title: "Core 3",
        points: 10,
        objectiveRef: "Use bounded context",
        scene: "Scene 3",
        actions: ["Act 3"],
        routes: [{ harness: "copilot-cli", instructions: ["Verify before accepting."] }],
        evidence: "Evidence 3",
        hints: ["Hint 3"],
        safetyCheckpoint: "Check 3"
      },
      {
        id: `${id}-core-4`,
        title: "Core 4",
        points: 10,
        objectiveRef: "Use bounded context",
        scene: "Scene 4",
        actions: ["Act 4"],
        routes: [{ harness: "copilot-cli", instructions: ["Record the evidence."] }],
        evidence: "Evidence 4",
        hints: ["Hint 4"],
        safetyCheckpoint: "Check 4"
      }
    ],
    bonusClues: [
      {
        id: `${id}-bonus-1`,
        title: "Bonus 1",
        points: 10,
        objectiveRef: "Use bounded context",
        scene: "Bonus scene 1",
        actions: ["Bonus act 1"],
        routes: [],
        evidence: "Bonus evidence 1",
        hints: ["Bonus hint 1"],
        safetyCheckpoint: "Bonus check 1"
      },
      {
        id: `${id}-bonus-2`,
        title: "Bonus 2",
        points: 10,
        objectiveRef: "Use bounded context",
        scene: "Bonus scene 2",
        actions: ["Bonus act 2"],
        routes: [],
        evidence: "Bonus evidence 2",
        hints: ["Bonus hint 2"],
        safetyCheckpoint: "Bonus check 2"
      }
    ],
    completionPoints: 40,
    bonusPointCap: 10,
    carryForward: {
      artifact: "Case file",
      produces: ["Verified evidence"],
      consumes: []
    }
  };
}

const foundationsMission = createMission("foundations-mission", "Foundations mission");
const agenticMission = createMission("agentic-mission", "Agentic mission");

const workshop: CatalogWorkshop = {
  id: "ghcp-dev-hack",
  title: "GitHub Copilot Developer Hack",
  description: "Workshop",
  duration: "7 hours",
  format: "custom",
  level: "mixed",
  tags: [],
  prerequisites: [],
  route: "workshops/ghcp-dev-hack/",
  deliveryVariants: [],
  modules: [
    {
      id: "foundations",
      title: "Foundations",
      description: "Foundations module",
      duration: "45 minutes",
      route: "workshops/ghcp-dev-hack/foundations/",
      status: "draft",
      missions: [foundationsMission]
    },
    {
      id: "agentic",
      title: "Agentic Development",
      description: "Agentic module",
      duration: "45 minutes",
      route: "workshops/ghcp-dev-hack/agentic/",
      status: "draft",
      missions: [agenticMission]
    }
  ]
};

describe("mission navigation", () => {
  it("returns from a mission to its active module deck", () => {
    const agenticModule = workshop.modules.find((module) => module.id === "agentic");
    expect(agenticModule).toBeDefined();
    if (!agenticModule) throw new Error("Agentic test module is missing");

    expect(renderMissionBackLink(agenticModule)).toContain(
      `href="${import.meta.env.BASE_URL}workshops/ghcp-dev-hack/agentic/"`
    );
    expect(renderMissionBackLink(agenticModule)).toContain(
      "Back to Agentic Development"
    );
  });
});

describe("workshop module navigation", () => {
  it("opens slides and missions in new tabs while preserving the workshop page", () => {
    const foundationsModule = workshop.modules.find((module) => module.id === "foundations");
    expect(foundationsModule).toBeDefined();
    if (!foundationsModule) throw new Error("Foundations test module is missing");

    const html = renderModule(foundationsModule);
    expect(html).toContain(
      `href="${import.meta.env.BASE_URL}workshops/ghcp-dev-hack/foundations/"`
    );
    expect(html).toContain('target="_blank" rel="noopener noreferrer"');
    expect(html).toContain("Foundations slides (opens in new tab)");
    expect(html).toContain("Foundations mission, 45 minutes (opens in new tab)");
  });
});

describe("mission progress helpers", () => {
  it("parses saved mission progress and keeps only valid string evidence", () => {
    expect(parseMissionProgress(JSON.stringify({
      harness: "copilot-cli",
      completed: ["clue-1", "clue-1", "clue-2"],
      evidence: { "clue-1": "Saved evidence", bad: 1 },
      alias: "mergewell",
      followUp: "Review the diff"
    }))).toEqual({
      harness: "copilot-cli",
      completed: ["clue-1", "clue-2"],
      evidence: { "clue-1": "Saved evidence" },
      alias: "mergewell",
      followUp: "Review the diff"
    });
  });

  it("falls back safely when saved local progress is invalid", () => {
    const storage = createStorage({ broken: "{not-json" });
    expect(loadMissionProgress(storage, "broken")).toEqual({
      progress: {
        completed: [],
        evidence: {},
        alias: "",
        followUp: ""
      },
      warning: expect.stringContaining("Local progress could not be loaded")
    });
  });
});

describe("score summaries", () => {
  it("caps bonus totals and aggregates module and workshop scores", () => {
    const foundationsKey = getMissionStorageKey(workshop.id, "foundations", foundationsMission.id);
    const storage = createStorage({
      [foundationsKey]: JSON.stringify({
        harness: "copilot-cli",
        completed: [
          "foundations-mission-core-1",
          "foundations-mission-core-2",
          "foundations-mission-core-3",
          "foundations-mission-core-4",
          "foundations-mission-bonus-1",
          "foundations-mission-bonus-2"
        ],
        evidence: {},
        alias: "mergewell",
        followUp: "Carry it forward"
      } satisfies MissionProgress)
    });

    const currentProgress: MissionProgress = {
      harness: "copilot-cli",
      completed: [
        "agentic-mission-core-1",
        "agentic-mission-core-2",
        "agentic-mission-core-3",
        "agentic-mission-bonus-1",
        "agentic-mission-bonus-2"
      ],
      evidence: {},
      alias: "mergewell",
      followUp: "Prepare the next task"
    };

    const summary = summarizeWorkshopScores(workshop, storage, {
      moduleId: "agentic",
      missionId: agenticMission.id,
      progress: currentProgress
    });

    expect(summary.modules).toEqual([
      {
        moduleId: "foundations",
        moduleTitle: "Foundations",
        core: 40,
        bonus: 10,
        total: 50,
        scoredMissionCount: 1,
        completedMissionCount: 1
      },
      {
        moduleId: "agentic",
        moduleTitle: "Agentic Development",
        core: 30,
        bonus: 10,
        total: 40,
        scoredMissionCount: 1,
        completedMissionCount: 0
      }
    ]);
    expect(summary.cumulative).toEqual({ core: 70, bonus: 20, total: 90 });
    expect(calculateMissionScore(normalizeMission(agenticMission), currentProgress)).toEqual({
      core: 30,
      bonus: 10,
      total: 40
    });
  });

  it("carries per-module totals and cumulative totals into the case file export", () => {
    const summary = {
      modules: [
        {
          moduleId: "foundations",
          moduleTitle: "Foundations",
          core: 40,
          bonus: 10,
          total: 50,
          scoredMissionCount: 1,
          completedMissionCount: 1
        },
        {
          moduleId: "agentic",
          moduleTitle: "Agentic Development",
          core: 30,
          bonus: 10,
          total: 40,
          scoredMissionCount: 1,
          completedMissionCount: 0
        }
      ],
      cumulative: { core: 70, bonus: 20, total: 90 }
    };
    const currentProgress: MissionProgress = {
      harness: "copilot-cli",
      completed: ["agentic-mission-core-1", "agentic-mission-bonus-1"],
      evidence: { "agentic-mission-core-1": "Tracked the delegated change." },
      alias: "mergewell",
      followUp: "Verify the next module handoff"
    };
    const scoredMission = normalizeMission(agenticMission);
    if (!isScoredMission(scoredMission)) {
      throw new Error("Expected a scored mission");
    }

    const caseFile = buildCaseFileText(
      workshop,
      workshop.modules[1] as CatalogModule,
      scoredMission,
      currentProgress,
      summary
    );

    expect(caseFile).toContain("Module totals");
    expect(caseFile).toContain("- Foundations: core 40, bonus 10, total 50");
    expect(caseFile).toContain("- Agentic Development: core 30, bonus 10, total 40");
    expect(caseFile).toContain("Workshop cumulative total: core 70, bonus 20, total 90");
    expect(caseFile).toContain("Bounded follow-up task: Verify the next module handoff");
  });
});
