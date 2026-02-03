'use client';

import { useState } from 'react';

import { StaticData } from '@shakers/shared';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import { FiltersState } from '@/hooks/use-filters';
import { colors } from '@/theme';

interface AppliedFiltersProps {
  filters: FiltersState;
  staticData?: StaticData;
  onRemoveFilter: (type: 'specialty' | 'skill' | 'industry' | 'projectType', id: number) => void;
  onClearAll: () => void;
}

interface FilterGroup {
  label: string;
  items: { id: number; name: string }[];
  operator: 'AND' | 'OR';
  type: 'specialty' | 'skill' | 'industry' | 'projectType';
}

function FilterChipWhite({ label, onDelete }: { label: string; onDelete: () => void }) {
  return (
    <Box
      sx={{
        px: { xs: 0.75, sm: 1 },
        py: { xs: 0.75, sm: 0.75 },
        bgcolor: colors.grey[0],
        borderRadius: '6px',
        display: 'flex',
        alignItems: 'center',
        gap: 0.75,
      }}
    >
      <Typography
        sx={{
          color: colors.text.green8,
          fontSize: { xs: 12, sm: 12 },
          fontWeight: 400,
          lineHeight: { xs: '16px', sm: '16px' },
        }}
      >
        {label}
      </Typography>
      <Box
        onClick={onDelete}
        sx={{
          width: { xs: 14, sm: 16 },
          height: { xs: 14, sm: 16 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <CloseIcon sx={{ fontSize: { xs: 10, sm: 12 }, color: colors.text.green8 }} />
      </Box>
    </Box>
  );
}

function FilterGroupRow({
  group,
  onRemoveFilter,
}: {
  group: FilterGroup;
  onRemoveFilter: (type: FilterGroup['type'], id: number) => void;
}) {
  const operatorLabel = group.operator === 'OR' ? 'o' : 'y';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 0.5, sm: 1 },
        flexWrap: 'wrap',
      }}
    >
      <Typography
        sx={{
          color: colors.text.grey8,
          fontSize: { xs: 12, sm: 14 },
          fontWeight: 400,
          lineHeight: { xs: '16px', sm: '20px' },
        }}
      >
        {group.label}:
      </Typography>
      {group.items.map((item, index) => (
        <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
          {index > 0 && (
            <Typography
              sx={{
                color: colors.text.grey8,
                fontSize: { xs: 12, sm: 14 },
                fontWeight: 400,
                lineHeight: { xs: '16px', sm: '20px' },
              }}
            >
              {operatorLabel}
            </Typography>
          )}
          <FilterChipWhite label={item.name} onDelete={() => onRemoveFilter(group.type, item.id)} />
        </Box>
      ))}
    </Box>
  );
}

export function AppliedFilters({ filters, staticData, onRemoveFilter }: AppliedFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const groups: FilterGroup[] = [];

  if (filters.specialties.length > 0) {
    const items = filters.specialties
      .map((id) => staticData?.specialties?.find((s) => s.id === id))
      .filter((s): s is { id: number; name: string } => !!s);
    if (items.length > 0) {
      groups.push({
        label: 'Especialidades',
        items,
        operator: filters.operators.specialties,
        type: 'specialty',
      });
    }
  }

  if (filters.skills.length > 0) {
    const items = filters.skills
      .map((id) => staticData?.skills?.find((s) => s.id === id))
      .filter((s): s is { id: number; name: string } => !!s);
    if (items.length > 0) {
      groups.push({
        label: 'Habilidades',
        items,
        operator: filters.operators.skills,
        type: 'skill',
      });
    }
  }

  if (filters.projectType.length > 0) {
    const items = filters.projectType
      .map((id) => staticData?.categories?.find((c) => c.id === id))
      .filter((c): c is { id: number; name: string } => !!c);
    if (items.length > 0) {
      groups.push({
        label: 'Tipo de proyecto',
        items,
        operator: filters.operators.projectType,
        type: 'projectType',
      });
    }
  }

  if (filters.industry.length > 0) {
    const items = filters.industry
      .map((id) => staticData?.industries?.find((i) => i.id === id))
      .filter((i): i is { id: number; name: string } => !!i);
    if (items.length > 0) {
      groups.push({
        label: 'Industria',
        items,
        operator: filters.operators.industry,
        type: 'industry',
      });
    }
  }

  if (groups.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        mt: { xs: 2, sm: 3 },
        px: { xs: 1.5, sm: 2 },
        py: { xs: 1, sm: 1.5 },
        bgcolor: colors.surface.green2,
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'column',
        gap: isExpanded ? { xs: 1.5, sm: 2 } : 0,
      }}
    >
      <Box
        onClick={() => setIsExpanded(!isExpanded)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minWidth: { xs: 'auto', sm: 300 },
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <Typography
          sx={{
            color: colors.text.grey9,
            fontSize: { xs: 14, sm: 16 },
            fontStyle: 'italic',
            fontWeight: 400,
            lineHeight: { xs: '20px', sm: '22px' },
          }}
        >
          Filtros aplicados
        </Typography>
        <Box
          component="svg"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          sx={{
            color: colors.text.grey9,
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1" fill="none" />
        </Box>
      </Box>

      <Collapse in={isExpanded}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 } }}>
          {groups.map((group) => (
            <FilterGroupRow key={group.type} group={group} onRemoveFilter={onRemoveFilter} />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
}
