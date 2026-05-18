import { STRING_NULL_OR_OPTIONAL } from '@/constants/SchemaConstant'
import * as z from 'zod'

export const packageStatusSchema = z.object({
    status : STRING_NULL_OR_OPTIONAL,
    notificationId : STRING_NULL_OR_OPTIONAL
})