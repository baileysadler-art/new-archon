"use client";

import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Resource } from "@/types";

interface ResourceCardProps {
  resource: Resource;
}

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <Card className="transition-all hover:shadow-md hover:border-primary/20 h-full">
        <CardContent className="p-4 space-y-2">
          <div className="flex items-start gap-2">
            <ExternalLink className="size-4 text-muted-foreground shrink-0 mt-0.5" />
            <h3 className="text-sm font-medium leading-tight">
              {resource.title}
            </h3>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2">
            {resource.description}
          </p>
          <div className="flex items-center gap-1.5 flex-wrap">
            <Badge variant="secondary" className="text-[10px]">
              {resource.type}
            </Badge>
            {resource.isFree && (
              <Badge
                variant="secondary"
                className="text-[10px] bg-emerald-500/10 text-emerald-700"
              >
                Free
              </Badge>
            )}
            {resource.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-[10px]">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
