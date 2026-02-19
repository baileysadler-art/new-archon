"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { systems, type SystemStatus } from "@/data/demo-data";
import { cn } from "@/lib/utils";

const statusDot: Record<SystemStatus, string> = {
  healthy: "bg-emerald-500",
  warning: "bg-amber-500",
  critical: "bg-red-500",
};

const statusLabel: Record<SystemStatus, string> = {
  healthy: "Healthy",
  warning: "Warning",
  critical: "Critical",
};

const statusBadge: Record<SystemStatus, string> = {
  healthy: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  warning: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  critical: "bg-red-500/15 text-red-400 border-red-500/20",
};

const typeBadge: Record<string, string> = {
  LLM: "bg-violet-500/15 text-violet-400 border-violet-500/20",
  Chatbot: "bg-blue-500/15 text-blue-400 border-blue-500/20",
  "ML Pipeline": "bg-primary/15 text-primary border-primary/20",
  "Computer Vision": "bg-pink-500/15 text-pink-400 border-pink-500/20",
  "NLP Engine": "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Recommendation: "bg-amber-500/15 text-amber-400 border-amber-500/20",
};

type Filter = "all" | SystemStatus;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "healthy", label: "Healthy" },
  { value: "warning", label: "Warning" },
  { value: "critical", label: "Critical" },
];

export default function SystemsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? systems
      : systems.filter((s) => s.status === filter);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Systems</h1>
        <p className="text-sm text-muted-foreground">
          {systems.length} connected systems across your organisation
        </p>
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((sys) => (
          <Card key={sys.id} className="transition-colors hover:border-primary/20">
            <CardContent className="p-5 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-semibold truncate">{sys.name}</h3>
                  <p className="text-xs text-muted-foreground">{sys.department}</p>
                </div>
                <div className={cn("mt-1 size-2.5 shrink-0 rounded-full", statusDot[sys.status])} />
              </div>

              <div className="flex gap-2">
                <Badge variant="outline" className={cn("text-xs", typeBadge[sys.type])}>
                  {sys.type}
                </Badge>
                <Badge variant="outline" className={cn("text-xs", statusBadge[sys.status])}>
                  {statusLabel[sys.status]}
                </Badge>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                {sys.description}
              </p>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Health Score</span>
                  <span className="font-semibold tabular-nums">{sys.healthScore}%</span>
                </div>
                <Progress value={sys.healthScore} className="h-1.5" />
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Last scan: {sys.lastScan}</span>
                {sys.riskAreas > 0 && (
                  <span className="text-amber-400">{sys.riskAreas} risk{sys.riskAreas !== 1 ? "s" : ""}</span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
