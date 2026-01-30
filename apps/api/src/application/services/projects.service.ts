import { Inject, Injectable } from '@nestjs/common';
import { Project, ProjectFilter } from '@shakers/shared';

import { PROJECT_REPOSITORY, ProjectRepositoryPort } from '@domain/ports';

@Injectable()
export class ProjectsService {
  constructor(
    @Inject(PROJECT_REPOSITORY)
    private readonly projectRepository: ProjectRepositoryPort,
  ) {}

  async findAll(filter?: ProjectFilter): Promise<Project[]> {
    return this.projectRepository.findAll(filter);
  }

  async findById(id: number): Promise<Project | null> {
    return this.projectRepository.findById(id);
  }
}
