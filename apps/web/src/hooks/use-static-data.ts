'use client';

import { useQuery } from '@tanstack/react-query';

import { getStaticData } from '@/lib/api/static-data';

export function useStaticData() {
  return useQuery({
    queryKey: ['static-data'],
    queryFn: getStaticData,
    staleTime: Infinity,
  });
}
