import * as fs from 'fs';
import * as path from 'path';

import { Injectable, Logger } from '@nestjs/common';
import { Position, Project, ProjectFilter, ProjectSchema } from '@shakers/shared';
import { z } from 'zod';

import { ProjectRepositoryPort } from '@domain/ports';

@Injectable()
export class ProjectJsonRepository implements ProjectRepositoryPort {
  private readonly logger = new Logger(ProjectJsonRepository.name);
  private projects: Project[] = [];

  constructor() {
    this.loadProjects();
  }

  private loadProjects(): void {
    const filePath = path.join(process.cwd(), 'data/projects.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const rawData = JSON.parse(data);

    try {
      const ProjectsArraySchema = z.array(ProjectSchema);
      this.projects = ProjectsArraySchema.parse(rawData);
      this.logger.log(`Loaded ${this.projects.length} projects successfully`);
    } catch {
      this.logger.warn('Projects data validation failed, using unvalidated data');
      this.projects = rawData as Project[];
    }
  }

  private applyArrayFilter(
    items: number[],
    filterValues: number[],
    operator: 'AND' | 'OR',
  ): boolean {
    if (operator === 'AND') {
      return filterValues.every((value) => items.includes(value));
    }
    return filterValues.some((value) => items.includes(value));
  }

  async findAll(filter?: ProjectFilter): Promise<Project[]> {
    let result = this.projects.filter((p) => p.status === 'PUBLISHED');

    if (filter?.specialties?.length) {
      const op = filter.specialtiesOp ?? 'OR';
      result = result.filter((project) => {
        const projectSpecialties = project.positions.flatMap(
          (position: Position) => position.specialties,
        );
        return this.applyArrayFilter(projectSpecialties, filter.specialties!, op);
      });
    }

    if (filter?.skills?.length) {
      const op = filter.skillsOp ?? 'OR';
      result = result.filter((project) => {
        const projectSkills = project.positions.flatMap((position: Position) => position.skills);
        return this.applyArrayFilter(projectSkills, filter.skills!, op);
      });
    }

    if (filter?.industry?.length) {
      result = result.filter((project) => filter.industry!.includes(project.organization.industry));
    }

    if (filter?.projectType?.length) {
      result = result.filter((project) => filter.projectType!.includes(project.category));
    }

    if (filter?.order === 'publishedAt_desc') {
      result.sort(
        (a, b) => new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime(),
      );
    } else if (filter?.order === 'publishedAt_asc') {
      result.sort(
        (a, b) => new Date(a.publishedAt ?? 0).getTime() - new Date(b.publishedAt ?? 0).getTime(),
      );
    }

    return result;
  }

  async findById(id: number): Promise<Project | null> {
    return this.projects.find((p) => p.id === id) ?? null;
  }
}
