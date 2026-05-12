import * as z from 'zod'
import type { userListItemResponseSchema, userResponseSchema } from './UserSchema'

export type userResponse = z.infer<typeof userResponseSchema>
export type userListItemResponse = z.infer<typeof userListItemResponseSchema>