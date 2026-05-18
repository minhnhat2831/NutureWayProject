import * as z from 'zod'
import type { packageStatusSchema } from './PackageSchema'

export type packageStatus = z.infer<typeof packageStatusSchema>