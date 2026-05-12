import * as z from 'zod'
import type { careListDetailResponseSchema, careListDetailSchema, careListResponseSchema, careListShcema, manuallyClientRequestSchema, manuallyClientResponseSchema, myCareParamsSchema, myPackageListResponse, myPackageResponseSchema } from './CareSchema'

export type myCareParams = z.infer<typeof myCareParamsSchema>
export type careListResponse = z.infer<typeof careListResponseSchema>
export type careList = z.infer<typeof careListShcema>

export type careListDetailResponse = z.infer<typeof careListDetailResponseSchema>
export type careListDetail = z.infer<typeof careListDetailSchema>

export type myPackageResponse = z.infer<typeof myPackageResponseSchema>
export type myPackageListResponse = z.infer<typeof myPackageListResponse>

export type manuallyClientRequest = z.infer<typeof manuallyClientRequestSchema>
export type manuallyClientResponse = z.infer<typeof manuallyClientResponseSchema>