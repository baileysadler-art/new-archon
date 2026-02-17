"use client";

import { ProgressProvider } from "@/hooks/use-progress";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function LearnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProgressProvider>
      <div className="min-h-screen mesh-gradient">
        <Sidebar className="hidden lg:flex" />
        <div className="lg:pl-64">
          <Header />
          <main className="p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </ProgressProvider>
  );
}
