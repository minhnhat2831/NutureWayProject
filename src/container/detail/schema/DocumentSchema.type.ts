import * as z from 'zod'
import type { documentParamsSchema, documentsListResponseSchema } from './DocumentSchema'

export type documentParams = z.infer<typeof documentParamsSchema>
export type documentsListResponse = z.infer<typeof documentsListResponseSchema>