"use client";

import { Button } from "@/components/ui/button";
import { ProgressRing } from "@/components/shared/progress-ring";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  onRetry: () => void;
  onContinue: () => void;
}

export function QuizResults({
  score,
  totalQuestions,
  correctAnswers,
  onRetry,
  onContinue,
}: QuizResultsProps) {
  const message =
    score >= 80
      ? "Excellent work!"
      : score >= 60
        ? "Good job! Review the explanations for missed questions."
        : "Keep practicing! Re-read the lesson and try again.";

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <ProgressRing percentage={score} size={120} strokeWidth={8} />
      <div className="text-center">
        <p className="text-lg font-semibold">{message}</p>
        <p className="text-sm text-muted-foreground mt-1">
          {correctAnswers} of {totalQuestions} correct
        </p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" onClick={onRetry}>
          Retry
        </Button>
        <Button onClick={onContinue}>Continue</Button>
      </div>
    </div>
  );
}
