"use client";

import { PageHeader } from "@/components/shared/page-header";
import { KpiCards } from "@/components/dashboard/kpi-cards";
import { ProgressOverview } from "@/components/dashboard/progress-overview";
import { CurrentModuleCard } from "@/components/dashboard/current-module-card";
import { PhaseProgressList } from "@/components/dashboard/phase-progress-list";
import { StreakCalendar } from "@/components/dashboard/streak-calendar";
import { useProgress } from "@/hooks/use-progress";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const { isLoaded } = useProgress();

  if (!isLoaded) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-48" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-20" />
          ))}
        </div>
        <Skeleton className="h-64" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Dashboard"
        description="Track your AI security learning progress"
      />
      <KpiCards />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <ProgressOverview />
          <StreakCalendar />
        </div>
        <div className="space-y-6">
          <CurrentModuleCard />
          <PhaseProgressList />
        </div>
      </div>
    </div>
  );
}
