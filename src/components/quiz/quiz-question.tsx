"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { QuizQuestion as QuizQuestionType } from "@/types";

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (selectedIndex: number) => void;
  answered: boolean;
  selectedIndex: number | null;
  onNext: () => void;
}

export function QuizQuestion({
  question,
  onAnswer,
  answered,
  selectedIndex,
  onNext,
}: QuizQuestionProps) {
  return (
    <div className="space-y-4">
      <p className="text-base font-medium">{question.question}</p>
      <div className="space-y-2">
        {question.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrect = index === question.correctIndex;
          const showCorrect = answered && isCorrect;
          const showWrong = answered && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => !answered && onAnswer(index)}
              disabled={answered}
              className={cn(
                "w-full text-left p-3 rounded-lg border text-sm transition-all",
                !answered &&
                  "hover:bg-accent hover:border-primary/20 cursor-pointer",
                answered && "cursor-default",
                showCorrect && "border-emerald-500 bg-emerald-500/10",
                showWrong && "border-red-500 bg-red-500/10",
                isSelected && !answered && "border-primary bg-primary/5"
              )}
            >
              <div className="flex items-center gap-2">
                {showCorrect && (
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                )}
                {showWrong && (
                  <XCircle className="size-4 text-red-600 shrink-0" />
                )}
                <span>{option}</span>
              </div>
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="space-y-3">
          <div className="rounded-lg bg-muted/50 p-3 text-sm">
            <p className="font-medium text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Explanation
            </p>
            <p>{question.explanation}</p>
          </div>
          <Button onClick={onNext} size="sm">
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
