import { METADATA, PARAMS, PAYLOAD_PICURE, PAYLOAD_RESPONSE } from '@/constants/SchemaConstant'
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
    title: z.string(),
    shortDes: z.string(),
    description: z.string(),
    status: z.string(),
    photo: z.array(z.string()),
    quanlification: z.array(z.string()),
    createdAt: z.string(),
    updatedAt : z.string(),
    deletedAt : z.string(),
})

export const myPackageResponse = PAYLOAD_RESPONSE.extend({
    data : myPackageResponseSchema
})
