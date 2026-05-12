import { METADATA, PARAMS, PAYLOAD_RESPONSE, STRING_REQUIRED } from '@/constants/SchemaConstant'
import * as z from 'zod'

export const documentParamsSchema = PARAMS.extend({

})

export const documentsResponseSchema = z.object({
    id: z.string(),
    careId: z.string(),
    name: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string(),
    document: z.object({
        uri: z.string(),
        resourceId: z.string(),
        type: z.string(),
        metadata: z.string(),
        createdAt: z.string(),
    })
})

export const documentsListResponseSchema = PAYLOAD_RESPONSE.extend({
    data : z.array(documentsResponseSchema),
    metadata : METADATA
})

export const documentRequestSchema = z.object({
    careId : STRING_REQUIRED,
    files : z.array(z.object({
        name : z.string(),
        url : z.string(),
        type : z.string()
    }))
})