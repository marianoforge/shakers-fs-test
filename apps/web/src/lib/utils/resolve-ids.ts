import { StaticData } from '@shakers/shared';

export function createIdResolver(staticData: StaticData | undefined) {
  const skillsMap = new Map(staticData?.skills?.map((s) => [s.id, s.name]) ?? []);
  const categoriesMap = new Map(staticData?.categories?.map((c) => [c.id, c.name]) ?? []);
  const subcategoriesMap = new Map(staticData?.subcategories?.map((s) => [s.id, s.name]) ?? []);
  const industriesMap = new Map(staticData?.industries?.map((i) => [i.id, i.name]) ?? []);
  const specialtiesMap = new Map(staticData?.specialties?.map((s) => [s.id, s.name]) ?? []);

  return {
    resolveSkill: (id: number) => skillsMap.get(id) ?? `Skill ${id}`,
    resolveSkills: (ids: number[]) => ids.map((id) => skillsMap.get(id) ?? `Skill ${id}`),
    resolveCategory: (id: number) => categoriesMap.get(id) ?? '',
    resolveSubcategory: (id: number) => subcategoriesMap.get(id) ?? '',
    resolveIndustry: (id: number) => industriesMap.get(id) ?? '',
    resolveSpecialty: (id: number) => specialtiesMap.get(id) ?? '',
  };
}
