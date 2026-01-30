import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HealthModule } from '@infrastructure/http/health/health.module';
import { ProjectsModule } from '@infrastructure/http/projects';
import { StaticDataModule } from '@infrastructure/http/static-data';
import { JsonPersistenceModule } from '@infrastructure/persistence/json';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    JsonPersistenceModule,
    HealthModule,
    StaticDataModule,
    ProjectsModule,
  ],
})
export class AppModule {}
