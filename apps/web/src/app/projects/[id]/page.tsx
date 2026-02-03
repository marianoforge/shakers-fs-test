'use client';

import { useMemo } from 'react';

import { useParams } from 'next/navigation';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import {
  ProjectDescription,
  ProjectDetailBreadcrumb,
  ProjectDetailHero,
  ProjectFaqs,
  ProjectOwnerCard,
  ProjectPositionCard,
} from '@/components/projects';
import { ErrorState, LoadingState, useToast } from '@/components/ui';
import { useApplications, useProject, useStaticData } from '@/hooks';
import { createIdResolver } from '@/lib/utils';

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = parseInt(params['id'] as string, 10);
  const { showToast } = useToast();

  const { data: project, isLoading, isError, error, refetch } = useProject(projectId);
  const { data: staticData } = useStaticData();
  const { isApplied, apply, withdraw, isApplying, isWithdrawing } = useApplications(projectId);

  const resolver = useMemo(() => createIdResolver(staticData), [staticData]);

  const handleApply = async (positionId: number) => {
    try {
      if (isApplied(positionId)) {
        await withdraw(positionId);
        showToast('Candidatura retirada con éxito', 'info');
      } else {
        await apply(positionId);
        showToast('Aplicación enviada con éxito', 'success');
      }
    } catch {
      showToast('Error al procesar la solicitud', 'error');
    }
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          px: { xs: 2, sm: 5 },
          py: { xs: 2, sm: 5 },
          bgcolor: 'white',
          minHeight: 'calc(100vh - 65px)',
        }}
      >
        <LoadingState message="Cargando proyecto..." />
      </Box>
    );
  }

  if (isError || !project) {
    return (
      <Box
        sx={{
          px: { xs: 2, sm: 5 },
          py: { xs: 2, sm: 5 },
          bgcolor: 'white',
          minHeight: 'calc(100vh - 65px)',
        }}
      >
        <ErrorState
          message={error?.message ?? 'Error al cargar el proyecto'}
          onRetry={() => refetch()}
        />
      </Box>
    );
  }

  const categoryName = resolver.resolveCategory(project.category);
  const firstPosition = project.positions?.[0];
  const specialtyIds = firstPosition?.specialties ?? [];
  const specialtyNames = resolver.resolveSpecialties(specialtyIds);
  const primarySpecialty = specialtyNames[0] ?? 'Especialista';

  return (
    <Box sx={{ bgcolor: 'white', minHeight: 'calc(100vh - 65px)' }}>
      <ProjectDetailBreadcrumb projectTitle={project.title} />

      <Box sx={{ px: { xs: 2, sm: 5 }, pb: { xs: 3, sm: 5 } }}>
        <Box sx={{ mt: { xs: 2, sm: 3 } }}>
          <ProjectDetailHero
            title={project.title}
            category={categoryName}
            categoryId={project.category}
            specialty={primarySpecialty}
            startDate={project.startDate}
            totalHours={project.totalHours}
            budget={project.budget.total}
            talentsCount={project.positions.length}
          />
        </Box>

        <Box sx={{ mt: { xs: 5, sm: 5 } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            <ProjectDescription description={project.description} goals={project.goals} />
            <ProjectFaqs faqs={project.faqs} />
          </Box>
        </Box>

        <Box
          sx={{
            mt: 8,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 8,
          }}
        >
          <Box sx={{ order: { xs: 2, md: 1 } }}>
            <ProjectOwnerCard
              name={project.projectLeader.name}
              lastName={project.projectLeader.lastName}
              organization={{
                name: project.organization.name,
                logo: project.organization.logo ?? '/logos/logos_brand.png',
              }}
            />
          </Box>

          {project.positions.length > 0 && (
            <Box
              sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, order: { xs: 1, md: 2 } }}
            >
              <Typography
                sx={{
                  color: '#033028',
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: '26px',
                }}
              >
                Equipo
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  flexWrap: 'wrap',
                  alignItems: 'stretch',
                }}
              >
                {project.positions.map((position) => {
                  const skillNames = resolver.resolveSkills(position.skills);
                  return (
                    <ProjectPositionCard
                      key={position.id}
                      position={position}
                      skillNames={skillNames}
                      onApply={handleApply}
                      isApplied={isApplied(position.id)}
                      isLoading={isApplying || isWithdrawing}
                    />
                  );
                })}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
