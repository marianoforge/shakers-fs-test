import { Module } from '@nestjs/common';

import { ProjectsService } from '@application/services';

import { JsonPersistenceModule } from '@infrastructure/persistence/json';

import { ProjectsController } from './projects.controller';

@Module({
  imports: [JsonPersistenceModule],
  controllers: [ProjectsController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
