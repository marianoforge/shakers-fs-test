'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { colors } from '@/theme';

interface ProjectDescriptionProps {
  description: string;
  goals: string[];
}

export function ProjectDescription({ description, goals }: ProjectDescriptionProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <Typography
          sx={{
            color: colors.text.green8,
            fontSize: 18,
            fontWeight: 400,
            lineHeight: '26px',
          }}
        >
          Descripción del Proyecto
        </Typography>
        <Typography
          sx={{
            color: colors.text.grey8,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '20px',
          }}
        >
          {description}
        </Typography>
      </Box>

      {goals.length > 0 && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Typography
            sx={{
              color: colors.text.green8,
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '22px',
            }}
          >
            ¿Cuáles son los objetivos y tareas a realizar?
          </Typography>
          <Box
            component="ul"
            sx={{
              m: 0,
              pl: { xs: 0, sm: 2.5 },
              listStyle: { xs: 'none', sm: 'disc' },
            }}
          >
            {goals.map((goal, index) => (
              <Box
                component="li"
                key={index}
                sx={{
                  color: colors.text.grey8,
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: '20px',
                  mb: 0.5,
                }}
              >
                {goal}
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
