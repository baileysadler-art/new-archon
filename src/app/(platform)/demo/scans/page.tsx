"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SeverityBadge } from "@/components/platform/severity-badge";
import { vulnerabilities, getVulnerabilityCounts, type Severity } from "@/data/demo-data";
import { cn } from "@/lib/utils";

const statusBadge: Record<string, string> = {
  open: "bg-red-500/15 text-red-400 border-red-500/20",
  "in-review": "bg-amber-500/15 text-amber-400 border-amber-500/20",
  resolved: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
};

const statusLabel: Record<string, string> = {
  open: "Open",
  "in-review": "In Review",
  resolved: "Resolved",
};

type Filter = "all" | Severity;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "critical", label: "Critical" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

export default function ScansPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const counts = getVulnerabilityCounts();

  const filtered =
    filter === "all"
      ? vulnerabilities
      : vulnerabilities.filter((v) => v.severity === filter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Scan Results</h1>
        <p className="text-sm text-muted-foreground">
          Latest vulnerability findings across all connected systems
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-1.5 rounded-md bg-red-500/10 px-3 py-1.5 text-sm">
          <span className="font-bold text-red-400">{counts.critical}</span>
          <span className="text-red-400/70">Critical</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-orange-500/10 px-3 py-1.5 text-sm">
          <span className="font-bold text-orange-400">{counts.high}</span>
          <span className="text-orange-400/70">High</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-amber-500/10 px-3 py-1.5 text-sm">
          <span className="font-bold text-amber-400">{counts.medium}</span>
          <span className="text-amber-400/70">Medium</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-primary/10 px-3 py-1.5 text-sm">
          <span className="font-bold text-primary">{counts.low}</span>
          <span className="text-primary/70">Low</span>
        </div>
      </div>

      <div className="flex gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              filter === f.value
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="divide-y">
            {filtered.map((vuln) => (
              <div
                key={vuln.id}
                className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <SeverityBadge severity={vuln.severity} className="mt-0.5 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium leading-tight">
                      {vuln.finding}
                    </p>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      <span className="text-primary/80">{vuln.category}</span>
                      <span>&middot;</span>
                      <span>{vuln.systemName}</span>
                      <span>&middot;</span>
                      <span>{vuln.detectedAt}</span>
                    </div>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={cn("shrink-0 text-xs", statusBadge[vuln.status])}
                >
                  {statusLabel[vuln.status]}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
