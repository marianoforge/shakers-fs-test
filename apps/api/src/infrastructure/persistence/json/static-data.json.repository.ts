import * as fs from 'fs';
import * as path from 'path';

import { Injectable, Logger } from '@nestjs/common';
import { StaticData, StaticDataSchema } from '@shakers/shared';

import { StaticDataRepositoryPort } from '@domain/ports';

@Injectable()
export class StaticDataJsonRepository implements StaticDataRepositoryPort {
  private readonly logger = new Logger(StaticDataJsonRepository.name);
  private staticData: StaticData | null = null;

  constructor() {
    this.loadStaticData();
  }

  private loadStaticData(): void {
    const filePath = path.join(process.cwd(), 'data/static-data.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const rawData = JSON.parse(data);

    try {
      this.staticData = StaticDataSchema.parse(rawData);
      this.logger.log('Static data loaded and validated successfully');
    } catch {
      this.logger.warn('Static data validation failed, using unvalidated data');
      this.staticData = rawData as StaticData;
    }
  }

  async getAll(): Promise<StaticData> {
    if (!this.staticData) {
      throw new Error('Static data not loaded');
    }
    return this.staticData;
  }
}
