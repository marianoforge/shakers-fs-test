import { Project, ProjectFilter } from '@shakers/shared';

import { apiClient } from './client';

export async function getProjects(filter?: ProjectFilter): Promise<Project[]> {
  const params: Record<string, string | string[] | undefined> = {};

  if (filter?.specialties?.length) {
    params['specialties[]'] = filter.specialties.map(String);
    if (filter.specialtiesOp) {
      params['specialtiesOp'] = filter.specialtiesOp;
    }
  }
  if (filter?.skills?.length) {
    params['skills[]'] = filter.skills.map(String);
    if (filter.skillsOp) {
      params['skillsOp'] = filter.skillsOp;
    }
  }
  if (filter?.industry?.length) {
    params['industry[]'] = filter.industry.map(String);
    if (filter.industryOp) {
      params['industryOp'] = filter.industryOp;
    }
  }
  if (filter?.projectType?.length) {
    params['projectType[]'] = filter.projectType.map(String);
    if (filter.projectTypeOp) {
      params['projectTypeOp'] = filter.projectTypeOp;
    }
  }
  if (filter?.order) {
    params['order'] = filter.order;
  }

  return apiClient<Project[]>('/projects', { params });
}

export async function getProjectById(id: number): Promise<Project> {
  return apiClient<Project>(`/projects/${id}`);
}

export async function getProjectApplications(
  projectId: number,
): Promise<{ appliedPositions: number[] }> {
  return apiClient<{ appliedPositions: number[] }>(`/projects/${projectId}/applications`);
}

export async function applyToPosition(
  projectId: number,
  positionId: number,
): Promise<{ success: boolean; message: string }> {
  return apiClient<{ success: boolean; message: string }>(`/projects/${projectId}/applications`, {
    method: 'POST',
    body: JSON.stringify({ positionId }),
  });
}

export async function withdrawApplication(
  projectId: number,
  positionId: number,
): Promise<{ success: boolean; message: string }> {
  return apiClient<{ success: boolean; message: string }>(`/projects/${projectId}/applications`, {
    method: 'DELETE',
    body: JSON.stringify({ positionId }),
  });
}
