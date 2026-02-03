import * as fs from 'fs';
import * as path from 'path';

import { Injectable } from '@nestjs/common';
import { Position, Project, ProjectFilter } from '@shakers/shared';

import { ProjectRepositoryPort } from '@domain/ports';

@Injectable()
export class ProjectJsonRepository implements ProjectRepositoryPort {
  private projects: Project[] = [];

  constructor() {
    this.loadProjects();
  }

  private loadProjects(): void {
    const filePath = path.join(process.cwd(), 'data/projects.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    this.projects = JSON.parse(data) as Project[];
  }

  async findAll(filter?: ProjectFilter): Promise<Project[]> {
    let result = this.projects.filter((p) => p.status === 'PUBLISHED');

    if (filter?.specialties?.length) {
      const op = filter.specialtiesOp ?? 'OR';
      result = result.filter((project) => {
        const projectSpecialties = project.positions.flatMap(
          (position: Position) => position.specialties,
        );
        if (op === 'AND') {
          return filter.specialties!.every((s: number) => projectSpecialties.includes(s));
        }
        return filter.specialties!.some((s: number) => projectSpecialties.includes(s));
      });
    }

    if (filter?.skills?.length) {
      const op = filter.skillsOp ?? 'OR';
      result = result.filter((project) => {
        const projectSkills = project.positions.flatMap((position: Position) => position.skills);
        if (op === 'AND') {
          return filter.skills!.every((s: number) => projectSkills.includes(s));
        }
        return filter.skills!.some((s: number) => projectSkills.includes(s));
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
