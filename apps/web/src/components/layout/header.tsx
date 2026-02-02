'use client';

import Image from 'next/image';
import Link from 'next/link';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function Header() {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid',
        borderColor: '#E4E7E7',
        py: { xs: 1.5, sm: 2.5 },
        px: { xs: 1.5, sm: 5 },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.75, sm: 1.5 } }}>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              alignItems: 'center',
              gap: 0.75,
            }}
          >
            <Box
              sx={{
                p: 0.75,
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image src="/icons/menu.svg" alt="Menu" width={16} height={16} />
            </Box>
            <Box
              sx={{
                width: 16,
                height: 16,
                px: 0.75,
                py: 0.5,
                bgcolor: '#F0FF3D',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ color: '#181B1A', fontSize: 8, fontWeight: 700 }}>S</Typography>
            </Box>
          </Box>
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <Typography
              sx={{
                color: '#0D0D0D',
                fontSize: { xs: 14, sm: 18 },
                fontWeight: 400,
                lineHeight: { xs: '20px', sm: '26px' },
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Buscar Proyectos
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, sm: 3 } }}>
          <Image src="/icons/chat.svg" alt="Chat" width={14} height={14} />
          <Image src="/icons/bell.svg" alt="Notificaciones" width={14} height={14} />
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width={16}
            height={16}
            style={{ borderRadius: 2 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
