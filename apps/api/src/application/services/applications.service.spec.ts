import { ApplicationsService } from './applications.service';

describe('ApplicationsService', () => {
  let service: ApplicationsService;

  beforeEach(() => {
    service = new ApplicationsService();
  });

  describe('apply', () => {
    it('should successfully apply to a position', async () => {
      const result = await service.apply(1, 100);
      expect(result).toBe(true);
    });

    it('should return false when already applied to the same position', async () => {
      await service.apply(1, 100);
      const result = await service.apply(1, 100);
      expect(result).toBe(false);
    });

    it('should allow applying to different positions in the same project', async () => {
      const result1 = await service.apply(1, 100);
      const result2 = await service.apply(1, 101);
      expect(result1).toBe(true);
      expect(result2).toBe(true);
    });

    it('should allow applying to the same position in different projects', async () => {
      const result1 = await service.apply(1, 100);
      const result2 = await service.apply(2, 100);
      expect(result1).toBe(true);
      expect(result2).toBe(true);
    });
  });

  describe('withdraw', () => {
    it('should successfully withdraw an application', async () => {
      await service.apply(1, 100);
      const result = await service.withdraw(1, 100);
      expect(result).toBe(true);
    });

    it('should return false when withdrawing a non-existent application', async () => {
      const result = await service.withdraw(1, 100);
      expect(result).toBe(false);
    });

    it('should allow re-applying after withdrawal', async () => {
      await service.apply(1, 100);
      await service.withdraw(1, 100);
      const result = await service.apply(1, 100);
      expect(result).toBe(true);
    });
  });

  describe('isApplied', () => {
    it('should return true when applied', async () => {
      await service.apply(1, 100);
      const result = await service.isApplied(1, 100);
      expect(result).toBe(true);
    });

    it('should return false when not applied', async () => {
      const result = await service.isApplied(1, 100);
      expect(result).toBe(false);
    });

    it('should return false after withdrawal', async () => {
      await service.apply(1, 100);
      await service.withdraw(1, 100);
      const result = await service.isApplied(1, 100);
      expect(result).toBe(false);
    });
  });

  describe('getAppliedPositions', () => {
    it('should return empty array when no applications', async () => {
      const result = await service.getAppliedPositions(1);
      expect(result).toEqual([]);
    });

    it('should return applied position IDs for a project', async () => {
      await service.apply(1, 100);
      await service.apply(1, 101);
      await service.apply(1, 102);
      const result = await service.getAppliedPositions(1);
      expect(result).toHaveLength(3);
      expect(result).toContain(100);
      expect(result).toContain(101);
      expect(result).toContain(102);
    });

    it('should not include positions from other projects', async () => {
      await service.apply(1, 100);
      await service.apply(2, 200);
      const result = await service.getAppliedPositions(1);
      expect(result).toEqual([100]);
    });

    it('should not include withdrawn positions', async () => {
      await service.apply(1, 100);
      await service.apply(1, 101);
      await service.withdraw(1, 100);
      const result = await service.getAppliedPositions(1);
      expect(result).toEqual([101]);
    });

    it('should handle position ID 0 correctly', async () => {
      await service.apply(1, 0);
      await service.apply(1, 1);
      const result = await service.getAppliedPositions(1);
      expect(result).toHaveLength(2);
      expect(result).toContain(0);
      expect(result).toContain(1);
    });
  });
});
