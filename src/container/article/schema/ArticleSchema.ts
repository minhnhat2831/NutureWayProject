import { METADATA, PARAMS, PAYLOAD_RESPONSE } from '@/constants/SchemaConstant'
import * as z from 'zod'

export const articleParamsSchema = PARAMS.extend({
    f_type: z.string().optional(),
    f_categoryId: z.string().optional()
})

export const articleListResponseSchema = z.object({
    id: z.string(),
    name: z.string(),
    title: z.string(),
    picture: z.string(),
    content: z.string(),
    status: z.string(),
    slug: z.string(),
    type: z.string(),
    authorId: z.string(),
    categoryId: z.string(),
    timeToRead: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    category: z.object({
        id: z.string(),
        name: z.string()
    }),
    author: z.object({
        id: z.string(),
        firstName: z.string(),
        lastName: z.string()
    })
})

export const articleListSchema = PAYLOAD_RESPONSE.extend({
    data : z.array(articleListResponseSchema),
    metadata : METADATA
})