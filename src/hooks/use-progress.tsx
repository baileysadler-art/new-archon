"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { UserProgress, QuizAttempt } from "@/types";
import {
  loadProgress,
  saveProgress,
  getDefaultProgress,
  markLessonComplete as markComplete,
  addQuizAttempt as addAttempt,
} from "@/lib/progress-store";
import {
  getModuleProgress as getModProgress,
  getPhaseProgress as getPhProgress,
  getOverallProgress as getOvProgress,
  getTotalLessonCount,
} from "@/lib/curriculum-helpers";

interface ProgressContextValue {
  progress: UserProgress;
  isLoaded: boolean;
  markLessonComplete: (lessonId: string) => void;
  isLessonComplete: (lessonId: string) => boolean;
  saveQuizAttempt: (attempt: QuizAttempt) => void;
  getModuleProgress: (moduleId: string) => { completed: number; total: number };
  getPhaseProgress: (phaseId: string) => { completed: number; total: number };
  getOverallProgress: () => {
    completed: number;
    total: number;
    percentage: number;
  };
  getBestQuizScore: (quizId: string) => number | null;
  getAverageQuizScore: () => number;
  getTotalEstimatedHoursRemaining: () => number;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgress>(getDefaultProgress());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = loadProgress();
    setProgress(stored);
    setIsLoaded(true);
  }, []);

  const updateProgress = useCallback((newProgress: UserProgress) => {
    setProgress(newProgress);
    saveProgress(newProgress);
  }, []);

  const handleMarkLessonComplete = useCallback(
    (lessonId: string) => {
      const updated = markComplete(progress, lessonId);
      updateProgress(updated);
    },
    [progress, updateProgress]
  );

  const isLessonComplete = useCallback(
    (lessonId: string) => {
      return progress.lessonsCompleted.includes(lessonId);
    },
    [progress.lessonsCompleted]
  );

  const handleSaveQuizAttempt = useCallback(
    (attempt: QuizAttempt) => {
      const updated = addAttempt(progress, attempt);
      updateProgress(updated);
    },
    [progress, updateProgress]
  );

  const handleGetModuleProgress = useCallback(
    (moduleId: string) => {
      return getModProgress(moduleId, progress.lessonsCompleted);
    },
    [progress.lessonsCompleted]
  );

  const handleGetPhaseProgress = useCallback(
    (phaseId: string) => {
      return getPhProgress(phaseId, progress.lessonsCompleted);
    },
    [progress.lessonsCompleted]
  );

  const handleGetOverallProgress = useCallback(() => {
    return getOvProgress(progress.lessonsCompleted);
  }, [progress.lessonsCompleted]);

  const getBestQuizScore = useCallback(
    (quizId: string) => {
      const attempts = progress.quizAttempts.filter(
        (a) => a.quizId === quizId
      );
      if (attempts.length === 0) return null;
      return Math.max(...attempts.map((a) => a.score));
    },
    [progress.quizAttempts]
  );

  const getAverageQuizScore = useCallback(() => {
    if (progress.quizAttempts.length === 0) return 0;
    const total = progress.quizAttempts.reduce((sum, a) => sum + a.score, 0);
    return Math.round(total / progress.quizAttempts.length);
  }, [progress.quizAttempts]);

  const getTotalEstimatedHoursRemaining = useCallback(() => {
    const totalLessons = getTotalLessonCount();
    const completedLessons = progress.lessonsCompleted.length;
    const remainingLessons = totalLessons - completedLessons;
    // Rough estimate: ~30 min per lesson average
    return Math.round((remainingLessons * 30) / 60);
  }, [progress.lessonsCompleted]);

  const resetProgress = useCallback(() => {
    const fresh = getDefaultProgress();
    updateProgress(fresh);
  }, [updateProgress]);

  return (
    <ProgressContext.Provider
      value={{
        progress,
        isLoaded,
        markLessonComplete: handleMarkLessonComplete,
        isLessonComplete,
        saveQuizAttempt: handleSaveQuizAttempt,
        getModuleProgress: handleGetModuleProgress,
        getPhaseProgress: handleGetPhaseProgress,
        getOverallProgress: handleGetOverallProgress,
        getBestQuizScore,
        getAverageQuizScore,
        getTotalEstimatedHoursRemaining,
        resetProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
}
