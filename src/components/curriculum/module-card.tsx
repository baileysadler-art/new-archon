"use client";

import Link from "next/link";
import { BookOpen, Clock, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/hooks/use-progress";
import type { Module } from "@/types";

interface ModuleCardProps {
  module: Module;
  phaseSlug: string;
}

export function ModuleCard({ module, phaseSlug }: ModuleCardProps) {
  const { getModuleProgress } = useProgress();
  const progress = getModuleProgress(module.id);
  const percentage =
    progress.total === 0
      ? 0
      : Math.round((progress.completed / progress.total) * 100);

  return (
    <Link href={`/curriculum/${phaseSlug}/${module.slug}`}>
      <Card className="transition-all hover:shadow-md hover:border-primary/20 cursor-pointer h-full">
        <CardContent className="p-5 space-y-3">
          <div>
            <h3 className="font-semibold">{module.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {module.description}
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <BookOpen className="size-3" />
              {module.lessons.length} lessons
            </span>
            <span className="flex items-center gap-1">
              <Clock className="size-3" />
              ~{module.estimatedHours}h
            </span>
          </div>
          {module.databricksCompanion && (
            <Badge
              variant="secondary"
              className="text-xs gap-1 bg-orange-500/10 text-orange-700"
            >
              <ExternalLink className="size-3" />
              Databricks Companion
            </Badge>
          )}
          {progress.total > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>
                  {progress.completed}/{progress.total}
                </span>
                <span>{percentage}%</span>
              </div>
              <Progress value={percentage} className="h-1.5" />
            </div>
          )}
          {progress.total === 0 && (
            <p className="text-xs text-muted-foreground italic">
              Coming soon -- content being developed
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
