"use client";

import { Button } from "@/components/ui/button";
import { getAllPhases } from "@/lib/curriculum-helpers";
import { cn } from "@/lib/utils";

interface ResourceFilterProps {
  selectedPhase: string;
  onPhaseChange: (phase: string) => void;
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const resourceTypes = [
  "all",
  "article",
  "video",
  "course",
  "tool",
  "book",
  "documentation",
];

export function ResourceFilter({
  selectedPhase,
  onPhaseChange,
  selectedType,
  onTypeChange,
}: ResourceFilterProps) {
  const phases = getAllPhases();

  return (
    <div className="space-y-3">
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">Phase</p>
        <div className="flex flex-wrap gap-1.5">
          <Button
            size="sm"
            variant={selectedPhase === "all" ? "default" : "outline"}
            className="h-7 text-xs"
            onClick={() => onPhaseChange("all")}
          >
            All
          </Button>
          {phases.map((phase) => (
            <Button
              key={phase.id}
              size="sm"
              variant={selectedPhase === phase.id ? "default" : "outline"}
              className="h-7 text-xs"
              onClick={() => onPhaseChange(phase.id)}
            >
              {phase.title}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">Type</p>
        <div className="flex flex-wrap gap-1.5">
          {resourceTypes.map((type) => (
            <Button
              key={type}
              size="sm"
              variant={selectedType === type ? "default" : "outline"}
              className={cn("h-7 text-xs capitalize")}
              onClick={() => onTypeChange(type)}
            >
              {type}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
