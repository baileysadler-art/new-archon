"use client";

import { usePathname } from "next/navigation";
import { Bell, ChevronRight } from "lucide-react";
import { PlatformMobileSidebar } from "./platform-mobile-sidebar";

const routeLabels: Record<string, string> = {
  "/demo": "Overview",
  "/demo/systems": "AI Systems",
  "/demo/scans": "Scan Results",
  "/demo/compliance": "Compliance",
};

export function PlatformHeader() {
  const pathname = usePathname();
  const pageLabel = routeLabels[pathname] || "Dashboard";

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-2">
        <PlatformMobileSidebar />
        <span className="text-sm text-muted-foreground">Platform</span>
        <ChevronRight className="size-3 text-muted-foreground" />
        <span className="text-sm font-medium">{pageLabel}</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
          <Bell className="size-4" />
          <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            7
          </span>
        </button>
        <div className="flex size-8 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
          MF
        </div>
      </div>
    </header>
  );
}
