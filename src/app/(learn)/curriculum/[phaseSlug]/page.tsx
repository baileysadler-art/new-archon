"use client";

import { useParams } from "next/navigation";
import { PageHeader } from "@/components/shared/page-header";
import { ModuleCard } from "@/components/curriculum/module-card";
import { getPhaseBySlug } from "@/lib/curriculum-helpers";

export default function PhaseDetailPage() {
  const params = useParams();
  const phaseSlug = params.phaseSlug as string;
  const phase = getPhaseBySlug(phaseSlug);

  if (!phase) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-lg font-semibold">Phase not found</h2>
        <p className="text-sm text-muted-foreground mt-1">
          The phase &ldquo;{phaseSlug}&rdquo; could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={phase.title}
        description={`${phase.weekRange} · ~${phase.estimatedHours} hours · ${phase.modules.length} modules`}
      />
      <p className="text-sm text-muted-foreground -mt-4">
        {phase.description}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {phase.modules.map((module) => (
          <ModuleCard key={module.id} module={module} phaseSlug={phaseSlug} />
        ))}
      </div>
    </div>
  );
}
