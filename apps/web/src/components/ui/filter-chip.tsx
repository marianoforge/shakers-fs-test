'use client';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface FilterChipProps {
  label: string;
  onDelete?: () => void;
}

export function FilterChip({ label, onDelete }: FilterChipProps) {
  return (
    <Box
      sx={{
        height: 22,
        pl: 0.75,
        pr: 0.75,
        py: 0.5,
        bgcolor: '#EDF7F6',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        gap: 0.75,
      }}
    >
      <Typography
        sx={{
          color: '#033028',
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
            bgcolor: '#033028',
            borderRadius: '2px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <CloseIcon sx={{ fontSize: 10, color: 'white' }} />
        </Box>
      )}
    </Box>
  );
}
