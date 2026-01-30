import { Inject, Injectable } from '@nestjs/common';
import { StaticData } from '@shakers/shared';

import { STATIC_DATA_REPOSITORY, StaticDataRepositoryPort } from '@domain/ports';

@Injectable()
export class StaticDataService {
  constructor(
    @Inject(STATIC_DATA_REPOSITORY)
    private readonly staticDataRepository: StaticDataRepositoryPort,
  ) {}

  async getStaticData(): Promise<StaticData> {
    return this.staticDataRepository.getAll();
  }
}
