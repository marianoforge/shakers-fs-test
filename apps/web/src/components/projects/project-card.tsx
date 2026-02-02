'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import EuroIcon from '@mui/icons-material/Euro';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { formatCurrency, formatHourlyRate, getSkillIcon } from '@/lib/utils';

const FALLBACK_LOGO = '/logos/logos_brand.png';

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
  const [logoSrc, setLogoSrc] = useState(organization.logo || FALLBACK_LOGO);

  const handleImageError = () => {
    setLogoSrc(FALLBACK_LOGO);
  };

  const formatBudget = () => {
    if (budget.hourFrom && budget.hourTo) {
      return formatHourlyRate(budget.hourFrom, budget.hourTo);
    }
    if (budget.total) {
      return formatCurrency(budget.total);
    }
    return null;
  };

  const budgetText = formatBudget();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Box
          sx={{
            height: 22,
            px: 0.75,
            py: 0.5,
            bgcolor: '#EDF7F6',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
          }}
        >
          <EuroIcon sx={{ fontSize: 14, color: '#181B1A' }} />
          <Typography
            sx={{
              color: '#033028',
              fontSize: 10,
              fontWeight: 400,
              lineHeight: '14px',
            }}
          >
            ¡Gana 1500€ por referir!
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignSelf: 'stretch',
        }}
      >
        <Box
          component={Link}
          href={`/projects/${id}`}
          sx={{
            flex: '1 1 0',
            p: { xs: 1.5, sm: 3 },
            background: 'white',
            overflow: 'hidden',
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
            borderTopRightRadius: { xs: '8px', sm: 0 },
            borderBottomRightRadius: { xs: '8px', sm: 0 },
            outline: '1px solid #E4E7E7',
            outlineOffset: '-1px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            gap: { xs: 1.5, sm: 3 },
            textDecoration: 'none',
            '&:hover': {
              background: '#FAFAFA',
            },
          }}
        >
          <Box
            sx={{
              alignSelf: 'stretch',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: 1,
              }}
            >
              <Box
                sx={{
                  width: { xs: 48, sm: 82 },
                  height: { xs: 48, sm: 82 },
                  position: 'relative',
                  borderRadius: '6px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={logoSrc}
                  alt={organization.name}
                  fill
                  onError={handleImageError}
                  unoptimized
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Typography
                sx={{
                  width: { xs: 48, sm: 82 },
                  textAlign: 'center',
                  color: '#AEB7B4',
                  fontSize: { xs: 10, sm: 12 },
                  fontWeight: 400,
                  lineHeight: { xs: '14px', sm: '16px' },
                  wordBreak: 'break-word',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {organization.name}
              </Typography>
            </Box>

            <Box
              sx={{
                flex: '1 1 0',
                alignSelf: 'stretch',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: { xs: 0.75, sm: 1.5 },
              }}
            >
              <Box
                sx={{
                  alignSelf: 'stretch',
                  display: 'flex',
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
                    fontSize: { xs: 14, sm: 18 },
                    fontWeight: 400,
                    lineHeight: { xs: '20px', sm: '26px' },
                  }}
                >
                  {title}
                </Typography>
              </Box>

              <Box
                sx={{
                  alignSelf: 'stretch',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: { xs: 0.5, sm: 1 },
                  flexWrap: 'wrap',
                }}
              >
                <Typography
                  sx={{
                    color: '#0B5A4C',
                    fontSize: { xs: 10, sm: 14 },
                    fontWeight: 400,
                    lineHeight: { xs: '14px', sm: '20px' },
                  }}
                >
                  {category}
                  {subcategory || budgetText ? '  |  ' : ''}
                </Typography>
                {subcategory && (
                  <Typography
                    sx={{
                      color: '#0B5A4C',
                      fontSize: { xs: 10, sm: 14 },
                      fontWeight: 400,
                      lineHeight: { xs: '14px', sm: '20px' },
                    }}
                  >
                    {subcategory}
                    {budgetText ? '  |  ' : ''}
                  </Typography>
                )}
                {budgetText && (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Image
                      src="/icons/currency-euro.svg"
                      alt="€"
                      width={12}
                      height={12}
                      style={{ display: 'block' }}
                    />
                    <Typography
                      sx={{
                        color: '#0B5A4C',
                        fontSize: { xs: 10, sm: 14 },
                        fontWeight: 400,
                        lineHeight: { xs: '14px', sm: '20px' },
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
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  gap: 1,
                  flexWrap: 'wrap',
                }}
              >
                {skills.map((skill) => {
                  const skillIcon = getSkillIcon(skill);
                  return (
                    <Box
                      key={skill}
                      sx={{
                        px: { xs: 0.75, sm: 1 },
                        py: { xs: 0.5, sm: 0.75 },
                        background: '#F4F5F5',
                        borderRadius: '6px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 0.75,
                      }}
                    >
                      {skillIcon && (
                        <Image
                          src={skillIcon}
                          alt={skill}
                          width={14}
                          height={14}
                          style={{ borderRadius: '2px' }}
                        />
                      )}
                      <Typography
                        sx={{
                          color: '#181B1A',
                          fontSize: { xs: 10, sm: 12 },
                          fontWeight: 400,
                          lineHeight: { xs: '14px', sm: '16px' },
                        }}
                      >
                        {skill}
                      </Typography>
                    </Box>
                  );
                })}
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
            display: { xs: 'none', sm: 'inline-flex' },
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
    </Box>
  );
}
