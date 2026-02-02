'use client';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CalendarIcon, CategoryIcon, ClockIcon, UsersIcon } from '@/components/ui';
import { formatCurrency, formatDate, formatNumber } from '@/lib/utils';

interface ProjectDetailHeroProps {
  title: string;
  category: string;
  specialty: string;
  startDate: string;
  totalHours: number;
  budget: number | null;
  talentsCount: number;
}

function InfoBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Box
      sx={{
        px: 1,
        py: 0.75,
        background: 'white',
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        gap: 0.75,
      }}
    >
      <Box
        sx={{
          width: 16,
          height: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          color: '#181B1A',
          fontSize: 12,
          fontWeight: 400,
          lineHeight: '16px',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export function ProjectDetailHero({
  title,
  category,
  specialty,
  startDate,
  totalHours,
  budget,
  talentsCount,
}: ProjectDetailHeroProps) {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 5 },
        py: { xs: 3, sm: 3 },
        background: '#033028',
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Typography
          sx={{
            flex: 1,
            color: 'white',
            fontSize: 24,
            fontWeight: 400,
            lineHeight: '33.6px',
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            px: 1,
            py: 0.75,
            background: '#EDF7F6',
            borderRadius: '6px',
            alignItems: 'center',
            gap: 0.75,
          }}
        >
          <Box
            sx={{
              width: 16,
              height: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CategoryIcon size={12} />
          </Box>
          <Typography
            sx={{
              color: '#181B1A',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: '16px',
            }}
          >
            {category}
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          color: 'white',
          fontSize: 18,
          fontWeight: 400,
          lineHeight: '26px',
        }}
      >
        {specialty}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 1,
          flexWrap: 'wrap',
          mt: 0.5,
        }}
      >
        <InfoBadge icon={<CalendarIcon size={12} />} label={`Inicio: ${formatDate(startDate)}`} />
        <InfoBadge icon={<ClockIcon size={12} />} label={`${formatNumber(totalHours)} horas`} />
        {budget && (
          <InfoBadge
            icon={<Image src="/icons/currency-euro.svg" alt="€" width={14} height={14} />}
            label={`${formatCurrency(budget)} (Estimado)`}
          />
        )}
        <InfoBadge
          icon={<UsersIcon size={14} />}
          label={`${talentsCount} Talento${talentsCount !== 1 ? 's' : ''}`}
        />
      </Box>
    </Box>
  );
}
