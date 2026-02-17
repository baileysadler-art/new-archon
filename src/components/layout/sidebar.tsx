"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldCheck, ChevronDown } from "lucide-react";
import { useState } from "react";

import { sidebarNav, phaseTextColors } from "@/lib/constants";
import { getAllPhases } from "@/lib/curriculum-helpers";
import { useProgress } from "@/hooks/use-progress";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const { getPhaseProgress } = useProgress();
  const phases = getAllPhases();
  const [curriculumOpen, setCurriculumOpen] = useState(
    pathname.startsWith("/curriculum")
  );

  const isCurriculumActive = pathname.startsWith("/curriculum");

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-30 w-64 flex-col border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="flex h-14 items-center gap-2 border-b px-4">
        <ShieldCheck className="size-5 text-primary" />
        <span className="font-semibold tracking-tight">
          AI Security Academy
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {sidebarNav.map((item) => {
          const isActive =
            item.href === "/curriculum"
              ? isCurriculumActive
              : pathname.startsWith(item.href);
          const Icon = item.icon;
          const isCurriculum = item.href === "/curriculum";

          return (
            <div key={item.href}>
              <div className="flex items-center">
                <Link
                  href={item.href}
                  className={cn(
                    "flex flex-1 items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  <Icon className="size-4" />
                  {item.title}
                </Link>
                {isCurriculum && (
                  <button
                    onClick={() => setCurriculumOpen(!curriculumOpen)}
                    className="rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <ChevronDown
                      className={cn(
                        "size-4 transition-transform duration-200",
                        curriculumOpen && "rotate-180"
                      )}
                    />
                  </button>
                )}
              </div>

              {isCurriculum && curriculumOpen && (
                <div className="ml-4 mt-1 space-y-0.5 border-l pl-3">
                  {phases.map((phase) => {
                    const progress = getPhaseProgress(phase.id);
                    const percentage =
                      progress.total === 0
                        ? 0
                        : Math.round(
                            (progress.completed / progress.total) * 100
                          );
                    const phaseColor =
                      phaseTextColors[phase.color] || "text-muted-foreground";
                    const isPhaseActive = pathname.includes(
                      `/curriculum/${phase.slug}`
                    );

                    return (
                      <Link
                        key={phase.id}
                        href={`/curriculum/${phase.slug}`}
                        className={cn(
                          "flex items-center justify-between rounded-md px-2 py-1.5 text-xs transition-colors",
                          isPhaseActive
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground"
                        )}
                      >
                        <span className={cn("truncate", phaseColor)}>
                          {phase.title}
                        </span>
                        {progress.total > 0 && (
                          <span
                            className={cn(
                              "ml-2 shrink-0 text-[10px] tabular-nums",
                              percentage === 100
                                ? "text-emerald-600"
                                : "text-muted-foreground"
                            )}
                          >
                            {percentage}%
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
