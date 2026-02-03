'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { CheckIcon } from '@/components/ui';
import { colors } from '@/theme';

import type { Position } from '@shakers/shared';

interface ProjectPositionCardProps {
  position: Position;
  skillNames: string[];
  onApply: (positionId: number) => void;
  isApplied?: boolean;
  isLoading?: boolean;
}

export function ProjectPositionCard({
  position,
  skillNames,
  onApply,
  isApplied = false,
  isLoading = false,
}: ProjectPositionCardProps) {
  const displaySkills = skillNames.slice(0, 4).join(', ');
  const hasMoreSkills = skillNames.length > 4;

  return (
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
        height: '100%',
      }}
    >
      {isApplied && (
        <Box sx={{ mb: 2 }}>
          <Box
            sx={{
              px: 1,
              py: 0.75,
              background: '#F8F9EC',
              borderRadius: '6px',
              display: 'inline-flex',
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
              <CheckIcon size={12} color={colors.text.grey9} />
            </Box>
            <Typography
              sx={{ color: colors.text.grey9, fontSize: 12, fontWeight: 400, lineHeight: '16px' }}
            >
              Aplicado
            </Typography>
          </Box>
        </Box>
      )}

      <Typography
        sx={{
          color: colors.text.grey9,
          fontSize: 20,
          fontWeight: 400,
          lineHeight: '28px',
          minHeight: isApplied ? 28 : 56,
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        {position.title}
      </Typography>

      <Typography
        sx={{
          color: colors.text.grey8,
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '20px',
          minHeight: 40,
          mt: 2,
          flex: 1,
        }}
      >
        {displaySkills}
        {hasMoreSkills && '...'}
      </Typography>

      <Button
        onClick={() => onApply(position.id)}
        disabled={isLoading}
        fullWidth
        sx={{
          mt: 2,
          py: 1,
          px: 1.5,
          background: isApplied ? 'transparent' : colors.yellow[6],
          borderRadius: '6px',
          color: isApplied ? colors.text.red6 : colors.text.grey9,
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '20px',
          textTransform: 'none',
          border: isApplied ? `1px solid ${colors.red[6]}` : 'none',
          '&:hover': {
            background: isApplied ? 'rgba(202, 72, 16, 0.04)' : '#e5f536',
            border: isApplied ? `1px solid ${colors.red[6]}` : 'none',
          },
          '&:disabled': {
            opacity: 0.6,
          },
        }}
      >
        {isApplied ? 'Retirar Candidatura' : 'Aplicar'}
      </Button>
    </Box>
  );
}
