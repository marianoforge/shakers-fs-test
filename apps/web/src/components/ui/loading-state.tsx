'use client';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

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
      <CircularProgress sx={{ color: '#0B5A4C' }} />
      <Typography
        sx={{
          color: '#AEB7B4',
          fontSize: 14,
          fontWeight: 400,
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}
