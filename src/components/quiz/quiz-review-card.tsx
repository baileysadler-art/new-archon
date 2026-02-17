"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getLessonContext } from "@/lib/curriculum-helpers";
import { cn } from "@/lib/utils";
import type { QuizAttempt } from "@/types";

interface QuizReviewCardProps {
  attempt: QuizAttempt;
}

export function QuizReviewCard({ attempt }: QuizReviewCardProps) {
  const context = getLessonContext(attempt.lessonId);
  const date = new Date(attempt.completedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Card>
      <CardContent className="p-4 flex items-center gap-4">
        <div
          className={cn(
            "flex items-center justify-center size-12 rounded-full text-sm font-bold",
            attempt.score >= 80
              ? "bg-emerald-500/10 text-emerald-600"
              : attempt.score >= 60
                ? "bg-amber-500/10 text-amber-600"
                : "bg-red-500/10 text-red-600"
          )}
        >
          {attempt.score}%
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">
            {context?.lesson.title || "Unknown Lesson"}
          </p>
          <p className="text-xs text-muted-foreground">
            {context?.phase.title} &middot; {context?.module.title}
          </p>
        </div>
        <div className="text-right shrink-0">
          <Badge
            variant="secondary"
            className={cn(
              "text-xs",
              attempt.score >= 80
                ? "bg-emerald-500/10 text-emerald-600"
                : attempt.score >= 60
                  ? "bg-amber-500/10 text-amber-600"
                  : "bg-red-500/10 text-red-600"
            )}
          >
            {attempt.correctAnswers}/{attempt.totalQuestions}
          </Badge>
          <p className="text-[10px] text-muted-foreground mt-1">{date}</p>
        </div>
      </CardContent>
    </Card>
  );
}
