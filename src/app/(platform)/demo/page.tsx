import { RiskScoreCard } from "@/components/platform/overview/risk-score-card";
import { StatCards } from "@/components/platform/overview/stat-cards";
import { RecentAlertsCard } from "@/components/platform/overview/recent-alerts-card";
import { ComplianceSummaryCard } from "@/components/platform/overview/compliance-summary-card";
import { SystemsHealthCard } from "@/components/platform/overview/systems-health-card";

export default function DemoOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Security Overview</h1>
        <p className="text-sm text-muted-foreground">
          Real-time security posture across all connected AI systems
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <RiskScoreCard />
        <div className="lg:col-span-2">
          <StatCards />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <RecentAlertsCard />
        <ComplianceSummaryCard />
      </div>

      <SystemsHealthCard />
    </div>
  );
}
