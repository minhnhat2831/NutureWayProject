import * as z from 'zod'
import type { articleListResponseSchema, articleListSchema, articleParamsSchema } from './ArticleSchema'

export type articleParams = z.infer<typeof articleParamsSchema>
export type articleListResponse = z.infer<typeof articleListResponseSchema>
export type articleList = z.infer<typeof articleListSchema>