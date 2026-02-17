import { phase1 } from "./phases/phase-1-tech-foundations";
import { phase2 } from "./phases/phase-2-cybersecurity";
import { phase3 } from "./phases/phase-3-data-ai";
import { phase4 } from "./phases/phase-4-databricks";
import { phase5 } from "./phases/phase-5-ai-security";
import { phase6 } from "./phases/phase-6-consulting";
import type { Phase } from "@/types";

export const curriculum: Phase[] = [
  phase1,
  phase2,
  phase3,
  phase4,
  phase5,
  phase6,
];
