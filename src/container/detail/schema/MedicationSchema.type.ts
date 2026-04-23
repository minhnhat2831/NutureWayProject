import * as z from 'zod'
import type { careMedicationListItemResponseSchema, careMedicationListResponseSchema, careMedicationRequestSchema, careMedicationResponseSchema } from './MedicationSchema'
export type careMedicationListResponse = z.infer<typeof careMedicationListResponseSchema>
export type careMedicationResponse = z.infer<typeof careMedicationResponseSchema>

export type careMedicationRequest = z.infer<typeof careMedicationRequestSchema>
export type careMedicationListItemResponse = z.infer<typeof careMedicationListItemResponseSchema>