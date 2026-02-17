import type { Phase } from "@/types";

export const phase6: Phase = {
  id: "phase-6",
  slug: "consulting-business",
  title: "Consulting & Business",
  description:
    "Transform your AI security skills into a consulting business: build a portfolio, develop audit methodology, find clients, and earn certifications.",
  weekRange: "Weeks 31-36",
  estimatedHours: 60,
  icon: "Briefcase",
  color: "amber",
  modules: [
    {
      id: "phase-6-module-1",
      slug: "building-a-portfolio",
      phaseId: "phase-6",
      title: "Building an AI Security Portfolio",
      description:
        "Create case studies, write-ups, and demonstration projects that showcase your AI security expertise to potential clients.",
      estimatedHours: 12,
      lessons: [],
    },
    {
      id: "phase-6-module-2",
      slug: "security-audit-methodology",
      phaseId: "phase-6",
      title: "Security Audit Methodology",
      description:
        "Develop a structured approach to AI security audits: scoping, assessment, reporting, and remediation tracking.",
      estimatedHours: 12,
      lessons: [],
    },
    {
      id: "phase-6-module-3",
      slug: "client-communication",
      phaseId: "phase-6",
      title: "Client Communication & Proposals",
      description:
        "Learn to write compelling proposals, communicate technical findings to non-technical stakeholders, and manage client relationships.",
      estimatedHours: 12,
      lessons: [],
    },
    {
      id: "phase-6-module-4",
      slug: "pricing-and-finding-clients",
      phaseId: "phase-6",
      title: "Pricing & Finding Clients",
      description:
        "Set your rates, build a pipeline, leverage LinkedIn and communities, and develop a sustainable consulting practice.",
      estimatedHours: 12,
      lessons: [],
    },
    {
      id: "phase-6-module-5",
      slug: "databricks-certification-prep",
      phaseId: "phase-6",
      title: "Databricks Certification Prep",
      description:
        "Prepare for the Databricks Generative AI Engineer Associate certification with study guides, practice questions, and exam strategy.",
      estimatedHours: 12,
      lessons: [],
      databricksCompanion: {
        title: "Databricks Gen AI Engineer Associate Certification",
        url: "https://www.databricks.com/learn/training/certification",
        description:
          "Prepare for and take the official Databricks certification exam.",
        isFree: false,
      },
    },
  ],
};
