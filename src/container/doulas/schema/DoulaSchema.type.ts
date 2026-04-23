import * as z from 'zod'
import type { doulaListDetailResponseSchema, doulaListDetailSchema, doulaListResponseSchema, doulaListSchema, doulaPackageListSchema, doulaPackageResponseSchema, doulaParamSchema } from './DoulaSchema'

export type doulaParam = z.infer<typeof doulaParamSchema>
export type doulaListResponse = z.infer<typeof doulaListResponseSchema>
export type doulaList = z.infer<typeof doulaListSchema>

export type doulaListDetailResponse = z.infer<typeof doulaListDetailResponseSchema>

export type doulaPackageResponse = z.infer<typeof doulaPackageResponseSchema>
export type doulaListDetail = z.infer<typeof doulaListDetailSchema>
export type doulaPackageList = z.infer<typeof doulaPackageListSchema>