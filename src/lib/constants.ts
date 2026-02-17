import {
  LayoutDashboard,
  BookOpen,
  ClipboardCheck,
  Library,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const sidebarNav: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Curriculum", href: "/curriculum", icon: BookOpen },
  { title: "Quizzes", href: "/quizzes", icon: ClipboardCheck },
  { title: "Resources", href: "/resources", icon: Library },
];

export const phaseColorMap: Record<string, string> = {
  blue: "text-blue-600 bg-blue-500/10 border-blue-500/20",
  emerald: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",
  violet: "text-violet-600 bg-violet-500/10 border-violet-500/20",
  orange: "text-orange-600 bg-orange-500/10 border-orange-500/20",
  rose: "text-rose-600 bg-rose-500/10 border-rose-500/20",
  amber: "text-amber-600 bg-amber-500/10 border-amber-500/20",
};

export const phaseProgressColors: Record<string, string> = {
  blue: "bg-blue-500",
  emerald: "bg-emerald-500",
  violet: "bg-violet-500",
  orange: "bg-orange-500",
  rose: "bg-rose-500",
  amber: "bg-amber-500",
};

export const phaseTextColors: Record<string, string> = {
  blue: "text-blue-600",
  emerald: "text-emerald-600",
  violet: "text-violet-600",
  orange: "text-orange-600",
  rose: "text-rose-600",
  amber: "text-amber-600",
};
