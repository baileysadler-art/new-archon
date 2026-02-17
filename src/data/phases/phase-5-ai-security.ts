import type { Phase } from "@/types";

export const phase5: Phase = {
  id: "phase-5",
  slug: "ai-security-specialization",
  title: "AI Security Specialization",
  description:
    "Deep dive into AI/ML security: threat landscapes, LLM vulnerabilities, pipeline security, adversarial attacks, and Databricks-specific hardening.",
  weekRange: "Weeks 23-30",
  estimatedHours: 80,
  icon: "ShieldAlert",
  color: "rose",
  modules: [
    {
      id: "phase-5-module-1",
      slug: "ai-ml-threat-landscape",
      phaseId: "phase-5",
      title: "AI/ML Threat Landscape (MITRE ATLAS)",
      description:
        "Map the adversarial threat landscape for AI systems using the MITRE ATLAS framework.",
      estimatedHours: 12,
      lessons: [],
      databricksCompanion: {
        title: "Databricks AI Security Fundamentals",
        url: "https://www.databricks.com/training/catalog/databricks-ai-security-fundamentals-3406",
        description:
          "Official Databricks course on securing AI systems. Take alongside this phase.",
        isFree: true,
      },
    },
    {
      id: "phase-5-module-2",
      slug: "owasp-llm-top-10",
      phaseId: "phase-5",
      title: "OWASP Top 10 for LLM Applications",
      description:
        "Study the top 10 security risks specific to Large Language Model applications.",
      estimatedHours: 12,
      lessons: [],
    },
    {
      id: "phase-5-module-3",
      slug: "securing-ml-pipelines",
      phaseId: "phase-5",
      title: "Securing ML Pipelines",
      description:
        "Learn to secure the end-to-end ML lifecycle: data ingestion, training, model registry, and deployment.",
      estimatedHours: 12,
      lessons: [],
    },
    {
      id: "phase-5-module-4",
      slug: "adversarial-attacks",
      phaseId: "phase-5",
      title: "Data Poisoning, Model Theft & Adversarial Attacks",
      description:
        "Understand attack vectors targeting ML models: training data manipulation, model extraction, and adversarial examples.",
      estimatedHours: 12,
      lessons: [],
    },
    {
      id: "phase-5-module-5",
      slug: "prompt-injection-defense",
      phaseId: "phase-5",
      title: "Prompt Injection & Defense",
      description:
        "Master prompt injection attacks (direct and indirect), jailbreaking techniques, and defense strategies.",
      estimatedHours: 10,
      lessons: [],
    },
    {
      id: "phase-5-module-6",
      slug: "ai-governance-compliance",
      phaseId: "phase-5",
      title: "AI Governance & Compliance Frameworks",
      description:
        "Navigate AI regulations, the EU AI Act, NIST AI RMF, and build responsible AI governance programs.",
      estimatedHours: 10,
      lessons: [],
    },
    {
      id: "phase-5-module-7",
      slug: "databricks-security-hardening",
      phaseId: "phase-5",
      title: "Databricks-Specific Security Hardening",
      description:
        "Apply security best practices to Databricks: network isolation, secret management, audit logging, and compliance configurations.",
      estimatedHours: 12,
      lessons: [],
    },
  ],
};
