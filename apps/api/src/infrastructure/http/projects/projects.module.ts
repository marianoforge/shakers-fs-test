import { Module } from '@nestjs/common';

import { ApplicationsService, ProjectsService } from '@application/services';

import { JsonPersistenceModule } from '@infrastructure/persistence/json';

import { ProjectsController } from './projects.controller';

@Module({
  imports: [JsonPersistenceModule],
  controllers: [ProjectsController],
  providers: [ApplicationsService, ProjectsService],
})
export class ProjectsModule {}
