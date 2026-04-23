import * as z from 'zod'
import type { articleListitemResponseSchema, articleListItemSchema, articleListResponseSchema, articleListSchema, articleParamsSchema, statusArticleSchema } from './ArticleSchema'

export type articleParams = z.infer<typeof articleParamsSchema>
export type articleListResponse = z.infer<typeof articleListResponseSchema>
export type articleList = z.infer<typeof articleListSchema>
export type articleListItemResponse = z.infer<typeof articleListitemResponseSchema>
export type articleListItem = z.infer<typeof articleListItemSchema>

export type statusArticle = z.infer<typeof statusArticleSchema>