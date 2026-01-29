import { Project, ProjectFilter } from '@shakers/shared';

export const PROJECT_REPOSITORY = Symbol('PROJECT_REPOSITORY');

export interface ProjectRepositoryPort {
  findAll(filter?: ProjectFilter): Promise<Project[]>;
  findById(id: number): Promise<Project | null>;
}
