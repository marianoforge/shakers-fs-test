'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  message = 'Ha ocurrido un error al cargar los datos',
  onRetry,
}: ErrorStateProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        gap: 2,
        bgcolor: '#FDF5F2',
        borderRadius: '8px',
        px: 4,
      }}
    >
      <Typography
        sx={{
          color: '#792906',
          fontSize: 14,
          fontWeight: 400,
          textAlign: 'center',
        }}
      >
        {message}
      </Typography>
      {onRetry && (
        <Button
          variant="outlined"
          onClick={onRetry}
          sx={{
            color: '#033028',
            borderColor: '#033028',
            fontSize: 12,
            fontWeight: 400,
            px: 2,
            py: 0.75,
            borderRadius: 1.5,
            '&:hover': {
              borderColor: '#033028',
              bgcolor: 'rgba(3, 48, 40, 0.04)',
            },
          }}
        >
          Reintentar
        </Button>
      )}
    </Box>
  );
}
