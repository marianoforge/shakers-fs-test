'use client';

import { StaticData } from '@shakers/shared';

import CloseIcon from '@mui/icons-material/Close';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { FilterChip } from '@/components/ui';
import { FilterOperator, FilterOperators, FiltersState } from '@/hooks/use-filters';

interface FiltersModalProps {
  open: boolean;
  onClose: () => void;
  onApply: () => void;
  onClear: () => void;
  filters: FiltersState;
  onFilterChange: <K extends keyof FiltersState>(key: K, value: FiltersState[K]) => void;
  onToggleOperator: (field: keyof FilterOperators) => void;
  staticData?: StaticData;
}

interface OperatorButtonProps {
  operator: FilterOperator;
  onClick: () => void;
}

function OperatorButton({ operator, onClick }: OperatorButtonProps) {
  const label = operator === 'OR' ? 'O' : 'Y';
  const tooltipText =
    operator === 'OR'
      ? 'OR: Muestra resultados que cumplen AL MENOS UNO de los criterios'
      : 'AND: Muestra resultados que cumplen TODOS los criterios';

  return (
    <Tooltip title={tooltipText} arrow placement="top">
      <Box
        onClick={onClick}
        sx={{
          px: '12px',
          py: '6px',
          minHeight: 36,
          borderRadius: '6px',
          border: '1px solid #E4E7E7',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          minWidth: 52,
          boxSizing: 'border-box',
          cursor: 'pointer',
          userSelect: 'none',
          transition: 'all 0.15s ease',
          '&:hover': {
            borderColor: '#0B5A4C',
            bgcolor: 'rgba(11, 90, 76, 0.04)',
          },
        }}
      >
        <Typography
          sx={{
            color: '#181B1A',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '20px',
            minWidth: 12,
            textAlign: 'center',
          }}
        >
          {label}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <Box component="svg" width={12} height={12} viewBox="0 0 12 12" sx={{ color: '#555E5C' }}>
            <path d="M3 7.5L6 4.5L9 7.5" stroke="currentColor" strokeWidth="1" fill="none" />
          </Box>
          <Box component="svg" width={12} height={12} viewBox="0 0 12 12" sx={{ color: '#555E5C' }}>
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1" fill="none" />
          </Box>
        </Box>
      </Box>
    </Tooltip>
  );
}

function FilterField({
  label,
  operator,
  onToggleOperator,
  children,
}: {
  label: string;
  operator: FilterOperator;
  onToggleOperator: () => void;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 3 }}>
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
        <Typography
          sx={{
            color: '#181B1A',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '22px',
          }}
        >
          {label}
        </Typography>
        {children}
      </Box>
      <OperatorButton operator={operator} onClick={onToggleOperator} />
    </Box>
  );
}

const autocompleteInputSx = {
  '& .MuiOutlinedInput-root': {
    py: '6px',
    px: '12px',
    minHeight: 36,
    borderRadius: '6px',
    '& fieldset': { borderColor: '#E4E7E7' },
    '&:hover fieldset': { borderColor: '#E4E7E7' },
    '&.Mui-focused fieldset': { borderColor: '#0B5A4C', borderWidth: 1 },
  },
  '& .MuiInputBase-input': {
    fontSize: 14,
    lineHeight: '24px',
    height: 24,
    p: '0 !important',
    '&::placeholder': { color: '#AEB7B4', opacity: 1 },
  },
  '& .MuiAutocomplete-tag': {
    m: 0,
    mr: 1,
  },
};

export function FiltersModal({
  open,
  onClose,
  onApply,
  onClear,
  filters,
  onFilterChange,
  onToggleOperator,
  staticData,
}: FiltersModalProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const specialties = staticData?.specialties ?? [];
  const skills = staticData?.skills ?? [];
  const industries = staticData?.industries ?? [];
  const categories = staticData?.categories ?? [];

  const selectedSpecialties = specialties.filter((s) => filters.specialties.includes(s.id));
  const selectedSkills = skills.filter((s) => filters.skills.includes(s.id));
  const selectedIndustries = industries.filter((i) => filters.industry.includes(i.id));
  const selectedCategories = categories.filter((c) => filters.projectType.includes(c.id));

  const handleRemoveSpecialty = (id: number) => {
    onFilterChange(
      'specialties',
      filters.specialties.filter((s) => s !== id),
    );
  };

  const handleRemoveSkill = (id: number) => {
    onFilterChange(
      'skills',
      filters.skills.filter((s) => s !== id),
    );
  };

  const handleRemoveIndustry = (id: number) => {
    onFilterChange(
      'industry',
      filters.industry.filter((i) => i !== id),
    );
  };

  const handleRemoveCategory = (id: number) => {
    onFilterChange(
      'projectType',
      filters.projectType.filter((p) => p !== id),
    );
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      fullScreen={isMobile}
      PaperProps={{
        sx: {
          borderRadius: isMobile ? 0 : '6px',
          px: 2,
          pt: 5,
          pb: 5,
          ...(isMobile ? {} : { p: 5 }),
          position: 'relative',
          overflow: 'auto',
        },
      }}
    >
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          p: 0.75,
          borderRadius: '6px',
          '&:hover': { bgcolor: 'rgba(3, 48, 40, 0.04)' },
        }}
      >
        <CloseIcon sx={{ fontSize: 32, color: '#033028' }} />
      </IconButton>

      <Typography
        sx={{
          color: '#0D0D0D',
          fontSize: 24,
          fontWeight: 400,
          lineHeight: '33.6px',
          mb: 3,
        }}
      >
        Filtrar Proyectos
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <FilterField
          label="Especialidades"
          operator={filters.operators.specialties}
          onToggleOperator={() => onToggleOperator('specialties')}
        >
          <Autocomplete
            multiple
            options={specialties}
            getOptionLabel={(option) => option.name}
            value={selectedSpecialties}
            onChange={(_, newValue) => {
              onFilterChange(
                'specialties',
                newValue.map((v) => v.id),
              );
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Busca y añade" sx={autocompleteInputSx} />
            )}
            renderTags={(value) =>
              value.map((option) => (
                <FilterChip
                  key={option.id}
                  label={option.name}
                  onDelete={() => handleRemoveSpecialty(option.id)}
                />
              ))
            }
          />
        </FilterField>

        <FilterField
          label="Habilidades"
          operator={filters.operators.skills}
          onToggleOperator={() => onToggleOperator('skills')}
        >
          <Autocomplete
            multiple
            options={skills}
            getOptionLabel={(option) => option.name}
            value={selectedSkills}
            onChange={(_, newValue) => {
              onFilterChange(
                'skills',
                newValue.map((v) => v.id),
              );
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Busca y añade" sx={autocompleteInputSx} />
            )}
            renderTags={(value) =>
              value.map((option) => (
                <FilterChip
                  key={option.id}
                  label={option.name}
                  onDelete={() => handleRemoveSkill(option.id)}
                />
              ))
            }
          />
        </FilterField>

        <FilterField
          label="Tipo de proyecto"
          operator={filters.operators.projectType}
          onToggleOperator={() => onToggleOperator('projectType')}
        >
          <Autocomplete
            multiple
            options={categories}
            getOptionLabel={(option) => option.name}
            value={selectedCategories}
            onChange={(_, newValue) => {
              onFilterChange(
                'projectType',
                newValue.map((v) => v.id),
              );
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Busca y añade" sx={autocompleteInputSx} />
            )}
            renderTags={(value) =>
              value.map((option) => (
                <FilterChip
                  key={option.id}
                  label={option.name}
                  onDelete={() => handleRemoveCategory(option.id)}
                />
              ))
            }
          />
        </FilterField>

        <FilterField
          label="Industria"
          operator={filters.operators.industry}
          onToggleOperator={() => onToggleOperator('industry')}
        >
          <Autocomplete
            multiple
            options={industries}
            getOptionLabel={(option) => option.name}
            value={selectedIndustries}
            onChange={(_, newValue) => {
              onFilterChange(
                'industry',
                newValue.map((v) => v.id),
              );
            }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Busca y añade" sx={autocompleteInputSx} />
            )}
            renderTags={(value) =>
              value.map((option) => (
                <FilterChip
                  key={option.id}
                  label={option.name}
                  onDelete={() => handleRemoveIndustry(option.id)}
                />
              ))
            }
          />
        </FilterField>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography
            sx={{
              color: '#181B1A',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '22px',
            }}
          >
            Ordenar por
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box
              onClick={() => onFilterChange('order', 'publishedAt_desc')}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                cursor: 'pointer',
              }}
            >
              <Radio
                checked={filters.order === 'publishedAt_desc'}
                onChange={() => onFilterChange('order', 'publishedAt_desc')}
                sx={{
                  p: 0,
                  width: 20,
                  height: 20,
                  color: '#E4E7E7',
                  '&.Mui-checked': { color: '#0B5A4C' },
                }}
              />
              <Typography
                sx={{
                  color: '#181B1A',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: '20px',
                }}
              >
                Fecha de publicación (Más reciente primero)
              </Typography>
            </Box>
            <Box
              onClick={() => onFilterChange('order', 'publishedAt_asc')}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1.5,
                cursor: 'pointer',
              }}
            >
              <Radio
                checked={filters.order === 'publishedAt_asc'}
                onChange={() => onFilterChange('order', 'publishedAt_asc')}
                sx={{
                  p: 0,
                  width: 20,
                  height: 20,
                  color: '#E4E7E7',
                  '&.Mui-checked': { color: '#0B5A4C' },
                }}
              />
              <Typography
                sx={{
                  color: '#181B1A',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: '20px',
                }}
              >
                Fecha de publicación (Más antiguo primero)
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 3,
            mt: 1,
          }}
        >
          {isMobile ? (
            <>
              <Button
                onClick={onApply}
                fullWidth
                sx={{
                  py: 1.5,
                  px: 2,
                  borderRadius: '6px',
                  bgcolor: '#033028',
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: '22px',
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#022018' },
                }}
              >
                Filtrar
              </Button>
              <Button
                onClick={onClear}
                fullWidth
                sx={{
                  py: 1.5,
                  px: 2,
                  borderRadius: '6px',
                  color: '#CA4810',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: '22px',
                  textTransform: 'none',
                  '&:hover': { bgcolor: 'rgba(202, 72, 16, 0.04)' },
                }}
              >
                Eliminar Filtros
              </Button>
            </>
          ) : (
            <>
              <Button
                onClick={onClear}
                sx={{
                  flex: 1,
                  py: 1.5,
                  px: 2,
                  borderRadius: '6px',
                  color: '#CA4810',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: '22px',
                  textTransform: 'none',
                  '&:hover': { bgcolor: 'rgba(202, 72, 16, 0.04)' },
                }}
              >
                Eliminar Filtros
              </Button>
              <Button
                onClick={onApply}
                sx={{
                  flex: 1,
                  py: 1.5,
                  px: 2,
                  borderRadius: '6px',
                  bgcolor: '#033028',
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: '22px',
                  textTransform: 'none',
                  '&:hover': { bgcolor: '#022018' },
                }}
              >
                Filtrar
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Dialog>
  );
}
