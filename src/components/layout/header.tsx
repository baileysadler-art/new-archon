"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Flame, ChevronRight } from "lucide-react";

import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { Badge } from "@/components/ui/badge";
import { useProgress } from "@/hooks/use-progress";
import { cn } from "@/lib/utils";

const segmentLabels: Record<string, string> = {
  dashboard: "Dashboard",
  curriculum: "Curriculum",
  quizzes: "Quizzes",
  resources: "Resources",
};

function formatSegment(segment: string): string {
  if (segmentLabels[segment]) return segmentLabels[segment];
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function Header() {
  const pathname = usePathname();
  const { progress } = useProgress();

  const segments = pathname.split("/").filter(Boolean);
  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = formatSegment(segment);
    const isLast = index === segments.length - 1;
    return { href, label, isLast };
  });

  const currentStreak = progress.streakData.currentStreak;

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-md px-4 sm:px-6 lg:px-8">
      <MobileSidebar />

      <nav className="flex items-center gap-1 text-sm min-w-0 flex-1">
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center gap-1">
            {index > 0 && (
              <ChevronRight className="size-3.5 shrink-0 text-muted-foreground" />
            )}
            {crumb.isLast ? (
              <span className="truncate font-medium">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="truncate text-muted-foreground hover:text-foreground transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {currentStreak > 0 && (
        <Badge
          variant="secondary"
          className={cn(
            "shrink-0 gap-1",
            currentStreak >= 7 && "bg-orange-500/10 text-orange-600"
          )}
        >
          <Flame className="size-3" />
          {currentStreak} day{currentStreak !== 1 ? "s" : ""}
        </Badge>
      )}
    </header>
  );
}
