"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProgress } from "@/hooks/use-progress";
import { cn } from "@/lib/utils";

export function StreakCalendar() {
  const { progress } = useProgress();
  const activeDates = progress.streakData.activeDates;

  const days: { label: string; date: string; active: boolean }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    const dayLabel = d.toLocaleDateString("en-US", { weekday: "short" });
    days.push({
      label: dayLabel,
      date: dateStr,
      active: activeDates.includes(dateStr),
    });
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">This Week</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-2">
          {days.map((day) => (
            <div key={day.date} className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "size-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors",
                  day.active
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {day.active ? "✓" : ""}
              </div>
              <span className="text-[10px] text-muted-foreground">
                {day.label}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
