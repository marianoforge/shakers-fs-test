'use client';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface ProjectsHeaderProps {
  onFilterClick?: () => void;
  onSortClick?: () => void;
}

export function ProjectsHeader({ onFilterClick, onSortClick }: ProjectsHeaderProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 2,
        pt: 3,
        pb: 1.5,
      }}
    >
      <Button
        variant="text"
        startIcon={<Image src="/icons/filter.svg" alt="" width={16} height={16} />}
        onClick={onFilterClick}
        sx={{
          color: '#033028',
          fontSize: 12,
          fontWeight: 400,
          px: 1,
          py: 0.75,
          borderRadius: 1.5,
          '&:hover': {
            bgcolor: 'rgba(3, 48, 40, 0.04)',
          },
        }}
      >
        Filtrar
      </Button>
      <Button
        variant="outlined"
        startIcon={<Image src="/icons/arrow-down.svg" alt="" width={16} height={16} />}
        onClick={onSortClick}
        sx={{
          color: '#033028',
          fontSize: 12,
          fontWeight: 400,
          px: 1,
          py: 0.75,
          borderRadius: 1.5,
          borderColor: '#033028',
          '&:hover': {
            borderColor: '#033028',
            bgcolor: 'rgba(3, 48, 40, 0.04)',
          },
        }}
      >
        publicación
      </Button>
    </Box>
  );
}
