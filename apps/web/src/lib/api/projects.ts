import { Project, ProjectFilter } from '@shakers/shared';

import { apiClient } from './client';

export async function getProjects(filter?: ProjectFilter): Promise<Project[]> {
  const params: Record<string, string | string[] | undefined> = {};

  if (filter?.specialties?.length) {
    params['specialties[]'] = filter.specialties.map(String);
  }
  if (filter?.skills?.length) {
    params['skills[]'] = filter.skills.map(String);
  }
  if (filter?.industry?.length) {
    params['industry[]'] = filter.industry.map(String);
  }
  if (filter?.projectType?.length) {
    params['projectType[]'] = filter.projectType.map(String);
  }
  if (filter?.order) {
    params['order'] = filter.order;
  }

  return apiClient<Project[]>('/projects', { params });
}

export async function getProjectById(id: number): Promise<Project> {
  return apiClient<Project>(`/projects/${id}`);
}
