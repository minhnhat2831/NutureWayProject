import * as z from 'zod'
import type { packageListResponseSchema, packageRequestSchema, packageResponseSchema } from './PackageSchema'

export type packageRequest = z.infer<typeof packageRequestSchema>
export type packageResponse = z.infer<typeof packageResponseSchema>
export type packageListResponse = z.infer<typeof packageListResponseSchema>
