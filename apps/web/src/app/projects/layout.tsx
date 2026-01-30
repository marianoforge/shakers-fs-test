import type { ReactNode } from 'react';

import { MainLayout } from '@/components/layout';

interface ProjectsLayoutProps {
  children: ReactNode;
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}
