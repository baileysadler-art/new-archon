"use client";

import { ClipboardCheck } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { QuizReviewCard } from "@/components/quiz/quiz-review-card";
import { EmptyState } from "@/components/shared/empty-state";
import { useProgress } from "@/hooks/use-progress";

export default function QuizzesPage() {
  const { progress } = useProgress();
  const attempts = [...progress.quizAttempts].reverse();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Quiz History"
        description="Review your quiz attempts and scores"
      />
      {attempts.length === 0 ? (
        <EmptyState
          title="No quizzes taken yet"
          description="Complete lessons and take quizzes to see your history here."
          icon={<ClipboardCheck className="size-10" />}
        />
      ) : (
        <div className="space-y-3">
          {attempts.map((attempt, index) => (
            <QuizReviewCard key={`${attempt.quizId}-${index}`} attempt={attempt} />
          ))}
        </div>
      )}
    </div>
  );
}
