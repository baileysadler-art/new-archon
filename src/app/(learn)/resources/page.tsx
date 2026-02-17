"use client";

import { useState } from "react";
import { Library } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ResourceCard } from "@/components/resources/resource-card";
import { ResourceFilter } from "@/components/resources/resource-filter";
import { EmptyState } from "@/components/shared/empty-state";
import { resources } from "@/data/resources";

export default function ResourcesPage() {
  const [selectedPhase, setSelectedPhase] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const filtered = resources.filter((r) => {
    const phaseMatch =
      selectedPhase === "all" || r.phaseIds.includes(selectedPhase);
    const typeMatch = selectedType === "all" || r.type === selectedType;
    return phaseMatch && typeMatch;
  });

  return (
    <div className="space-y-6">
      <PageHeader
        title="Resource Library"
        description="Curated learning materials for your AI security journey"
      />
      <ResourceFilter
        selectedPhase={selectedPhase}
        onPhaseChange={setSelectedPhase}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
      />
      {filtered.length === 0 ? (
        <EmptyState
          title="No resources found"
          description="Try adjusting your filters to find relevant resources."
          icon={<Library className="size-10" />}
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </div>
  );
}
