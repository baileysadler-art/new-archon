"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ProgressRing } from "@/components/shared/progress-ring";
import { complianceFrameworks, type ComplianceStatus } from "@/data/demo-data";
import { cn } from "@/lib/utils";
import { Check, Clock, AlertTriangle } from "lucide-react";

const statusConfig: Record<ComplianceStatus, { icon: typeof Check; label: string; className: string; dot: string }> = {
  compliant: { icon: Check, label: "Compliant", className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20", dot: "text-emerald-400" },
  "in-progress": { icon: Clock, label: "In Progress", className: "bg-amber-500/15 text-amber-400 border-amber-500/20", dot: "text-amber-400" },
  "non-compliant": { icon: AlertTriangle, label: "Non-Compliant", className: "bg-red-500/15 text-red-400 border-red-500/20", dot: "text-red-400" },
};

export default function CompliancePage() {
  const [selectedFramework, setSelectedFramework] = useState(complianceFrameworks[0].id);
  const activeFramework = complianceFrameworks.find((f) => f.id === selectedFramework)!;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Compliance</h1>
        <p className="text-sm text-muted-foreground">
          Track compliance progress across regulatory frameworks
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {complianceFrameworks.map((fw) => {
          const isActive = fw.id === selectedFramework;
          const scoreColor =
            fw.overallScore >= 85
              ? "text-emerald-400"
              : fw.overallScore >= 65
              ? "text-amber-400"
              : "text-red-400";

          return (
            <Card
              key={fw.id}
              className={cn(
                "cursor-pointer transition-colors",
                isActive ? "border-primary/40 bg-primary/5" : "hover:border-primary/20"
              )}
              onClick={() => setSelectedFramework(fw.id)}
            >
              <CardContent className="flex items-center gap-4 p-4">
                <ProgressRing percentage={fw.overallScore} size={64} strokeWidth={6} />
                <div>
                  <h3 className="font-semibold">{fw.name}</h3>
                  <p className={cn("text-sm font-semibold tabular-nums", scoreColor)}>
                    {fw.overallScore}% compliant
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {fw.requirements.length} requirements
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">{activeFramework.name} Requirements</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y">
            {activeFramework.requirements.map((req) => {
              const config = statusConfig[req.status];
              const Icon = config.icon;

              return (
                <div key={req.id} className="flex items-center gap-4 p-4">
                  <Icon className={cn("size-4 shrink-0", config.dot)} />
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-medium">{req.name}</h4>
                      <Badge
                        variant="outline"
                        className={cn("shrink-0 text-xs", config.className)}
                      >
                        {config.label}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{req.description}</p>
                    <div className="flex items-center gap-2">
                      <Progress value={req.progress} className="h-1.5 flex-1" />
                      <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                        {req.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
