import { METADATA, PARAMS, PAYLOAD_PICURE, PAYLOAD_RESPONSE } from '@/constants/SchemaConstant'
import * as z from 'zod'

export const doulaParamSchema = PARAMS.extend({
    f_categoryIds: z.string().optional(),
    f_id: z.string().optional()
})

export const doulaListResponseSchema = z.object({
    distance: z.string(),
    id: z.string(),
    title: z.string(),
    photos: PAYLOAD_PICURE,
    picture: PAYLOAD_PICURE,
    starAvg: z.number(),
    description: z.string(),
    user: z.object({
        fullName: z.string(),
        firstName: z.string(),
        middleName: z.string(),
        lastName: z.string(),
        picture: z.string()
    })
})

export const doulaListSchema = PAYLOAD_RESPONSE.extend({
    cache: z.boolean(),
    data: z.array(doulaListResponseSchema),
    meatadata: METADATA
})

export const doulaListDetailResponseSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    businessName: z.string(),
    starAvg: z.number(),
    status: z.string(),
    qualifications: z.array(z.string()),
    stripeCustomerId: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string(),
    cometChatUid: z.string(),
    user: z.object({
        fullName: z.string(),
        firstName: z.string(),
        middleName: z.string(),
        lastName: z.string(),
        birthDate: z.string(),
        email: z.string()
    }),
    categories: z.array(z.object({
        id: z.string(),
        image: z.string(),
        name: z.string(),
        title: z.string()
    })),
    address: z.object({
        id: z.string(),
        fullAddress: z.string()
    }),
    picture: PAYLOAD_PICURE,
    photos: z.array(z.object({
        id: z.string(),
        media: PAYLOAD_PICURE
    }))
})

export const doulaListDetailSchema = PAYLOAD_RESPONSE.extend({
    data: doulaListDetailResponseSchema
})

export const doulaPackageResponseSchema = z.object({
    id: z.string(),
    doulaId: z.string(),
    name: z.string(),
    price: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    qualifications: z.array(z.string()),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string(),
    picture: PAYLOAD_PICURE
})

export const doulaPackageListSchema = PAYLOAD_RESPONSE.extend({
    data: doulaPackageResponseSchema
})

export const doulaClientParamsSchema = PARAMS.extend({

})

export const doulaClientResponseSchema = z.object({
    id: z.string(),
    user: z.object({
        fullName: z.string(),
        firstName: z.string(),
        middleName: z.string(),
        lastName: z.string(),
        id: z.string(),
        isExternal: z.boolean(),
        countryCode: z.string(),
        phoneNumber: z.string(),
        picture: PAYLOAD_PICURE,
        address: z.object({
            id: z.string(),
            fullAddress: z.string(),
        })
    }),
    doulaPackage: z.object({
        id: z.string(),
        doulaId: z.string(),
        name: z.string(),
        price: z.string(),
        description: z.string(),
        shortDescription: z.string(),
        qualifications: z.array(z.string()),
        createdAt: z.string(),
        updatedAt: z.string(),
        deletedAt: z.string(),
        picture: PAYLOAD_PICURE
    })
})

export const doulaClientListResponseSchema = PAYLOAD_RESPONSE.extend({
    data: z.array(doulaClientResponseSchema),
    metadata: METADATA
})

//----------------------------------------------------------------

export const doulaReviewStarResponseSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.string(),
    photos: z.array(z.string()),
    qualifications: z.array(z.string()),
    createdAt: z.string(),
    updatedAt: z.string(),
    avgStart: z.number(),
    avgExpertiseStar: z.number(),
    avgCommunicationStar: z.number(),
    avgPunctualityStar: z.number(),
    avgSupportStar: z.number(),
    totalReview: z.string(),
})

export const doulaReviewStarListItemResponseSchema = PAYLOAD_RESPONSE.extend({
    data: doulaReviewStarResponseSchema
})

export const doulaReviewParamsSchema = PARAMS.extend({
    f_doulaId: z.string()
})

export const doulaReviewResponseSchema = z.object({
    id: z.string(),
    doulaId: z.string(),
    userId: z.string(),
    comment: z.string(),
    start: z.number(),
    expertiseStar: z.number(),
    communicationStar: z.number(),
    punctualityStar: z.number(),
    supportStar: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    user: z.object({
        fullName: z.string(),
        firstName: z.string(),
        middleName: z.string(),
        lastName: z.string(),
        picture: z.string(),
    })
})

export const doulaReviewListResponseSchema = PAYLOAD_RESPONSE.extend({
    data : z.array(doulaReviewResponseSchema),
    metadata : METADATA
})