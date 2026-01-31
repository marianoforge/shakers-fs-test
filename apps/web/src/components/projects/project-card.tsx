'use client';

import Image from 'next/image';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ProjectCardProps {
  id: number;
  title: string;
  organization: {
    name: string;
    logo: string;
  };
  category: string;
  subcategory?: string | undefined;
  budget: {
    total: number | null;
    hourFrom: number | null;
    hourTo: number | null;
  };
  skills: string[];
}

export function ProjectCard({
  id,
  title,
  organization,
  category,
  subcategory,
  budget,
  skills,
}: ProjectCardProps) {
  const formatBudget = () => {
    if (budget.hourFrom && budget.hourTo) {
      return `${budget.hourFrom} - ${budget.hourTo} €/h`;
    }
    if (budget.total) {
      return `${budget.total.toLocaleString('es-ES')}€`;
    }
    return null;
  };

  const budgetText = formatBudget();

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignSelf: 'stretch',
      }}
    >
      <Box
        component={Link}
        href={`/projects/${id}`}
        sx={{
          flex: '1 1 0',
          p: 3,
          background: 'white',
          overflow: 'hidden',
          borderTopLeftRadius: '8px',
          borderBottomLeftRadius: '8px',
          outline: '1px solid #E4E7E7',
          outlineOffset: '-1px',
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          gap: 3,
          textDecoration: 'none',
          '&:hover': {
            background: '#FAFAFA',
          },
        }}
      >
        <Box
          sx={{
            alignSelf: 'stretch',
            display: 'inline-flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: 1,
            }}
          >
            <Image
              src={organization.logo}
              alt={organization.name}
              width={82}
              height={82}
              style={{
                borderRadius: '6px',
                objectFit: 'cover',
              }}
            />
            <Typography
              sx={{
                alignSelf: 'stretch',
                textAlign: 'center',
                color: '#AEB7B4',
                fontSize: 12,
                fontWeight: 400,
                lineHeight: '16px',
              }}
            >
              {organization.name}
            </Typography>
          </Box>

          <Box
            sx={{
              flex: '1 1 0',
              alignSelf: 'stretch',
              display: 'inline-flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 1.5,
            }}
          >
            <Box
              sx={{
                alignSelf: 'stretch',
                display: 'inline-flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                gap: 1.5,
              }}
            >
              <Typography
                sx={{
                  flex: '1 1 0',
                  alignSelf: 'stretch',
                  color: '#181B1A',
                  fontSize: 18,
                  fontWeight: 400,
                  lineHeight: '26px',
                }}
              >
                {title}
              </Typography>
            </Box>

            <Box
              sx={{
                alignSelf: 'stretch',
                display: 'inline-flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 1,
                flexWrap: 'wrap',
              }}
            >
              <Typography
                sx={{
                  color: '#0B5A4C',
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: '20px',
                }}
              >
                {category}
                {subcategory || budgetText ? '  |  ' : ''}
              </Typography>
              {subcategory && (
                <Typography
                  sx={{
                    color: '#0B5A4C',
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: '20px',
                  }}
                >
                  {subcategory}
                  {budgetText ? '  |  ' : ''}
                </Typography>
              )}
              {budgetText && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Box
                      sx={{
                        width: 8.13,
                        height: 9.33,
                        position: 'absolute',
                        left: 3.33,
                        top: 3.33,
                        outline: '1px solid #6FBEB0',
                        outlineOffset: '-0.5px',
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      color: '#0B5A4C',
                      fontSize: 14,
                      fontWeight: 400,
                      lineHeight: '20px',
                    }}
                  >
                    {budgetText}
                  </Typography>
                </Box>
              )}
            </Box>

            <Box
              sx={{
                alignSelf: 'stretch',
                display: 'inline-flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 1,
                flexWrap: 'wrap',
              }}
            >
              {skills.map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    px: 1,
                    py: 0.75,
                    background: '#F4F5F5',
                    borderRadius: '6px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 0.75,
                  }}
                >
                  <Typography
                    sx={{
                      color: '#181B1A',
                      fontSize: 12,
                      fontWeight: 400,
                      lineHeight: '16px',
                    }}
                  >
                    {skill}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        component={Link}
        href={`/projects/${id}`}
        sx={{
          alignSelf: 'stretch',
          px: 0.75,
          py: 2,
          background: 'white',
          overflow: 'hidden',
          borderTopRightRadius: '8px',
          borderBottomRightRadius: '8px',
          outline: '1px solid #E4E7E7',
          outlineOffset: '-1px',
          display: 'inline-flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          textDecoration: 'none',
          '&:hover': {
            background: '#FAFAFA',
          },
        }}
      >
        <Box
          sx={{
            p: 0.75,
            overflow: 'hidden',
            borderRadius: '6px',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Image src="/icons/chevron.svg" alt="" width={24} height={24} />
        </Box>
      </Box>
    </Box>
  );
}
