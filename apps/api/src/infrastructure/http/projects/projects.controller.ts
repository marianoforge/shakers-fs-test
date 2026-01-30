import { Controller, Get, NotFoundException, Param, ParseIntPipe, Query } from '@nestjs/common';
import { Project, ProjectFilter } from '@shakers/shared';

import { ProjectsService } from '@application/services';

interface GetProjectsQueryDto {
  specialties?: string | string[];
  skills?: string | string[];
  industry?: string | string[];
  projectType?: string | string[];
  order?: 'publishedAt_desc' | 'publishedAt_asc';
}

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async findAll(@Query() query: GetProjectsQueryDto): Promise<Project[]> {
    const filter: ProjectFilter = {};

    if (query.specialties) {
      filter.specialties = this.parseArrayParam(query.specialties);
    }

    if (query.skills) {
      filter.skills = this.parseArrayParam(query.skills);
    }

    if (query.industry) {
      filter.industry = this.parseArrayParam(query.industry);
    }

    if (query.projectType) {
      filter.projectType = this.parseArrayParam(query.projectType);
    }

    if (query.order) {
      filter.order = query.order;
    }

    return this.projectsService.findAll(filter);
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Project> {
    const project = await this.projectsService.findById(id);

    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    return project;
  }

  private parseArrayParam(param: string | string[]): number[] {
    const values = Array.isArray(param) ? param : [param];
    return values.map((v) => parseInt(v, 10)).filter((n) => !isNaN(n));
  }
}
