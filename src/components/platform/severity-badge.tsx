"use client";

import { Badge } from "@/components/ui/badge";
import type { Severity } from "@/data/demo-data";
import { cn } from "@/lib/utils";

const severityConfig: Record<Severity, { label: string; className: string }> = {
  critical: { label: "Critical", className: "bg-red-500/15 text-red-400 border-red-500/20" },
  high: { label: "High", className: "bg-orange-500/15 text-orange-400 border-orange-500/20" },
  medium: { label: "Medium", className: "bg-amber-500/15 text-amber-400 border-amber-500/20" },
  low: { label: "Low", className: "bg-primary/15 text-primary border-primary/20" },
};

export function SeverityBadge({ severity, className }: { severity: Severity; className?: string }) {
  const config = severityConfig[severity];
  return (
    <Badge variant="outline" className={cn("text-xs font-medium", config.className, className)}>
      {config.label}
    </Badge>
  );
}
