import { Controller, Get } from '@nestjs/common';
import { StaticData } from '@shakers/shared';

import { StaticDataService } from '@application/services';

@Controller('static-data')
export class StaticDataController {
  constructor(private readonly staticDataService: StaticDataService) {}

  @Get()
  async getStaticData(): Promise<StaticData> {
    return this.staticDataService.getStaticData();
  }
}
