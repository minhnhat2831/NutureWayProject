import { METADATA, PARAMS, PAYLOAD_PICURE, PAYLOAD_RESPONSE, STRING_NULL_OR_OPTIONAL, STRING_REQUIRED } from "@/constants/SchemaConstant"
import * as z from 'zod'
//----------------------------CARE MEDICATION-----------------------------------
export const careMedicationResponseSchema = z.object({
    id: z.string(),
    careId: z.string(),
    brandName: z.string(),
    drugName: z.string(),
    dose: z.string(),
    amount: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    picture: PAYLOAD_PICURE
})

export const careMedicationListResponseSchema = PARAMS.extend({
    data: z.array(careMedicationResponseSchema),
    metadata: METADATA
})

export const careMedicationRequestSchema = z.object({
    careId: STRING_REQUIRED,
    brandName: STRING_REQUIRED,
    drugName: STRING_REQUIRED,
    dose: STRING_REQUIRED,
    picture: STRING_REQUIRED,
    amount: STRING_REQUIRED,
    references: STRING_NULL_OR_OPTIONAL
})

export const careMedicationListItemResponseSchema = PAYLOAD_RESPONSE.extend({
    data: careMedicationResponseSchema
})