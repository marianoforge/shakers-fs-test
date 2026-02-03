'use client';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ProjectSortOrder } from '@/hooks/use-filters';
import { colors } from '@/theme';

interface ProjectsHeaderProps {
  onFilterClick?: () => void;
  sortOrder: ProjectSortOrder;
  onSortChange: (order: ProjectSortOrder) => void;
  activeFiltersCount?: number;
}

export function ProjectsHeader({
  onFilterClick,
  sortOrder,
  onSortChange,
  activeFiltersCount = 0,
}: ProjectsHeaderProps) {
  const handleSortToggle = () => {
    const newOrder: ProjectSortOrder =
      sortOrder === 'publishedAt_desc' ? 'publishedAt_asc' : 'publishedAt_desc';
    onSortChange(newOrder);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 2,
        pt: { xs: 3, sm: 3 },
      }}
    >
      <Button
        variant="text"
        startIcon={<Image src="/icons/filter.svg" alt="" width={16} height={16} />}
        onClick={onFilterClick}
        sx={{
          color: colors.text.green8,
          fontSize: 12,
          fontWeight: 400,
          px: 1,
          py: 0.75,
          borderRadius: 0.75,
          minWidth: 'auto',
          minHeight: 'auto',
          '&:hover': {
            bgcolor: 'rgba(3, 48, 40, 0.04)',
          },
          '& .MuiButton-startIcon': {
            mr: 0.75,
          },
        }}
      >
        Filtrar
        {activeFiltersCount > 0 && (
          <Box
            component="span"
            sx={{
              ml: 0.5,
              px: 0.75,
              py: 0.25,
              bgcolor: colors.green[8],
              color: colors.grey[0],
              borderRadius: 0.75,
              fontSize: 12,
              fontWeight: 500,
              minWidth: 18,
              textAlign: 'center',
            }}
          >
            {activeFiltersCount}
          </Box>
        )}
      </Button>

      <Button
        variant="outlined"
        startIcon={
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              transform: sortOrder === 'publishedAt_desc' ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          >
            <Image src="/icons/arrow-down.svg" alt="" width={16} height={16} />
          </Box>
        }
        onClick={handleSortToggle}
        sx={{
          color: colors.text.green8,
          fontSize: 12,
          fontWeight: 400,
          px: 1,
          py: 0.75,
          borderRadius: 0.75,
          borderColor: colors.green[8],
          minWidth: 'auto',
          minHeight: 'auto',
          '&:hover': {
            borderColor: colors.green[8],
            bgcolor: 'rgba(3, 48, 40, 0.04)',
          },
          '& .MuiButton-startIcon': {
            mr: 0.75,
          },
        }}
      >
        publicación
      </Button>
    </Box>
  );
}
