'use client';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { colors } from '@/theme';

interface FilterChipProps {
  label: string;
  onDelete?: () => void;
}

export function FilterChip({ label, onDelete }: FilterChipProps) {
  return (
    <Box
      sx={{
        height: 22,
        px: 0.75,
        py: 0.5,
        bgcolor: colors.surface.green2,
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        gap: 0.75,
      }}
    >
      <Typography
        sx={{
          color: colors.text.green8,
          fontSize: 10,
          fontWeight: 400,
          lineHeight: '14px',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
      </Typography>
      {onDelete && (
        <Box
          onClick={onDelete}
          sx={{
            width: 14,
            height: 14,
            bgcolor: colors.green[8],
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <CloseIcon sx={{ fontSize: 10, color: colors.grey[0] }} />
        </Box>
      )}
    </Box>
  );
}
