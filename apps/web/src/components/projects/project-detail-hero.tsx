'use client';

import Image from 'next/image';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CalendarIcon, ClockIcon, UsersIcon } from '@/components/ui';
import { formatCurrency, formatDate, formatNumber, getCategoryIcon } from '@/lib/utils';
import { colors } from '@/theme';

interface ProjectDetailHeroProps {
  title: string;
  category: string;
  categoryId: number;
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
        background: colors.grey[0],
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
          color: colors.text.grey9,
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
  categoryId,
  specialty,
  startDate,
  totalHours,
  budget,
  talentsCount,
}: ProjectDetailHeroProps) {
  const CategoryIconComponent = getCategoryIcon(categoryId);
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 5 },
        py: { xs: 3, sm: 3 },
        background: colors.green[8],
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
            color: colors.grey[0],
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
            background: colors.surface.green2,
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
            <CategoryIconComponent size={12} color={colors.text.grey9} />
          </Box>
          <Typography
            sx={{
              color: colors.text.grey9,
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
          color: colors.grey[0],
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
