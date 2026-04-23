import { METADATA, PAYLOAD_RESPONSE } from '@/constants/SchemaConstant'
import * as z from 'zod'

export const helpCenterListResponseSchema = z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    status: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
})

export const helpCenterListSchema = PAYLOAD_RESPONSE.extend({
    data : z.array(helpCenterListResponseSchema),
    metadata : METADATA
})