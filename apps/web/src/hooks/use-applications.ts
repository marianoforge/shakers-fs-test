'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { applyToPosition, getProjectApplications, withdrawApplication } from '@/lib/api/projects';

export function useApplications(projectId: number) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['applications', projectId],
    queryFn: () => getProjectApplications(projectId),
    enabled: projectId > 0,
  });

  const applyMutation = useMutation({
    mutationFn: (positionId: number) => applyToPosition(projectId, positionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications', projectId] });
    },
  });

  const withdrawMutation = useMutation({
    mutationFn: (positionId: number) => withdrawApplication(projectId, positionId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['applications', projectId] });
    },
  });

  const appliedPositions = data?.appliedPositions ?? [];

  const isApplied = (positionId: number) => appliedPositions.includes(positionId);

  return {
    appliedPositions,
    isLoading,
    isApplied,
    apply: applyMutation.mutateAsync,
    withdraw: withdrawMutation.mutateAsync,
    isApplying: applyMutation.isPending,
    isWithdrawing: withdrawMutation.isPending,
  };
}
