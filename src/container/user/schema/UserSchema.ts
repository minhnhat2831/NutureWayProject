import { PAYLOAD_PICURE, PAYLOAD_RESPONSE } from '@/constants/SchemaConstant'
import * as z from 'zod'

export const userResponseSchema = z.object({
    fullName: z.string(),
    id: z.string(),
    firstName: z.string(),
    middleName: z.string(),
    lastName: z.string(),
    birthDate: z.string(),
    email: z.string(),
    phoneNumber: z.string(),
    googleId: z.string(),
    appleId: z.string(),
    status: z.string(),
    verifiedEmail: z.boolean(),
    countryCode: z.string(),
    verifiedPhoneNumber: z.string(),
    updatedBy: z.string(),
    deletedBy: z.string(),
    deActiveAt: z.string(),
    isExternal: z.boolean(),
    createdAt: z.string(),
    updatedAt: z.string(),
    cometChatUid: z.string(),
    address: z.object({
        fullAddress: z.string(),
        latitude: z.string(),
        longitude: z.string(),
    }),
    picture: PAYLOAD_PICURE
})

export const userListItemResponseSchema = PAYLOAD_RESPONSE.extend({
    data : userResponseSchema
})