'use client';

import { useRouter } from 'next/navigation';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ChevronLeftIcon } from '@/components/ui';

interface ProjectDetailBreadcrumbProps {
  projectTitle: string;
}

export function ProjectDetailBreadcrumb({ projectTitle }: ProjectDetailBreadcrumbProps) {
  const router = useRouter();

  return (
    <Box
      sx={{
        pt: { xs: 1.5, sm: 5 },
        px: { xs: 2, sm: 5 },
        background: 'rgba(255, 255, 255, 0.80)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          onClick={() => router.push('/projects')}
          sx={{
            p: 0.75,
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
            cursor: 'pointer',
            '&:hover': { opacity: 0.7 },
          }}
        >
          <Box
            sx={{
              width: 16,
              height: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ChevronLeftIcon size={16} />
          </Box>
          <Typography
            sx={{
              color: '#033028',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: '16px',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Atrás
          </Typography>
        </Box>

        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <Box sx={{ py: 0.5, px: 0.75, display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Typography
              sx={{
                color: '#555E5C',
                fontSize: { xs: 10, sm: 12 },
                fontWeight: 400,
                lineHeight: { xs: '14px', sm: '16px' },
              }}
            >
              Buscador Proyectos
            </Typography>
          </Box>
          <Box
            sx={{
              flex: 1,
              py: 0.5,
              px: 0.75,
              display: 'flex',
              alignItems: 'center',
              gap: 0.75,
            }}
          >
            <Typography
              sx={{
                color: '#555E5C',
                fontSize: { xs: 10, sm: 12 },
                fontWeight: 400,
                lineHeight: { xs: '14px', sm: '16px' },
              }}
            >
              /
            </Typography>
            <Typography
              sx={{
                flex: 1,
                color: '#181B1A',
                fontSize: { xs: 10, sm: 12 },
                fontStyle: 'italic',
                fontWeight: 700,
                lineHeight: { xs: '14px', sm: '16px' },
                maxWidth: { xs: 'none', sm: 400 },
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: { xs: 'normal', sm: 'nowrap' },
              }}
            >
              {projectTitle}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
