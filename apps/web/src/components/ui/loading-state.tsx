'use client';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { colors } from '@/theme';

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({ message = 'Cargando...' }: LoadingStateProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        gap: 2,
      }}
    >
      <CircularProgress sx={{ color: colors.green[6] }} />
      <Typography
        sx={{
          color: colors.text.grey6,
          fontSize: 14,
          fontWeight: 400,
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}
