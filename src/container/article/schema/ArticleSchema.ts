import { METADATA, PARAMS, PAYLOAD_PICURE, PAYLOAD_RESPONSE } from '@/constants/SchemaConstant'
import * as z from 'zod'

export const articleParamsSchema = PARAMS.extend({
    f_type: z.string().optional(),
    f_categoryId: z.string().optional()
})

export const articleListResponseSchema = z.object({
    id: z.string(),
    name: z.string(),
    title: z.string(),
    picture: PAYLOAD_PICURE,
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

export const articleListitemResponseSchema = z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    picture: PAYLOAD_PICURE,
    content: z.string(),
    status: z.string(),
    type: z.string(),
    author: z.string(),
    categoryId: z.string(),
    timeToRead: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    category: z.object({
        id: z.string(),
        name: z.string()
    }),
    isFavorite: z.boolean()
})

export const articleListSchema = PAYLOAD_RESPONSE.extend({
    data: z.array(articleListResponseSchema),
    metadata: METADATA
})

export const articleListItemSchema = PAYLOAD_RESPONSE.extend({
    data: articleListitemResponseSchema
})

export const statusArticleSchema = PAYLOAD_RESPONSE.extend({
    data: z.object({
        id: z.string(),
        userId: z.string(),
        articleId: z.string(),
        status: false,
        createdAt: z.string(),
        updatedAt: z.string(),
    })
})