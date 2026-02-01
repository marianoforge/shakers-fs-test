'use client';

import { useCallback, useState } from 'react';

import { ProjectFilter, SortOrder } from '@shakers/shared';

export type FilterOperator = 'AND' | 'OR';

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
  order: SortOrder;
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

  const hasActiveFilters =
    filters.specialties.length > 0 ||
    filters.skills.length > 0 ||
    filters.industry.length > 0 ||
    filters.projectType.length > 0;

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
    openModal,
    closeModal,
    applyFilters,
    clearFilters,
    clearAllFilters,
    updateTempFilter,
    toggleOperator,
    getProjectFilter,
  };
}
