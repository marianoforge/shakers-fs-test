import * as fs from 'fs';

import { ProjectJsonRepository } from './project.json.repository';

jest.mock('fs');

const mockProjects = [
  {
    id: 1,
    status: 'PUBLISHED',
    category: 1,
    organization: { industry: 5 },
    positions: [
      { id: 101, specialties: [1, 2], skills: [10, 11] },
      { id: 102, specialties: [3], skills: [12] },
    ],
    publishedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 2,
    status: 'PUBLISHED',
    category: 2,
    organization: { industry: 5 },
    positions: [{ id: 201, specialties: [1], skills: [10, 13] }],
    publishedAt: '2024-01-10T10:00:00Z',
  },
  {
    id: 3,
    status: 'PUBLISHED',
    category: 1,
    organization: { industry: 10 },
    positions: [{ id: 301, specialties: [2, 3], skills: [11, 14] }],
    publishedAt: '2024-01-20T10:00:00Z',
  },
  {
    id: 4,
    status: 'DRAFT',
    category: 3,
    organization: { industry: 15 },
    positions: [{ id: 401, specialties: [4], skills: [15] }],
    publishedAt: '2024-01-05T10:00:00Z',
  },
];

describe('ProjectJsonRepository', () => {
  let repository: ProjectJsonRepository;

  beforeEach(() => {
    (fs.readFileSync as jest.Mock).mockReturnValue(JSON.stringify(mockProjects));
    repository = new ProjectJsonRepository();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('findAll', () => {
    it('should return only published projects', async () => {
      const result = await repository.findAll();
      expect(result).toHaveLength(3);
      expect(result.every((p) => p.status === 'PUBLISHED')).toBe(true);
    });

    it('should return all published projects when no filter', async () => {
      const result = await repository.findAll();
      expect(result.map((p) => p.id)).toEqual([1, 2, 3]);
    });

    describe('specialties filter', () => {
      it('should filter by single specialty (OR)', async () => {
        const result = await repository.findAll({ specialties: [1] });
        expect(result.map((p) => p.id)).toEqual([1, 2]);
      });

      it('should filter by multiple specialties with OR operator', async () => {
        const result = await repository.findAll({
          specialties: [1, 3],
          specialtiesOp: 'OR',
        });
        expect(result.map((p) => p.id)).toEqual([1, 2, 3]);
      });

      it('should filter by multiple specialties with AND operator', async () => {
        const result = await repository.findAll({
          specialties: [2, 3],
          specialtiesOp: 'AND',
        });
        expect(result.map((p) => p.id)).toEqual([1, 3]);
      });

      it('should return empty when AND filter has no matches', async () => {
        const result = await repository.findAll({
          specialties: [1, 4],
          specialtiesOp: 'AND',
        });
        expect(result).toEqual([]);
      });
    });

    describe('skills filter', () => {
      it('should filter by single skill (OR)', async () => {
        const result = await repository.findAll({ skills: [10] });
        expect(result.map((p) => p.id)).toEqual([1, 2]);
      });

      it('should filter by multiple skills with OR operator', async () => {
        const result = await repository.findAll({
          skills: [10, 14],
          skillsOp: 'OR',
        });
        expect(result.map((p) => p.id)).toEqual([1, 2, 3]);
      });

      it('should filter by multiple skills with AND operator', async () => {
        const result = await repository.findAll({
          skills: [10, 11],
          skillsOp: 'AND',
        });
        expect(result.map((p) => p.id)).toEqual([1]);
      });
    });

    describe('industry filter', () => {
      it('should filter by single industry', async () => {
        const result = await repository.findAll({ industry: [5] });
        expect(result.map((p) => p.id)).toEqual([1, 2]);
      });

      it('should filter by multiple industries (OR)', async () => {
        const result = await repository.findAll({ industry: [5, 10] });
        expect(result.map((p) => p.id)).toEqual([1, 2, 3]);
      });
    });

    describe('projectType filter', () => {
      it('should filter by single project type', async () => {
        const result = await repository.findAll({ projectType: [1] });
        expect(result.map((p) => p.id)).toEqual([1, 3]);
      });

      it('should filter by multiple project types (OR)', async () => {
        const result = await repository.findAll({ projectType: [1, 2] });
        expect(result.map((p) => p.id)).toEqual([1, 2, 3]);
      });
    });

    describe('sorting', () => {
      it('should sort by publishedAt descending', async () => {
        const result = await repository.findAll({ order: 'publishedAt_desc' });
        expect(result.map((p) => p.id)).toEqual([3, 1, 2]);
      });

      it('should sort by publishedAt ascending', async () => {
        const result = await repository.findAll({ order: 'publishedAt_asc' });
        expect(result.map((p) => p.id)).toEqual([2, 1, 3]);
      });
    });

    describe('combined filters', () => {
      it('should apply multiple filters together', async () => {
        const result = await repository.findAll({
          specialties: [1, 2],
          specialtiesOp: 'OR',
          industry: [5],
        });
        expect(result.map((p) => p.id)).toEqual([1, 2]);
      });

      it('should apply filters and sorting together', async () => {
        const result = await repository.findAll({
          industry: [5],
          order: 'publishedAt_asc',
        });
        expect(result.map((p) => p.id)).toEqual([2, 1]);
      });
    });
  });

  describe('findById', () => {
    it('should return project by id', async () => {
      const result = await repository.findById(1);
      expect(result?.id).toBe(1);
    });

    it('should return null for non-existent id', async () => {
      const result = await repository.findById(999);
      expect(result).toBeNull();
    });

    it('should return draft projects by id', async () => {
      const result = await repository.findById(4);
      expect(result?.id).toBe(4);
      expect(result?.status).toBe('DRAFT');
    });
  });
});
