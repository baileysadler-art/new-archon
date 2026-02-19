"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Shield, LayoutDashboard, Server, Search, Scale, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/demo", label: "Overview", icon: LayoutDashboard },
  { href: "/demo/systems", label: "AI Systems", icon: Server },
  { href: "/demo/scans", label: "Scan Results", icon: Search },
  { href: "/demo/compliance", label: "Compliance", icon: Scale },
];

interface PlatformSidebarProps {
  className?: string;
}

export function PlatformSidebar({ className }: PlatformSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-30 w-64 flex-col border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <div className="flex h-14 items-center gap-2 border-b px-4">
        <Shield className="size-5 text-primary" />
        <span className="font-semibold tracking-tight">Archon AI</span>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/demo"
              ? pathname === "/demo"
              : pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Building2 className="size-4" />
          </div>
          <div>
            <p className="text-sm font-medium">Meridian Financial</p>
            <p className="text-xs text-muted-foreground">Enterprise Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
