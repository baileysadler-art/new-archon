"use client";

import Link from "next/link";
import { Clock, CheckCircle2, Circle, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useProgress } from "@/hooks/use-progress";
import { cn } from "@/lib/utils";
import type { Lesson } from "@/types";

interface LessonCardProps {
  lesson: Lesson;
  phaseSlug: string;
  moduleSlug: string;
}

export function LessonCard({ lesson, phaseSlug, moduleSlug }: LessonCardProps) {
  const { isLessonComplete } = useProgress();
  const completed = isLessonComplete(lesson.id);

  return (
    <Link
      href={`/curriculum/${phaseSlug}/${moduleSlug}/${lesson.slug}`}
    >
      <Card
        className={cn(
          "transition-all hover:shadow-md hover:border-primary/20 cursor-pointer",
          completed && "bg-primary/5 border-primary/10"
        )}
      >
        <CardContent className="p-4 flex items-center gap-3">
          {completed ? (
            <CheckCircle2 className="size-5 text-emerald-600 shrink-0" />
          ) : (
            <Circle className="size-5 text-muted-foreground shrink-0" />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{lesson.title}</p>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="size-3" />
                {lesson.estimatedMinutes} min
              </span>
              {lesson.quiz && (
                <Badge variant="secondary" className="text-[10px] h-4 px-1.5 gap-0.5">
                  <HelpCircle className="size-2.5" />
                  Quiz
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
