import * as z from 'zod'

const REQUIRED_MESSAGE = 'This field is required'

export const STRING_REQUIRED = z.string().min(1, REQUIRED_MESSAGE)
export const NUMBER_REQUIRED = z.number().min(1, REQUIRED_MESSAGE)
export const STRING_NULL_OR_OPTIONAL = z.string().nullable().optional()
export const NUMBER_NULL_OR_OPTIONAL = z.number().nullable().optional()

export const EMAIL_REQUIRED = z.string().email().min(1, REQUIRED_MESSAGE)

export const PAYLOAD_RESPONSE = z.object({
    message : z.string(),
})

export const PAYLOAD_PICURE = z.object({
    id : z.string(),
    uri : z.string(),
    type : z.string(),
    metadata : z.object({
        thumbnail : z.object({
            uri : z.string(),
            key : z.string()
        }),
        medium : z.object({
            uri : z.string(),
            key : z.string()
        })
    }),
    createdAt : z.string()
}).optional
