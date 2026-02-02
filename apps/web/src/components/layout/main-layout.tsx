'use client';

import type { ReactNode } from 'react';

import Box from '@mui/material/Box';

import { Header } from './header';

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        maxWidth: 1440,
        mx: 'auto',
        boxShadow: '0 0 20px rgba(0,0,0,0.05)',
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
