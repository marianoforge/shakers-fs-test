import { Module } from '@nestjs/common';

import { StaticDataService } from '@application/services';

import { JsonPersistenceModule } from '@infrastructure/persistence/json';

import { StaticDataController } from './static-data.controller';

@Module({
  imports: [JsonPersistenceModule],
  controllers: [StaticDataController],
  providers: [StaticDataService],
})
export class StaticDataModule {}
