import { z } from 'zod';

export const SkillSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const SpecialtySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const IndustrySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const SubcategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  categoryId: z.number(),
});

export const StaticDataSchema = z.object({
  skills: z.array(SkillSchema),
  specialties: z.array(SpecialtySchema),
  industries: z.array(IndustrySchema),
  categories: z.array(CategorySchema),
  subcategories: z.array(SubcategorySchema),
});

export type Skill = z.infer<typeof SkillSchema>;
export type Specialty = z.infer<typeof SpecialtySchema>;
export type Industry = z.infer<typeof IndustrySchema>;
export type Category = z.infer<typeof CategorySchema>;
export type Subcategory = z.infer<typeof SubcategorySchema>;
export type StaticData = z.infer<typeof StaticDataSchema>;
