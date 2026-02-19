"use client";

import { Server, AlertTriangle, ShieldCheck, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { overviewStats } from "@/data/demo-data";

const cards = [
  { label: "Systems Connected", value: String(overviewStats.systemsConnected), icon: Server, color: "text-primary" },
  { label: "Active Alerts", value: String(overviewStats.activeAlerts), icon: AlertTriangle, color: "text-red-400" },
  { label: "Compliance Score", value: `${overviewStats.complianceScore}%`, icon: ShieldCheck, color: "text-emerald-400" },
  { label: "Scans This Month", value: String(overviewStats.scansThisMonth), icon: Search, color: "text-violet-400" },
];

export function StatCards() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => (
        <Card key={card.label}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={card.color}>
                <card.icon className="size-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{card.label}</p>
                <p className="text-lg font-bold">{card.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
