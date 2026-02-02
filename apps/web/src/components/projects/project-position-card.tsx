'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import type { Position } from '@shakers/shared';

interface ProjectPositionCardProps {
  position: Position;
  skillNames: string[];
  onApply: (positionId: number) => void;
  isApplied?: boolean;
}

export function ProjectPositionCard({
  position,
  skillNames,
  onApply,
  isApplied = false,
}: ProjectPositionCardProps) {
  const displaySkills = skillNames.slice(0, 4).join(', ');
  const hasMoreSkills = skillNames.length > 4;

  return (
    <Box
      sx={{
        width: 300,
        p: 3,
        background: 'white',
        borderRadius: '12px',
        outline: '1px #E4E7E7 solid',
        outlineOffset: '-1px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Typography
        sx={{
          color: '#181B1A',
          fontSize: 20,
          fontWeight: 400,
          lineHeight: '28px',
          minHeight: 56,
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        {position.title}
      </Typography>

      <Typography
        sx={{
          color: '#555E5C',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '20px',
          minHeight: 40,
          mt: 2,
          flex: 1,
        }}
      >
        {displaySkills}
        {hasMoreSkills && '...'}
      </Typography>

      <Button
        onClick={() => onApply(position.id)}
        fullWidth
        sx={{
          mt: 2,
          py: 1,
          px: 1.5,
          background: isApplied ? '#EDF7F6' : '#F0FF3D',
          borderRadius: '6px',
          color: '#181B1A',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '20px',
          textTransform: 'none',
          '&:hover': {
            background: isApplied ? '#d9efed' : '#e5f536',
          },
        }}
      >
        {isApplied ? 'Retirar candidatura' : 'Aplicar'}
      </Button>
    </Box>
  );
}
