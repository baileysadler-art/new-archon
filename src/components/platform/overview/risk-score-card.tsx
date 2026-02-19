"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressRing } from "@/components/shared/progress-ring";
import { overviewStats } from "@/data/demo-data";

export function RiskScoreCard() {
  const score = overviewStats.riskScore;
  const scoreColor =
    score >= 80 ? "text-emerald-400" : score >= 60 ? "text-amber-400" : "text-red-400";

  return (
    <Card className="flex flex-col items-center justify-center">
      <CardHeader className="pb-2 text-center">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          Overall Security Score
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-3 pb-6">
        <ProgressRing percentage={score} size={140} strokeWidth={10} />
        <div className="text-center">
          <p className={`text-sm font-semibold ${scoreColor}`}>
            {score >= 80 ? "Good" : score >= 60 ? "Needs Attention" : "Critical"}
          </p>
          <p className="text-xs text-muted-foreground">
            Last scanned {overviewStats.lastScanTime}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
