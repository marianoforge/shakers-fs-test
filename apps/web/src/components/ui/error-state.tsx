'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { colors } from '@/theme';

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
        bgcolor: colors.surface.error,
        borderRadius: '8px',
        px: 4,
      }}
    >
      <Typography
        sx={{
          color: colors.text.red8,
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
            color: colors.text.green8,
            borderColor: colors.green[8],
            fontSize: 12,
            fontWeight: 400,
            px: 2,
            py: 0.75,
            borderRadius: 0.75,
            '&:hover': {
              borderColor: colors.green[8],
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
