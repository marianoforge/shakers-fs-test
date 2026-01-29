import { Module } from '@nestjs/common';

import { PROJECT_REPOSITORY, STATIC_DATA_REPOSITORY } from '@domain/ports';

import { ProjectJsonRepository } from './project.json.repository';
import { StaticDataJsonRepository } from './static-data.json.repository';

@Module({
  providers: [
    {
      provide: PROJECT_REPOSITORY,
      useClass: ProjectJsonRepository,
    },
    {
      provide: STATIC_DATA_REPOSITORY,
      useClass: StaticDataJsonRepository,
    },
  ],
  exports: [PROJECT_REPOSITORY, STATIC_DATA_REPOSITORY],
})
export class JsonPersistenceModule {}
