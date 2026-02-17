"use client";

import { PageHeader } from "@/components/shared/page-header";
import { PhaseCard } from "@/components/curriculum/phase-card";
import { getAllPhases } from "@/lib/curriculum-helpers";

export default function CurriculumPage() {
  const phases = getAllPhases();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Curriculum"
        description="Your 36-week learning path to AI security expertise"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {phases.map((phase) => (
          <PhaseCard key={phase.id} phase={phase} />
        ))}
      </div>
    </div>
  );
}
