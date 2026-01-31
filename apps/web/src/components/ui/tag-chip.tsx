'use client';

import Chip from '@mui/material/Chip';

interface TagChipProps {
  label: string;
  variant?: 'skill' | 'specialty';
}

export function TagChip({ label, variant = 'skill' }: TagChipProps) {
  const isSpecialty = variant === 'specialty';

  return (
    <Chip
      label={label}
      size="small"
      sx={{
        bgcolor: isSpecialty ? 'primary.main' : 'grey.100',
        color: isSpecialty ? 'white' : 'text.primary',
        fontWeight: 500,
        fontSize: '0.75rem',
        height: 24,
        '& .MuiChip-label': {
          px: 1.5,
        },
      }}
    />
  );
}
