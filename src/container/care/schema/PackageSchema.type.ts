import * as z from 'zod'
import type { packageFormSchema, packageListResponseSchema, packageParamsSchema, packageRequestSchema, packageResponseSchema } from './PackageSchema'

export type packageParams = z.infer<typeof packageParamsSchema>
export type packageRequest = z.infer<typeof packageRequestSchema>
export type packageResponse = z.infer<typeof packageResponseSchema>
export type packageListResponse = z.infer<typeof packageListResponseSchema>
export type packageFormValues = z.infer<typeof packageFormSchema>