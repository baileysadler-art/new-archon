"use client";

import {
  Info,
  AlertTriangle,
  Lightbulb,
  Code,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { LessonContent as LessonContentType } from "@/types";

interface LessonContentProps {
  content: LessonContentType;
}

function renderBody(body: string) {
  // Parse **bold** and *italic* markers
  const parts = body.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    return <span key={i}>{part}</span>;
  });
}

const sectionStyles = {
  text: {
    border: "",
    bg: "",
    label: "",
    icon: null,
  },
  note: {
    border: "border-l-4 border-l-blue-500",
    bg: "bg-blue-500/5",
    label: "Note",
    icon: Info,
  },
  warning: {
    border: "border-l-4 border-l-amber-500",
    bg: "bg-amber-500/5",
    label: "Security Insight",
    icon: AlertTriangle,
  },
  example: {
    border: "border-l-4 border-l-emerald-500",
    bg: "bg-emerald-500/5",
    label: "Example",
    icon: Lightbulb,
  },
  code: {
    border: "border-l-4 border-l-slate-500",
    bg: "bg-slate-900 text-slate-100 dark:bg-slate-800",
    label: "Code",
    icon: Code,
  },
};

export function LessonContent({ content }: LessonContentProps) {
  return (
    <div className="space-y-8">
      {/* Content Sections */}
      <div className="space-y-6">
        {content.sections.map((section, index) => {
          const style = sectionStyles[section.type];
          const Icon = style.icon;

          return (
            <div
              key={index}
              className={cn(
                "rounded-lg p-4",
                style.border,
                style.bg,
                section.type === "code" && "font-mono text-sm"
              )}
            >
              {style.label && (
                <div className="flex items-center gap-1.5 mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {Icon && <Icon className="size-3.5" />}
                  {style.label}
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{section.heading}</h3>
              <div className="text-sm leading-relaxed whitespace-pre-line">
                {renderBody(section.body)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Key Concepts */}
      {content.keyConcepts.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {content.keyConcepts.map((concept) => (
              <Card key={concept.term}>
                <CardContent className="p-3">
                  <p className="text-sm font-semibold text-primary">
                    {concept.term}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {concept.definition}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* External Resources */}
      {content.externalResources.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <div className="grid gap-3">
            {content.externalResources.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="transition-all hover:shadow-md hover:border-primary/20">
                  <CardContent className="p-3 flex items-start gap-3">
                    <ExternalLink className="size-4 text-muted-foreground shrink-0 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium truncate">
                          {resource.title}
                        </p>
                        <Badge variant="secondary" className="text-[10px] shrink-0">
                          {resource.type}
                        </Badge>
                        {resource.isFree && (
                          <Badge
                            variant="secondary"
                            className="text-[10px] shrink-0 bg-emerald-500/10 text-emerald-700"
                          >
                            Free
                          </Badge>
                        )}
                      </div>
                      {resource.description && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {resource.description}
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
