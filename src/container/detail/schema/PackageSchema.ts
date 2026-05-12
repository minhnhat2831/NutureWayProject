import { PAYLOAD_RESPONSE, STRING_NULL_OR_OPTIONAL, STRING_REQUIRED } from '@/constants/SchemaConstant'
import * as z from 'zod'

export const packageRequestSchema = z.object({
    doulaPackageId: STRING_REQUIRED,
    userId: STRING_REQUIRED,
    message: STRING_NULL_OR_OPTIONAL
})

export const packageResponseSchema = z.object({
    id: z.string(),
    status: z.string(),
    doulaPackageId: z.string(),
    userId: z.string(),
    message: z.string(),
    updatedAt: z.string(),
    createdAt: z.string(),
    updatedBy: z.string(),
    deletedAt: z.string(),
})

export const packageListResponseSchema = PAYLOAD_RESPONSE.extend({
    data : packageResponseSchema
})