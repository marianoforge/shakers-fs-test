'use client';

import { useState } from 'react';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { colors } from '@/theme';

interface ProjectOwnerCardProps {
  name: string;
  lastName: string;
  organization: {
    name: string;
    logo: string;
  };
}

export function ProjectOwnerCard({ name, lastName, organization }: ProjectOwnerCardProps) {
  const [logoError, setLogoError] = useState(false);
  const fullName = `${name} ${lastName}`;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      <Typography
        sx={{
          color: colors.text.green8,
          fontSize: 18,
          fontWeight: 400,
          lineHeight: '26px',
        }}
      >
        Responsable
      </Typography>
      <Box
        sx={{
          width: { xs: 300, sm: 300 },
          maxWidth: '100%',
          p: 3,
          background: colors.grey[0],
          borderRadius: '12px',
          outline: `1px ${colors.grey[4]} solid`,
          outlineOffset: '-1px',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: '4px',
              overflow: 'hidden',
              position: 'relative',
              background: '#f0f0f0',
            }}
          >
            <Image
              src={logoError ? '/logos/logos_brand.png' : organization.logo}
              alt={organization.name}
              fill
              style={{ objectFit: 'cover' }}
              onError={() => setLogoError(true)}
              unoptimized
            />
          </Box>
          <Typography
            sx={{
              color: colors.text.grey9,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '22px',
            }}
          >
            {organization.name}
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            height: 252,
            borderRadius: '6px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Image
            src="/images/avatar_big.png"
            alt={fullName}
            fill
            style={{ objectFit: 'cover' }}
            unoptimized
          />
        </Box>

        <Box>
          <Typography
            sx={{
              color: colors.text.grey9,
              fontSize: 20,
              fontWeight: 400,
              lineHeight: '28px',
            }}
          >
            {fullName}
          </Typography>
          <Typography
            sx={{
              color: colors.text.grey8,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '22px',
            }}
          >
            Project Owner
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
