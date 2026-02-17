"use client";

import Link from "next/link";
import { ArrowRight, PartyPopper } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useProgress } from "@/hooks/use-progress";
import { getFirstIncompleteLessonWithContext } from "@/lib/curriculum-helpers";

export function CurrentModuleCard() {
  const { progress, getModuleProgress } = useProgress();
  const next = getFirstIncompleteLessonWithContext(progress.lessonsCompleted);

  if (!next) {
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Continue Learning</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-3 py-6">
          <PartyPopper className="size-10 text-primary" />
          <p className="text-sm font-medium">All lessons completed!</p>
          <p className="text-xs text-muted-foreground text-center">
            Amazing work. You have completed the entire curriculum.
          </p>
        </CardContent>
      </Card>
    );
  }

  const moduleProgress = getModuleProgress(next.module.id);
  const percentage =
    moduleProgress.total === 0
      ? 0
      : Math.round((moduleProgress.completed / moduleProgress.total) * 100);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">Continue Learning</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-xs text-muted-foreground">
            {next.phase.title} &middot; {next.module.title}
          </p>
          <p className="text-sm font-medium mt-1">{next.lesson.title}</p>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Module progress</span>
            <span>
              {moduleProgress.completed}/{moduleProgress.total}
            </span>
          </div>
          <Progress value={percentage} className="h-2" />
        </div>
        <Button asChild size="sm" className="w-full">
          <Link
            href={`/curriculum/${next.phase.slug}/${next.module.slug}/${next.lesson.slug}`}
          >
            Continue
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
