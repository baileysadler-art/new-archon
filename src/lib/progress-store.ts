import type { UserProgress, QuizAttempt } from "@/types";

const STORAGE_KEY = "ai-security-academy-progress";

export function getDefaultProgress(): UserProgress {
  return {
    lessonsCompleted: [],
    quizAttempts: [],
    streakData: {
      currentStreak: 0,
      longestStreak: 0,
      activeDates: [],
    },
    lastActiveDate: "",
    startDate: new Date().toISOString().split("T")[0],
    bookmarkedResources: [],
  };
}

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return getDefaultProgress();
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return getDefaultProgress();
    return JSON.parse(stored) as UserProgress;
  } catch {
    return getDefaultProgress();
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    console.error("Failed to save progress to localStorage");
  }
}

export function markLessonComplete(
  progress: UserProgress,
  lessonId: string
): UserProgress {
  if (progress.lessonsCompleted.includes(lessonId)) return progress;
  const today = new Date().toISOString().split("T")[0];
  const updatedStreak = updateStreak(progress.streakData, today);
  return {
    ...progress,
    lessonsCompleted: [...progress.lessonsCompleted, lessonId],
    lastActiveDate: today,
    streakData: updatedStreak,
  };
}

export function addQuizAttempt(
  progress: UserProgress,
  attempt: QuizAttempt
): UserProgress {
  const today = new Date().toISOString().split("T")[0];
  const updatedStreak = updateStreak(progress.streakData, today);
  return {
    ...progress,
    quizAttempts: [...progress.quizAttempts, attempt],
    lastActiveDate: today,
    streakData: updatedStreak,
  };
}

function updateStreak(
  streakData: UserProgress["streakData"],
  today: string
): UserProgress["streakData"] {
  const { activeDates, currentStreak, longestStreak } = streakData;

  if (activeDates.includes(today)) {
    return streakData;
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split("T")[0];

  const wasActiveYesterday = activeDates.includes(yesterdayStr);
  const newStreak = wasActiveYesterday ? currentStreak + 1 : 1;
  const newLongest = Math.max(longestStreak, newStreak);

  return {
    currentStreak: newStreak,
    longestStreak: newLongest,
    activeDates: [...activeDates, today],
  };
}
