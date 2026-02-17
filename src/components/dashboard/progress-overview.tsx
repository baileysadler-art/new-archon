"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressRing } from "@/components/shared/progress-ring";
import { useProgress } from "@/hooks/use-progress";

export function ProgressOverview() {
  const { getOverallProgress } = useProgress();
  const overall = getOverallProgress();

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Overall Progress</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3 pb-6">
        <ProgressRing percentage={overall.percentage} size={140} strokeWidth={10} />
        <p className="text-sm text-muted-foreground">
          {overall.completed} of {overall.total} lessons completed
        </p>
      </CardContent>
    </Card>
  );
}
