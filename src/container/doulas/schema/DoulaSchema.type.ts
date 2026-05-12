import * as z from 'zod'
import type { doulaClientListResponseSchema, doulaClientParamsSchema, doulaClientResponseSchema, doulaListDetailResponseSchema, doulaListDetailSchema, doulaListResponseSchema, doulaListSchema, doulaPackageListSchema, doulaPackageResponseSchema, doulaParamSchema, doulaReviewListResponseSchema, doulaReviewParamsSchema, doulaReviewResponseSchema, doulaReviewStarListItemResponseSchema, doulaReviewStarResponseSchema } from './DoulaSchema'

export type doulaParam = z.infer<typeof doulaParamSchema>
export type doulaListResponse = z.infer<typeof doulaListResponseSchema>
export type doulaList = z.infer<typeof doulaListSchema>

export type doulaListDetailResponse = z.infer<typeof doulaListDetailResponseSchema>

export type doulaPackageResponse = z.infer<typeof doulaPackageResponseSchema>
export type doulaListDetail = z.infer<typeof doulaListDetailSchema>
export type doulaPackageList = z.infer<typeof doulaPackageListSchema>

export type doulaClientParams = z.infer<typeof doulaClientParamsSchema>
export type doulaClientResponse = z.infer<typeof doulaClientResponseSchema>
export type doulaClientListResponse = z.infer<typeof doulaClientListResponseSchema>

export type doulaReviewStarResponse = z.infer<typeof doulaReviewStarResponseSchema>
export type doulaReviewStarListItemResponse = z.infer<typeof doulaReviewStarListItemResponseSchema>

export type doulaReviewParams = z.infer<typeof doulaReviewParamsSchema>
export type doulaReviewResponse = z.infer<typeof doulaReviewResponseSchema>
export type doulaReviewListResponse = z.infer<typeof doulaReviewListResponseSchema>