'use client';

import { useMemo } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import {
  AppliedFilters,
  FiltersModal,
  ProjectCard,
  ProjectsHeader,
  ReferralBanner,
} from '@/components/projects';
import { EmptyState, ErrorState, LoadingState } from '@/components/ui';
import { useFilters, useProjects, useStaticData } from '@/hooks';
import { createIdResolver } from '@/lib/utils';

export default function ProjectsPage() {
  const {
    filters,
    tempFilters,
    isModalOpen,
    hasActiveFilters,
    activeFiltersCount,
    openModal,
    closeModal,
    applyFilters,
    clearFilters,
    clearAllFilters,
    updateTempFilter,
    toggleOperator,
    removeFilter,
    setSortOrder,
    getProjectFilter,
  } = useFilters();

  const projectFilter = getProjectFilter();
  const { data: projects = [], isLoading, isError, error, refetch } = useProjects(projectFilter);
  const { data: staticData } = useStaticData();

  const resolver = useMemo(() => createIdResolver(staticData), [staticData]);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 5 },
        py: { xs: 2, sm: 5 },
        bgcolor: 'white',
        minHeight: 'calc(100vh - 65px)',
        overflow: 'hidden',
      }}
    >
      <ProjectsHeader
        onFilterClick={openModal}
        sortOrder={filters.order}
        onSortChange={setSortOrder}
        activeFiltersCount={activeFiltersCount}
      />

      <FiltersModal
        open={isModalOpen}
        onClose={closeModal}
        onApply={applyFilters}
        onClear={clearFilters}
        filters={tempFilters}
        onFilterChange={updateTempFilter}
        onToggleOperator={toggleOperator}
        staticData={staticData}
      />

      {hasActiveFilters && (
        <AppliedFilters
          filters={filters}
          staticData={staticData}
          onRemoveFilter={removeFilter}
          onClearAll={clearAllFilters}
        />
      )}

      <Box sx={{ mt: hasActiveFilters ? 2 : 5, pb: { xs: 14, sm: 0 } }}>
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
            {projects.map((project, index) => {
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
                  index={index}
                />
              );
            })}
          </Stack>
        )}
      </Box>
    </Box>
  );
}
