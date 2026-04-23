import { METADATA, PARAMS, PAYLOAD_PICURE, PAYLOAD_RESPONSE, STRING_REQUIRED } from '@/constants/SchemaConstant'
import * as z from 'zod'

export const packageParamsSchema = PARAMS.extend({

})

export const packageFormSchema = z.object({
    price: STRING_REQUIRED,
    description: STRING_REQUIRED,
    image: STRING_REQUIRED,
    qualifications: z.array(z.object({ value: z.string() })),
    name: STRING_REQUIRED,
    shortDescription: STRING_REQUIRED,
})

export const packageRequestSchema = z.object({
    price: STRING_REQUIRED,
    description: STRING_REQUIRED,
    image: STRING_REQUIRED,
    qualifications: z.array(z.string()),
    name: STRING_REQUIRED,
    shortDescription : STRING_REQUIRED,
})

export const packageResponseSchema = z.object({
    id: z.string(),
    name: z.string(),
    shortDescription: z.string(),
    description: z.string(),
    status : z.string(),
    picture: PAYLOAD_PICURE,
    qualifications: z.array(z.string()),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string(),
    doula : z.object({
        title : z.string(),
        user : z.object({
            firstName : z.string(),
            fullName : z.string(),
            lastName : z.string(),
            middleName : z.string(),
            picture : PAYLOAD_PICURE
        })
    }),
    doulaId : z.string(),
    price : z.string(),
})

export const packageListResponseSchema = PAYLOAD_RESPONSE.extend({
    data : z.array(packageResponseSchema),
    metadata : METADATA
})