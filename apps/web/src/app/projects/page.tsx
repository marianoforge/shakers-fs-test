'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { ProjectCard, ProjectsHeader, ReferralBanner } from '@/components/projects';
import { mockProjects } from '@/mocks';

export default function ProjectsPage() {
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

        <Stack spacing={5}>
          {mockProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              organization={project.organization}
              category={project.category}
              subcategory={project.subcategory}
              budget={project.budget}
              skills={project.skills}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
