import * as fs from 'fs';
import * as path from 'path';

import { Injectable } from '@nestjs/common';
import { StaticData } from '@shakers/shared';

import { StaticDataRepositoryPort } from '@domain/ports';

@Injectable()
export class StaticDataJsonRepository implements StaticDataRepositoryPort {
  private staticData: StaticData | null = null;

  constructor() {
    this.loadStaticData();
  }

  private loadStaticData(): void {
    const filePath = path.join(process.cwd(), 'data/static-data.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    this.staticData = JSON.parse(data) as StaticData;
  }

  async getAll(): Promise<StaticData> {
    if (!this.staticData) {
      throw new Error('Static data not loaded');
    }
    return this.staticData;
  }
}
