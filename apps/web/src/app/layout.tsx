import type { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Providers } from '@/providers';

import '@/styles/animations.css';

export const metadata: Metadata = {
  title: 'Shakers - Buscar Proyectos',
  description: 'Encuentra y aplica a proyectos que se ajusten a tus habilidades',
  icons: {
    icon: '/favicon.svg',
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, backgroundColor: '#f5f5f5' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
