"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SeverityBadge } from "@/components/platform/severity-badge";
import { alerts } from "@/data/demo-data";
import { ChevronRight } from "lucide-react";

export function RecentAlertsCard() {
  const recentAlerts = alerts.slice(0, 5);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-sm font-medium">Recent Alerts</CardTitle>
        <Link
          href="/demo/scans"
          className="flex items-center gap-1 text-xs text-primary hover:underline"
        >
          View all <ChevronRight className="size-3" />
        </Link>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentAlerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-start justify-between gap-3"
          >
            <div className="flex items-start gap-3 min-w-0">
              <SeverityBadge severity={alert.severity} className="mt-0.5 shrink-0" />
              <p className="text-sm text-foreground/80 leading-tight truncate">
                {alert.title}
              </p>
            </div>
            <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
              {alert.timestamp}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
