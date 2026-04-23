import * as z from 'zod'
import type { helpCenterListResponseSchema, helpCenterListSchema } from './SettingSchema'

export type helpCenterListResponse = z.infer<typeof helpCenterListResponseSchema>
export type helpCenterList = z.infer<typeof helpCenterListSchema>