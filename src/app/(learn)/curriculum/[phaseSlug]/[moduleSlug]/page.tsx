"use client";

import { useParams } from "next/navigation";
import { ExternalLink, FlaskConical } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { LessonCard } from "@/components/curriculum/lesson-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getModuleBySlug } from "@/lib/curriculum-helpers";

export default function ModuleDetailPage() {
  const params = useParams();
  const phaseSlug = params.phaseSlug as string;
  const moduleSlug = params.moduleSlug as string;
  const module = getModuleBySlug(phaseSlug, moduleSlug);

  if (!module) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-lg font-semibold">Module not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={module.title}
        description={module.description}
      />

      {/* Databricks Companion */}
      {module.databricksCompanion && (
        <a
          href={module.databricksCompanion.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Card className="border-orange-500/30 bg-orange-500/5 hover:shadow-md transition-all">
            <CardContent className="p-4 flex items-start gap-3">
              <ExternalLink className="size-5 text-orange-600 shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-orange-700">
                    Databricks Companion Course
                  </p>
                  {module.databricksCompanion.isFree && (
                    <Badge className="text-[10px] bg-emerald-500/10 text-emerald-700 border-0">
                      Free
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {module.databricksCompanion.title} &mdash;{" "}
                  {module.databricksCompanion.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </a>
      )}

      {/* Lessons */}
      {module.lessons.length > 0 ? (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">
            Lessons ({module.lessons.length})
          </h3>
          {module.lessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              phaseSlug={phaseSlug}
              moduleSlug={moduleSlug}
            />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-sm text-muted-foreground">
              Lessons for this module are coming soon. Check back later!
            </p>
          </CardContent>
        </Card>
      )}

      {/* Lab Exercise */}
      {module.labExercise && (
        <Card className="border-primary/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <FlaskConical className="size-4 text-primary" />
              Lab Exercise: {module.labExercise.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm">
              <strong>Objective:</strong> {module.labExercise.objective}
            </p>
            <div>
              <p className="text-sm font-medium mb-2">Instructions:</p>
              <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground">
                {module.labExercise.instructions.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </div>
            <div className="rounded-lg bg-muted/50 p-3">
              <p className="text-xs font-medium mb-1">Deliverable</p>
              <p className="text-sm text-muted-foreground">
                {module.labExercise.deliverable}
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              Estimated time: ~{module.labExercise.estimatedMinutes} minutes
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
