"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuizQuestion } from "@/components/quiz/quiz-question";
import { QuizResults } from "@/components/quiz/quiz-results";
import { useProgress } from "@/hooks/use-progress";
import type { Quiz, QuizAttempt } from "@/types";

interface QuizContainerProps {
  quiz: Quiz;
  lessonId: string;
  onComplete: () => void;
}

type Phase = "intro" | "questions" | "results";

export function QuizContainer({
  quiz,
  lessonId,
  onComplete,
}: QuizContainerProps) {
  const { saveQuizAttempt } = useProgress();
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [answered, setAnswered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const handleStart = () => {
    setPhase("questions");
    setCurrentQuestion(0);
    setAnswers([]);
    setCorrectCount(0);
    setAnswered(false);
    setSelectedIndex(null);
  };

  const handleAnswer = (index: number) => {
    setSelectedIndex(index);
    setAnswered(true);
    const isCorrect = index === quiz.questions[currentQuestion].correctIndex;
    if (isCorrect) setCorrectCount((c) => c + 1);
    setAnswers((prev) => [...prev, index]);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((q) => q + 1);
      setAnswered(false);
      setSelectedIndex(null);
    } else {
      // Quiz complete
      const finalCorrect =
        correctCount +
        (selectedIndex === quiz.questions[currentQuestion].correctIndex &&
        !answers.includes(selectedIndex)
          ? 0
          : 0);
      const score = Math.round((correctCount / quiz.questions.length) * 100);

      const attempt: QuizAttempt = {
        quizId: quiz.id,
        lessonId,
        score,
        totalQuestions: quiz.questions.length,
        correctAnswers: correctCount,
        answers,
        completedAt: new Date().toISOString(),
      };
      saveQuizAttempt(attempt);
      setPhase("results");
    }
  };

  const score = Math.round((correctCount / quiz.questions.length) * 100);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          <HelpCircle className="size-4" />
          Knowledge Check
        </CardTitle>
      </CardHeader>
      <CardContent>
        {phase === "intro" && (
          <div className="text-center py-4 space-y-3">
            <p className="text-sm text-muted-foreground">
              {quiz.questions.length} question
              {quiz.questions.length !== 1 ? "s" : ""} to test your
              understanding
            </p>
            <Button onClick={handleStart}>Start Quiz</Button>
          </div>
        )}

        {phase === "questions" && (
          <div>
            <p className="text-xs text-muted-foreground mb-3">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </p>
            <QuizQuestion
              question={quiz.questions[currentQuestion]}
              onAnswer={handleAnswer}
              answered={answered}
              selectedIndex={selectedIndex}
              onNext={handleNext}
            />
          </div>
        )}

        {phase === "results" && (
          <QuizResults
            score={score}
            totalQuestions={quiz.questions.length}
            correctAnswers={correctCount}
            onRetry={handleStart}
            onContinue={onComplete}
          />
        )}
      </CardContent>
    </Card>
  );
}
