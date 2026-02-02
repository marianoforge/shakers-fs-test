'use client';

import { useState } from 'react';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';

import { ProjectSortOrder } from '@/hooks/use-filters';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleSortClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSortSelect = (order: ProjectSortOrder) => {
    onSortChange(order);
    handleClose();
  };

  const sortLabel = sortOrder === 'publishedAt_desc' ? 'Más reciente' : 'Más antiguo';

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
        {activeFiltersCount > 0 && (
          <Box
            component="span"
            sx={{
              ml: 0.5,
              px: 0.75,
              py: 0.25,
              bgcolor: '#033028',
              color: 'white',
              borderRadius: '10px',
              fontSize: 10,
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
        startIcon={<Image src="/icons/arrow-down.svg" alt="" width={16} height={16} />}
        onClick={handleSortClick}
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
        {sortLabel}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: '6px',
            boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
            minWidth: 280,
          },
        }}
      >
        <Box sx={{ px: 2, py: 1.5 }}>
          <Typography
            sx={{
              color: '#181B1A',
              fontSize: 14,
              fontWeight: 500,
              lineHeight: '20px',
              mb: 1,
            }}
          >
            Ordenar por fecha de publicación
          </Typography>

          <MenuItem
            onClick={() => handleSortSelect('publishedAt_desc')}
            sx={{
              px: 0,
              py: 0.5,
              '&:hover': { bgcolor: 'transparent' },
            }}
          >
            <Radio
              checked={sortOrder === 'publishedAt_desc'}
              sx={{
                p: 0,
                mr: 1.5,
                width: 20,
                height: 20,
                color: '#E4E7E7',
                '&.Mui-checked': { color: '#0B5A4C' },
              }}
            />
            <Typography
              sx={{
                color: '#181B1A',
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '20px',
              }}
            >
              Más reciente primero
            </Typography>
          </MenuItem>

          <MenuItem
            onClick={() => handleSortSelect('publishedAt_asc')}
            sx={{
              px: 0,
              py: 0.5,
              '&:hover': { bgcolor: 'transparent' },
            }}
          >
            <Radio
              checked={sortOrder === 'publishedAt_asc'}
              sx={{
                p: 0,
                mr: 1.5,
                width: 20,
                height: 20,
                color: '#E4E7E7',
                '&.Mui-checked': { color: '#0B5A4C' },
              }}
            />
            <Typography
              sx={{
                color: '#181B1A',
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '20px',
              }}
            >
              Más antiguo primero
            </Typography>
          </MenuItem>
        </Box>
      </Menu>
    </Box>
  );
}
