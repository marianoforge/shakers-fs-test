import { z } from 'zod';

export const PaginationSchema = z.object({
  page: z.number().int().positive().default(1),
  limit: z.number().int().positive().max(100).default(20),
});

export type Pagination = z.infer<typeof PaginationSchema>;

export const SortOrderSchema = z.enum(['asc', 'desc']);
export type SortOrder = z.infer<typeof SortOrderSchema>;

export interface ApiResponse<T> {
  data: T;
  success: boolean;
}

export interface ApiErrorResponse {
  message: string;
  statusCode: number;
  error?: string;
}
