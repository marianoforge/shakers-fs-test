import { StaticData } from '@shakers/shared';

import { apiClient } from './client';

export async function getStaticData(): Promise<StaticData> {
  return apiClient<StaticData>('/static-data');
}
