import { z } from 'zod';

export const ProjectStatusSchema = z.enum([
  'DRAFT',
  'PUBLISHED',
  'ACTIVE',
  'COMPLETED',
  'ARCHIVED',
]);

export const OrganizationSchema = z.object({
  id: z.number(),
  name: z.string(),
  logo: z.string().url(),
  industry: z.number(),
});

export const ProjectLeaderSchema = z.object({
  id: z.number(),
  name: z.string(),
  lastName: z.string(),
});

export const BudgetSchema = z.object({
  hourFrom: z.number().nullable(),
  hourTo: z.number().nullable(),
  total: z.number().nullable(),
});

export const FaqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const PositionSchema = z.object({
  id: z.number(),
  title: z.string(),
  skills: z.array(z.number()),
  specialties: z.array(z.number()),
  referralBonus: z.number().nullable(),
});

export const ProjectSchema = z.object({
  id: z.number(),
  title: z.string(),
  organization: OrganizationSchema,
  projectLeader: ProjectLeaderSchema,
  category: z.number(),
  subcategory: z.number(),
  startDate: z.string(),
  budget: BudgetSchema,
  totalHours: z.number(),
  description: z.string(),
  goals: z.array(z.string()),
  faqs: z.array(FaqSchema),
  status: ProjectStatusSchema,
  creationDate: z.string(),
  positions: z.array(PositionSchema),
  totalApplicationsAmount: z.number(),
  publishedAt: z.string().nullable(),
});

export type ProjectStatus = z.infer<typeof ProjectStatusSchema>;
export type Organization = z.infer<typeof OrganizationSchema>;
export type ProjectLeader = z.infer<typeof ProjectLeaderSchema>;
export type Budget = z.infer<typeof BudgetSchema>;
export type Faq = z.infer<typeof FaqSchema>;
export type Position = z.infer<typeof PositionSchema>;
export type Project = z.infer<typeof ProjectSchema>;

export const FilterOperatorSchema = z.enum(['AND', 'OR']);
export type FilterOperator = z.infer<typeof FilterOperatorSchema>;

export const ProjectFilterSchema = z.object({
  specialties: z.array(z.number()).optional(),
  skills: z.array(z.number()).optional(),
  industry: z.array(z.number()).optional(),
  projectType: z.array(z.number()).optional(),
  order: z.enum(['publishedAt_desc', 'publishedAt_asc']).optional(),
  specialtiesOp: FilterOperatorSchema.optional(),
  skillsOp: FilterOperatorSchema.optional(),
  industryOp: FilterOperatorSchema.optional(),
  projectTypeOp: FilterOperatorSchema.optional(),
});

export type ProjectFilter = z.infer<typeof ProjectFilterSchema>;

export interface ProjectListResponse {
  projects: Project[];
  total: number;
}
