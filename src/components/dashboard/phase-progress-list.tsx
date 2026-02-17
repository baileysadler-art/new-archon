"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getAllPhases } from "@/lib/curriculum-helpers";
import { useProgress } from "@/hooks/use-progress";
import { phaseTextColors } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PhaseProgressList() {
  const { getPhaseProgress } = useProgress();
  const phases = getAllPhases();

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Phase Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {phases.map((phase) => {
          const progress = getPhaseProgress(phase.id);
          const percentage =
            progress.total === 0
              ? 0
              : Math.round((progress.completed / progress.total) * 100);
          const colorClass = phaseTextColors[phase.color] || "text-foreground";

          return (
            <div key={phase.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className={cn("font-medium", colorClass)}>
                  {phase.title}
                </span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  {progress.completed}/{progress.total} lessons
                </span>
              </div>
              <Progress value={percentage} className="h-2" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
