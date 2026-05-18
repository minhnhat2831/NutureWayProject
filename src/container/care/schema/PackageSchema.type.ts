import * as z from 'zod'
import type { myPackageListItemResponseSchema, myPackageListResponseSchema, myPackageParamsSchema, packageFormSchema, packageListResponseSchema, packageParamsSchema, packageRequestSchema, packageResponseSchema } from './PackageSchema'
import type { myPackageResponseSchema } from './CareSchema'

export type packageParams = z.infer<typeof packageParamsSchema>
export type packageRequest = z.infer<typeof packageRequestSchema>
export type packageResponse = z.infer<typeof packageResponseSchema>
export type packageListResponse = z.infer<typeof packageListResponseSchema>
export type packageFormValues = z.infer<typeof packageFormSchema>

export type myPackageParams = z.infer<typeof myPackageParamsSchema>
export type myPackageResponse = z.infer<typeof myPackageResponseSchema>
export type myPackageListResponse = z.infer<typeof myPackageListResponseSchema>
export type myPackageListItemResponse = z.infer<typeof myPackageListItemResponseSchema>
