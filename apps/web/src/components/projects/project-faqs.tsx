'use client';

import { useState } from 'react';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import { ChevronDownIcon } from '@/components/ui';

import type { Faq } from '@shakers/shared';

interface ProjectFaqsProps {
  faqs: Faq[];
}

function FaqItem({ faq, isOpen, onToggle }: { faq: Faq; isOpen: boolean; onToggle: () => void }) {
  return (
    <Box
      sx={{
        borderRadius: '6px',
        overflow: 'hidden',
        ...(isOpen
          ? { background: '#EDF7F6' }
          : { outline: '2px #EDF7F6 solid', outlineOffset: '-2px' }),
      }}
    >
      <Box
        onClick={onToggle}
        sx={{
          px: 2,
          py: 1.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 1, sm: 4 },
          cursor: 'pointer',
          '&:hover': { opacity: 0.8 },
        }}
      >
        <Typography
          sx={{
            flex: 1,
            color: '#181B1A',
            fontSize: 12,
            fontWeight: 400,
            fontStyle: isOpen ? 'italic' : 'normal',
            lineHeight: '16px',
          }}
        >
          {faq.question}
        </Typography>
        <Box
          sx={{
            width: 16,
            height: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}
        >
          <ChevronDownIcon size={16} />
        </Box>
      </Box>
      <Collapse in={isOpen}>
        <Box sx={{ px: 2, pb: 1.5 }}>
          <Typography
            sx={{
              color: '#555E5C',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: '16px',
            }}
          >
            {faq.answer}
          </Typography>
        </Box>
      </Collapse>
    </Box>
  );
}

export function ProjectFaqs({ faqs }: ProjectFaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (faqs.length === 0) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      <Typography
        sx={{
          color: '#033028',
          fontSize: 18,
          fontWeight: 400,
          lineHeight: '26px',
        }}
      >
        Preguntas Frecuentes
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </Box>
    </Box>
  );
}
