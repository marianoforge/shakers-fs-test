'use client';

import { ProjectFilter } from '@shakers/shared';
import { useQuery } from '@tanstack/react-query';

import { getProjectById, getProjects } from '@/lib/api/projects';

export function useProjects(filter?: ProjectFilter) {
  return useQuery({
    queryKey: ['projects', filter],
    queryFn: () => getProjects(filter),
  });
}

export function useProject(id: number) {
  return useQuery({
    queryKey: ['project', id],
    queryFn: () => getProjectById(id),
    enabled: !!id,
  });
}
