'use client';

import EuroIcon from '@mui/icons-material/Euro';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

export function ReferralBanner() {
  return (
    <Box sx={{ mb: 1 }}>
      <Chip
        icon={<EuroIcon sx={{ fontSize: 16, color: '#181B1A' }} />}
        label="¡Gana 1500€ por referir!"
        sx={{
          bgcolor: '#EDF7F6',
          color: '#033028',
          fontSize: 12,
          fontWeight: 400,
          height: 28,
          borderRadius: 1.5,
          '& .MuiChip-icon': {
            color: '#181B1A',
          },
        }}
      />
    </Box>
  );
}
