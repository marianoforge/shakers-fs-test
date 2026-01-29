import { StaticData } from '@shakers/shared';

export const STATIC_DATA_REPOSITORY = Symbol('STATIC_DATA_REPOSITORY');

export interface StaticDataRepositoryPort {
  getAll(): Promise<StaticData>;
}
