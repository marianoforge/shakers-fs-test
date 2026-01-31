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
        py: 2.5,
        px: 5,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/projects" style={{ textDecoration: 'none' }}>
          <Typography
            sx={{
              color: '#0D0D0D',
              fontSize: 18,
              fontWeight: 400,
              lineHeight: '26px',
            }}
          >
            Buscar Proyectos
          </Typography>
        </Link>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
          <Image src="/icons/chat.svg" alt="Chat" width={18} height={18} />
          <Image src="/icons/bell.svg" alt="Notificaciones" width={18} height={18} />
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            width={24}
            height={24}
            style={{ borderRadius: 4 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
