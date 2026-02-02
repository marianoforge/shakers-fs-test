import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplicationsService {
  private readonly applications = new Set<string>();

  private getKey(projectId: number, positionId: number): string {
    return `${projectId}:${positionId}`;
  }

  async apply(projectId: number, positionId: number): Promise<boolean> {
    const key = this.getKey(projectId, positionId);
    if (this.applications.has(key)) {
      return false;
    }
    this.applications.add(key);
    return true;
  }

  async withdraw(projectId: number, positionId: number): Promise<boolean> {
    const key = this.getKey(projectId, positionId);
    if (!this.applications.has(key)) {
      return false;
    }
    this.applications.delete(key);
    return true;
  }

  async isApplied(projectId: number, positionId: number): Promise<boolean> {
    return this.applications.has(this.getKey(projectId, positionId));
  }

  async getAppliedPositions(projectId: number): Promise<number[]> {
    const prefix = `${projectId}:`;
    const positionIds: number[] = [];

    this.applications.forEach((key) => {
      if (key.startsWith(prefix)) {
        const parts = key.split(':');
        if (parts[1]) {
          const positionId = parseInt(parts[1], 10);
          positionIds.push(positionId);
        }
      }
    });

    return positionIds;
  }
}
