import { describe, expect, it } from "vitest";
import { loadCatalog, type ContentCatalog } from "@ghcp/content-schema";
import { repositoryRoot } from "./paths.js";
import { workshopRunOfShow } from "./lifecycle.js";
import { createPortalCatalog } from "./catalog.js";

describe("reference content", () => {
  it("loads the reference workshop and ordered modules", async () => {
    const catalog = await loadCatalog(repositoryRoot);
    expect(catalog.workshops[0]?.workshop.data.id).toBe("ghcp-dev-hack");
    expect(catalog.workshops[0]?.workshop.data.modules).toEqual(["foundations", "agentic", "advanced"]);

    const generated = createPortalCatalog(catalog);
    const mission = generated.workshops[0]?.modules[0]?.missions[0];
    expect(mission).toMatchObject({
      goal: expect.stringContaining("verified Copilot case file"),
      completionPoints: 40,
      bonusPointCap: 10,
      starterFile: {
        name: "case-file.md"
      }
    });
    expect(mission?.coreClues).toHaveLength(5);
    expect(mission?.coreClues[0]?.hints).toHaveLength(3);
    expect(mission?.harnesses.map((harness) => harness.id)).toEqual(["copilot-cli", "ide-extension", "copilot-app"]);
  });

  it("includes scored mission catalog fields when authored content provides them", () => {
    const catalog = {
      workshops: [
        {
          root: "workshops/test",
          workshop: {
            filePath: "workshop.md",
            body: "",
            data: {
              schemaVersion: 1,
              kind: "workshop",
              id: "test",
              title: "Test",
              description: "Test workshop",
              format: "custom",
              duration: "1 hour",
              level: "basic",
              audience: ["Developers"],
              prerequisites: [],
              modules: ["foundations"],
              tags: [],
              researchSources: [],
              status: "draft",
              lastReviewed: "2026-08-11"
            }
          },
          modules: [{
            filePath: "module.md",
            body: "",
            data: {
              schemaVersion: 1,
              kind: "module",
              id: "foundations",
              title: "Foundations",
              description: "Intro module",
              duration: "45 minutes",
              objectives: ["Use bounded context"],
              prerequisites: [],
              sourceDocuments: [],
              slides: "slides.md",
              labs: [],
              missions: ["content/missions/foundations/scored.md"],
              assets: [],
              status: "draft"
            }
          }],
          labs: [],
          missions: [{
            filePath: "C:/repo/workshops/test/content/missions/foundations/scored.md",
            body: "",
            data: {
              schemaVersion: 1,
              kind: "mission",
              id: "scored",
              title: "Scored mission",
              module: "foundations",
              durationMinutes: 45,
              objectiveRefs: ["Use bounded context"],
              prerequisites: [],
              startingState: "Ready",
              goal: "Build a verified case file",
              task: "Find the clues",
              constraints: [],
              evidence: ["Case file"],
              safetyCheckpoints: [],
              corePath: ["Complete the core clues"],
              stretchPath: [],
              debrief: ["What changed?"],
              validation: ["Explain the evidence."],
              casePacket: ["Create the repository."],
              starterFile: {
                name: "case-file.md",
                content: "# Case file"
              },
              harnesses: [{
                id: "copilot-cli",
                title: "Copilot CLI",
                description: "Use Copilot in the terminal.",
                instructions: ["Stay in scope."]
              }],
              coreClues: [{
                id: "clue-1",
                title: "First clue",
                points: 10,
                objectiveRef: "Use bounded context",
                scene: "A prompt appears.",
                actions: ["Inspect the diff."],
                routes: [{ harness: "copilot-cli", instructions: ["Start in the repo root."] }],
                evidence: "Recorded evidence",
                hints: ["Start narrow."],
                safetyCheckpoint: "Do not guess policy."
              }],
              bonusClues: [{
                id: "bonus-1",
                title: "Bonus clue",
                points: 10,
                objectiveRef: "Use bounded context",
                scene: "An extra path appears.",
                actions: ["Try the optional path."],
                routes: [],
                evidence: "Optional evidence",
                hints: ["Keep the scope bounded."],
                safetyCheckpoint: "Verify before accepting."
              }],
              completionPoints: 10,
              bonusPointCap: 10,
              carryForward: {
                artifact: "Case file",
                produces: ["Selected gadget"],
                consumes: []
              },
              leaderboard: {
                optional: true,
                aliasOnly: true,
                instructions: ["Share only an alias and score."]
              },
              status: "draft"
            }
          }],
          storyboards: [],
          scenes: [],
          characters: [],
          locations: [],
          complexTopicPlans: []
        }
      ]
    } as ContentCatalog;

    const generated = createPortalCatalog(catalog);
    expect(generated.workshops[0]?.modules[0]?.missions[0]).toMatchObject({
      goal: "Build a verified case file",
      completionPoints: 10,
      bonusPointCap: 10,
      starterFile: {
        name: "case-file.md"
      },
      carryForward: {
        artifact: "Case file"
      }
    });
    expect(generated.workshops[0]?.modules[0]?.missions[0]?.coreClues).toHaveLength(1);
    expect(generated.workshops[0]?.modules[0]?.missions[0]?.harnesses.map((harness) => harness.id)).toEqual(["copilot-cli"]);
  });

  it("expands delivery variants with routes and phase minutes", () => {
    const catalog = {
      workshops: [
        {
          root: "workshops/test",
          workshop: {
            filePath: "workshop.md",
            body: "",
            data: {
              schemaVersion: 1,
              kind: "workshop",
              id: "test",
              title: "Test",
              description: "Test workshop",
              format: "custom",
              duration: "1 hour",
              level: "basic",
              audience: ["Developers"],
              prerequisites: [],
              modules: ["intro"],
              tags: [],
              researchSources: [],
              deliveryVariants: [{
                id: "compact",
                title: "Compact",
                description: "Compact delivery",
                days: [{
                  id: "day-one",
                  title: "Day one",
                  start: "09:00",
                  end: "10:00",
                  agenda: [
                    { id: "content", type: "module-content", title: "Content", start: "09:00", end: "09:30", module: "intro" },
                    { id: "mission", type: "mission", title: "Mission", start: "09:30", end: "10:00", module: "intro" }
                  ]
                }]
              }],
              status: "draft",
              lastReviewed: "2026-08-05"
            }
          },
          modules: [{
            filePath: "module.md",
            body: "",
            data: {
              schemaVersion: 1,
              kind: "module",
              id: "intro",
              title: "Introduction",
              description: "Intro module",
              duration: "1 hour",
              totalMinutes: 60,
              objectives: ["Learn"],
              prerequisites: [],
              sourceDocuments: [],
              slides: "slides.md",
              labs: [],
              missions: [],
              assets: [],
              status: "draft"
            }
          }],
          labs: [],
          missions: [],
          storyboards: [],
          scenes: [],
          characters: [],
          locations: [],
          complexTopicPlans: []
        }
      ]
    } as ContentCatalog;

    const generated = createPortalCatalog(catalog);

    expect(generated.workshops[0]?.route).toBe("workshops/test/");
    expect(generated.workshops[0]?.deliveryVariants[0]).toMatchObject({
      route: "workshops/test/variants/compact/",
      totalMinutes: 60,
      modulePhases: [{ module: "intro", contentMinutes: 30, missionMinutes: 30 }]
    });
  });

  describe("workshop timing", () => {
    it("renders the validated seven-hour run of show", async () => {
      const runOfShow = await workshopRunOfShow("ghcp-dev-hack", "09:00");
      expect(runOfShow).toContain("Total: 420 minutes");
      expect(runOfShow).toContain(
        "| GitHub Workshop | 09:15 | 10:30 | 75 | module-content | Foundations: Copilot surfaces, safety, interaction modes, cost, and context | foundations |"
      );
      expect(runOfShow).toContain(
        "| GitHub Workshop | 15:30 | 16:00 | 30 | mission | Mission: Orchestrate, integrate, and debug with evidence | advanced |"
      );
    });
  });
});
