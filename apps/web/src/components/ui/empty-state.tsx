'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface EmptyStateProps {
  message?: string;
}

export function EmptyState({ message = 'No se encontraron proyectos' }: EmptyStateProps) {
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
      <Typography
        sx={{
          color: '#AEB7B4',
          fontSize: 14,
          fontWeight: 400,
          textAlign: 'center',
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}
