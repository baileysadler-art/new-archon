"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { complianceFrameworks } from "@/data/demo-data";
import { ChevronRight } from "lucide-react";

export function ComplianceSummaryCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-sm font-medium">Compliance Status</CardTitle>
        <Link
          href="/demo/compliance"
          className="flex items-center gap-1 text-xs text-primary hover:underline"
        >
          Details <ChevronRight className="size-3" />
        </Link>
      </CardHeader>
      <CardContent className="space-y-4">
        {complianceFrameworks.map((fw) => {
          const color =
            fw.overallScore >= 85
              ? "text-emerald-400"
              : fw.overallScore >= 65
              ? "text-amber-400"
              : "text-red-400";

          return (
            <div key={fw.id} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-sm">{fw.name}</span>
                <span className={`text-sm font-semibold tabular-nums ${color}`}>
                  {fw.overallScore}%
                </span>
              </div>
              <Progress value={fw.overallScore} className="h-2" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
