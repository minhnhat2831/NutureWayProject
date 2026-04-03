import * as z from 'zod'
import type { categoryListItemResponseSchema, categoryListItemSchema, categoryListResponseSchema, categoryListSchema, categoryParamsSchema } from './CategorySchema'

export type categoryParams = z.infer<typeof categoryParamsSchema>
export type categoryListResponse = z.infer<typeof categoryListResponseSchema>
export type categoryList = z.infer<typeof categoryListSchema>
export type categoryListItemResponse = z.infer<typeof categoryListItemResponseSchema>
export type categoryListItem = z.infer<typeof categoryListItemSchema>