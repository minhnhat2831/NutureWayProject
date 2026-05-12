import { METADATA, PARAMS, PAYLOAD_PICURE, PAYLOAD_RESPONSE, STRING_NULL_OR_OPTIONAL, STRING_REQUIRED } from '@/constants/SchemaConstant'
import * as z from 'zod'

export const myCareParamsSchema = PARAMS.extend({

})

export const careListResponseSchema = z.object({
    id: z.string(),
    doulaId: z.string(),
    userId: z.string(),
    doulaPackageId: z.string(),
    status: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string(),
    user: z.object({
        fullName: z.string(),
        firstName: z.string(),
        middleName: z.string(),
        lastName: z.string(),
        picture: z.string(),
    }),
    doula: z.object({
        title: z.string(),
        user: z.object({
            fullName: z.string(),
            firstName: z.string(),
            middleName: z.string(),
            lastName: z.string(),
            picture: z.string(),
        })
    }),
    doulaPackage: z.object({
        name: z.string()
    })
})

export const careListShcema = PAYLOAD_RESPONSE.extend({
    data: z.array(careListResponseSchema),
    metadata: METADATA
})

export const careListDetailResponseSchema = z.object({
    id: z.string(),
    doulaId: z.string(),
    userId: z.string(),
    doulaPackageId: z.string(),
    status: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    packageRequest: z.object({
        id: z.string(),
        status: z.string(),
        message: z.string(),
        createdAt: z.string(),
    }),
    doulaPackage: z.object({
        name: z.string(),
        price: z.string(),
        description: z.string(),
        quanlifications: z.array(z.string()),
        picture: PAYLOAD_PICURE
    })
})

export const careListDetailSchema = PAYLOAD_RESPONSE.extend({
    data: careListDetailResponseSchema,
})

//--------------------MY Package -----------------
export const myPackageResponseSchema = z.object({
    id: z.string(),
    name: z.string(),
    price : z.string(),
    shortDescription: z.string(),
    description: z.string(),
    status: z.string(),
    picture: PAYLOAD_PICURE,
    quanlification: z.array(z.string()),
    createdAt: z.string(),
    updatedAt : z.string(),
    deletedAt : z.string(),
})

export const myPackageResponse = PAYLOAD_RESPONSE.extend({
    data : myPackageResponseSchema
})

export const myPackageListResponse = PAYLOAD_RESPONSE.extend({
    data : z.array(myPackageResponseSchema)
})

export const manuallyClientRequestSchema = z.object({
    firstName : STRING_NULL_OR_OPTIONAL,
    lastName : STRING_NULL_OR_OPTIONAL,
    fullName : STRING_REQUIRED,
    doulaPackageId : STRING_REQUIRED
})

export const manuallyClientResponseSchema = PAYLOAD_RESPONSE.extend({
    data : z.boolean()
})