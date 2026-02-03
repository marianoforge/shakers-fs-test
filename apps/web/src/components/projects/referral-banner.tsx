'use client';

import EuroIcon from '@mui/icons-material/Euro';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

import { colors } from '@/theme';

export function ReferralBanner() {
  return (
    <Box sx={{ mb: 1, display: { xs: 'none', sm: 'block' } }}>
      <Chip
        icon={<EuroIcon sx={{ fontSize: 16, color: colors.text.grey9 }} />}
        label="¡Gana 1500€ por referir!"
        sx={{
          bgcolor: colors.surface.green2,
          color: colors.text.green8,
          fontSize: 12,
          fontWeight: 400,
          height: 28,
          borderRadius: 0.75,
          '& .MuiChip-icon': {
            color: colors.text.grey9,
          },
        }}
      />
    </Box>
  );
}
