'use client';

import { useCallback, useState } from 'react';

import { FilterOperator, ProjectFilter } from '@shakers/shared';

export type ProjectSortOrder = 'publishedAt_desc' | 'publishedAt_asc';

export interface FilterOperators {
  specialties: FilterOperator;
  skills: FilterOperator;
  industry: FilterOperator;
  projectType: FilterOperator;
}

export interface FiltersState {
  specialties: number[];
  skills: number[];
  industry: number[];
  projectType: number[];
  order: ProjectSortOrder;
  operators: FilterOperators;
}

const initialOperators: FilterOperators = {
  specialties: 'OR',
  skills: 'OR',
  industry: 'OR',
  projectType: 'OR',
};

const initialFilters: FiltersState = {
  specialties: [],
  skills: [],
  industry: [],
  projectType: [],
  order: 'publishedAt_desc',
  operators: initialOperators,
};

export function useFilters() {
  const [filters, setFilters] = useState<FiltersState>(initialFilters);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState<FiltersState>(initialFilters);

  const openModal = useCallback(() => {
    setTempFilters(filters);
    setIsModalOpen(true);
  }, [filters]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const applyFilters = useCallback(() => {
    setFilters(tempFilters);
    setIsModalOpen(false);
  }, [tempFilters]);

  const clearFilters = useCallback(() => {
    setTempFilters(initialFilters);
  }, []);

  const clearAllFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  const updateTempFilter = useCallback(
    <K extends keyof FiltersState>(key: K, value: FiltersState[K]) => {
      setTempFilters((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const toggleOperator = useCallback((field: keyof FilterOperators) => {
    setTempFilters((prev) => ({
      ...prev,
      operators: {
        ...prev.operators,
        [field]: prev.operators[field] === 'OR' ? 'AND' : 'OR',
      },
    }));
  }, []);

  const removeFilter = useCallback(
    (type: 'specialty' | 'skill' | 'industry' | 'projectType', id: number) => {
      setFilters((prev) => {
        switch (type) {
          case 'specialty':
            return { ...prev, specialties: prev.specialties.filter((s) => s !== id) };
          case 'skill':
            return { ...prev, skills: prev.skills.filter((s) => s !== id) };
          case 'industry':
            return { ...prev, industry: prev.industry.filter((i) => i !== id) };
          case 'projectType':
            return { ...prev, projectType: prev.projectType.filter((p) => p !== id) };
          default:
            return prev;
        }
      });
    },
    [],
  );

  const setSortOrder = useCallback((order: ProjectSortOrder) => {
    setFilters((prev) => ({ ...prev, order }));
  }, []);

  const hasActiveFilters =
    filters.specialties.length > 0 ||
    filters.skills.length > 0 ||
    filters.industry.length > 0 ||
    filters.projectType.length > 0;

  const activeFiltersCount =
    filters.specialties.length +
    filters.skills.length +
    filters.industry.length +
    filters.projectType.length;

  const getProjectFilter = useCallback((): ProjectFilter => {
    return {
      specialties: filters.specialties.length > 0 ? filters.specialties : undefined,
      skills: filters.skills.length > 0 ? filters.skills : undefined,
      industry: filters.industry.length > 0 ? filters.industry : undefined,
      projectType: filters.projectType.length > 0 ? filters.projectType : undefined,
      order: filters.order,
      specialtiesOp: filters.operators.specialties,
      skillsOp: filters.operators.skills,
      industryOp: filters.operators.industry,
      projectTypeOp: filters.operators.projectType,
    };
  }, [filters]);

  return {
    filters,
    tempFilters,
    isModalOpen,
    hasActiveFilters,
    activeFiltersCount,
    openModal,
    closeModal,
    applyFilters,
    clearFilters,
    clearAllFilters,
    updateTempFilter,
    toggleOperator,
    removeFilter,
    setSortOrder,
    getProjectFilter,
  };
}
