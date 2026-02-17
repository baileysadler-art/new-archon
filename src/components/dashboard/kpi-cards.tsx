"use client";

import { BookOpen, ClipboardCheck, Flame, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useProgress } from "@/hooks/use-progress";

export function KpiCards() {
  const {
    getOverallProgress,
    getAverageQuizScore,
    getTotalEstimatedHoursRemaining,
    progress,
  } = useProgress();

  const overall = getOverallProgress();
  const avgScore = getAverageQuizScore();
  const hoursRemaining = getTotalEstimatedHoursRemaining();
  const streak = progress.streakData.currentStreak;

  const cards = [
    {
      label: "Lessons Completed",
      value: `${overall.completed}/${overall.total}`,
      icon: BookOpen,
      color: "text-blue-600",
    },
    {
      label: "Avg Quiz Score",
      value: progress.quizAttempts.length > 0 ? `${avgScore}%` : "--",
      icon: ClipboardCheck,
      color: "text-emerald-600",
    },
    {
      label: "Current Streak",
      value: `${streak} day${streak !== 1 ? "s" : ""}`,
      icon: Flame,
      color: "text-orange-600",
    },
    {
      label: "Hours Remaining",
      value: `~${hoursRemaining}h`,
      icon: Clock,
      color: "text-violet-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <Card key={card.label}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`${card.color}`}>
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
