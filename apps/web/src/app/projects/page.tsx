'use client';

import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { ProjectCard, ProjectsHeader, ReferralBanner } from '@/components/projects';
import { EmptyState, ErrorState, LoadingState } from '@/components/ui';
import { useProjects, useStaticData } from '@/hooks';
import { createIdResolver } from '@/lib/utils';

export default function ProjectsPage() {
  const { data: projects = [], isLoading, isError, error, refetch } = useProjects();
  const { data: staticData } = useStaticData();

  const resolver = useMemo(() => createIdResolver(staticData), [staticData]);

  return (
    <Box
      sx={{
        px: 5,
        py: 5,
        bgcolor: 'white',
        minHeight: 'calc(100vh - 65px)',
      }}
    >
      <ProjectsHeader />

      <Box sx={{ mt: 5 }}>
        <ReferralBanner />

        {isLoading && <LoadingState message="Cargando proyectos..." />}

        {isError && (
          <ErrorState
            message={error?.message ?? 'Error al cargar los proyectos'}
            onRetry={() => refetch()}
          />
        )}

        {!isLoading && !isError && projects.length === 0 && (
          <EmptyState message="No se encontraron proyectos disponibles" />
        )}

        {!isLoading && !isError && projects.length > 0 && (
          <Stack spacing={5}>
            {projects.map((project) => {
              const skillIds = project.positions?.[0]?.skills ?? [];
              const skillNames = resolver.resolveSkills(skillIds);
              const categoryName = resolver.resolveCategory(project.category);
              const subcategoryName = project.subcategory
                ? resolver.resolveSubcategory(project.subcategory)
                : undefined;

              return (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  organization={{
                    name: project.organization.name,
                    logo: project.organization.logo ?? '/logos/logos_brand.png',
                  }}
                  category={categoryName}
                  subcategory={subcategoryName || undefined}
                  budget={{
                    total: project.budget.total ?? null,
                    hourFrom: project.budget.hourFrom ?? null,
                    hourTo: project.budget.hourTo ?? null,
                  }}
                  skills={skillNames}
                />
              );
            })}
          </Stack>
        )}
      </Box>
    </Box>
  );
}
