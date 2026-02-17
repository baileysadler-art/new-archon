// ============================================================
// CURRICULUM STRUCTURE
// ============================================================

export interface Phase {
  id: string;
  slug: string;
  title: string;
  description: string;
  weekRange: string;
  estimatedHours: number;
  icon: string;
  color: string;
  modules: Module[];
}

export interface Module {
  id: string;
  slug: string;
  phaseId: string;
  title: string;
  description: string;
  estimatedHours: number;
  lessons: Lesson[];
  labExercise?: LabExercise;
  databricksCompanion?: DatabricksCompanion;
}

export interface DatabricksCompanion {
  title: string;
  url: string;
  description: string;
  isFree: boolean;
}

export interface Lesson {
  id: string;
  slug: string;
  moduleId: string;
  title: string;
  estimatedMinutes: number;
  content: LessonContent;
  quiz?: Quiz;
}

export interface LessonContent {
  sections: ContentSection[];
  keyConcepts: KeyConcept[];
  externalResources: ExternalResource[];
}

export interface ContentSection {
  heading: string;
  body: string;
  type: "text" | "note" | "warning" | "example" | "code";
}

export interface KeyConcept {
  term: string;
  definition: string;
}

export interface ExternalResource {
  title: string;
  url: string;
  type: "article" | "video" | "documentation" | "course" | "tool";
  isFree: boolean;
  description?: string;
}

export interface LabExercise {
  title: string;
  objective: string;
  instructions: string[];
  deliverable: string;
  estimatedMinutes: number;
}

// ============================================================
// QUIZ STRUCTURE
// ============================================================

export interface Quiz {
  id: string;
  lessonId: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// ============================================================
// PROGRESS TRACKING (stored in localStorage)
// ============================================================

export interface UserProgress {
  lessonsCompleted: string[];
  quizAttempts: QuizAttempt[];
  streakData: StreakData;
  lastActiveDate: string;
  startDate: string;
  bookmarkedResources: string[];
}

export interface QuizAttempt {
  quizId: string;
  lessonId: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  answers: number[];
  completedAt: string;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  activeDates: string[];
}

// ============================================================
// RESOURCE LIBRARY
// ============================================================

export interface Resource {
  id: string;
  title: string;
  url: string;
  description: string;
  type: "article" | "video" | "documentation" | "course" | "tool" | "book";
  phaseIds: string[];
  tags: string[];
  isFree: boolean;
}
