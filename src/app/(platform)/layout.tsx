"use client";

import { PlatformSidebar } from "@/components/platform/platform-sidebar";
import { PlatformHeader } from "@/components/platform/platform-header";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark min-h-screen mesh-gradient">
      <PlatformSidebar className="hidden lg:flex" />
      <div className="lg:pl-64">
        <PlatformHeader />
        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
