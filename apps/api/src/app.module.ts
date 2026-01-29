import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HealthModule } from '@infrastructure/http/health/health.module';
import { JsonPersistenceModule } from '@infrastructure/persistence/json';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    HealthModule,
    JsonPersistenceModule,
  ],
})
export class AppModule {}
