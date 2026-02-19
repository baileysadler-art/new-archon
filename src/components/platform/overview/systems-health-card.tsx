"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { systems } from "@/data/demo-data";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const statusDot: Record<string, string> = {
  healthy: "bg-emerald-500",
  warning: "bg-amber-500",
  critical: "bg-red-500",
};

export function SystemsHealthCard() {
  const topSystems = [...systems]
    .sort((a, b) => a.healthScore - b.healthScore)
    .slice(0, 6);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-sm font-medium">Systems Health</CardTitle>
        <Link
          href="/demo/systems"
          className="flex items-center gap-1 text-xs text-primary hover:underline"
        >
          View all <ChevronRight className="size-3" />
        </Link>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2">
          {topSystems.map((sys) => (
            <div
              key={sys.id}
              className="flex items-center gap-3 rounded-lg border p-3"
            >
              <div className={cn("size-2.5 shrink-0 rounded-full", statusDot[sys.status])} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{sys.name}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <Progress value={sys.healthScore} className="h-1.5 flex-1" />
                  <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                    {sys.healthScore}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
