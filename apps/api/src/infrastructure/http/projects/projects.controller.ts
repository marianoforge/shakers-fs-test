import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { Position, Project, ProjectFilter } from '@shakers/shared';

import { ApplicationsService, ProjectsService } from '@application/services';

interface GetProjectsQueryDto {
  specialties?: string | string[];
  skills?: string | string[];
  industry?: string | string[];
  projectType?: string | string[];
  order?: 'publishedAt_desc' | 'publishedAt_asc';
  specialtiesOp?: 'AND' | 'OR';
  skillsOp?: 'AND' | 'OR';
  industryOp?: 'AND' | 'OR';
  projectTypeOp?: 'AND' | 'OR';
}

interface ApplyDto {
  positionId: number;
}

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly applicationsService: ApplicationsService,
  ) {}

  @Get()
  async findAll(@Query() query: GetProjectsQueryDto): Promise<Project[]> {
    const filter: ProjectFilter = {};

    if (query.specialties) {
      filter.specialties = this.parseArrayParam(query.specialties);
      filter.specialtiesOp = query.specialtiesOp ?? 'OR';
    }

    if (query.skills) {
      filter.skills = this.parseArrayParam(query.skills);
      filter.skillsOp = query.skillsOp ?? 'OR';
    }

    if (query.industry) {
      filter.industry = this.parseArrayParam(query.industry);
      filter.industryOp = query.industryOp ?? 'OR';
    }

    if (query.projectType) {
      filter.projectType = this.parseArrayParam(query.projectType);
      filter.projectTypeOp = query.projectTypeOp ?? 'OR';
    }

    if (query.order) {
      filter.order = query.order;
    }

    return this.projectsService.findAll(filter);
  }

  @Get(':id/applications')
  async getApplications(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ appliedPositions: number[] }> {
    const project = await this.projectsService.findById(id);

    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    const appliedPositions = await this.applicationsService.getAppliedPositions(id);
    return { appliedPositions };
  }

  @Post(':id/applications')
  async apply(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ApplyDto,
  ): Promise<{ success: boolean; message: string }> {
    const project = await this.projectsService.findById(id);

    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    const position = project.positions.find((p: Position) => p.id === body.positionId);
    if (!position) {
      throw new NotFoundException(`Position with id ${body.positionId} not found`);
    }

    const applied = await this.applicationsService.apply(id, body.positionId);

    if (!applied) {
      throw new BadRequestException('Ya has aplicado a esta posición');
    }

    return { success: true, message: 'Aplicación enviada con éxito' };
  }

  @Delete(':id/applications')
  async withdraw(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ApplyDto,
  ): Promise<{ success: boolean; message: string }> {
    const project = await this.projectsService.findById(id);

    if (!project) {
      throw new NotFoundException(`Project with id ${id} not found`);
    }

    const position = project.positions.find((p: Position) => p.id === body.positionId);
    if (!position) {
      throw new NotFoundException(`Position with id ${body.positionId} not found`);
    }

    const withdrawn = await this.applicationsService.withdraw(id, body.positionId);

    if (!withdrawn) {
      throw new BadRequestException('No has aplicado a esta posición');
    }

    return { success: true, message: 'Candidatura retirada con éxito' };
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
