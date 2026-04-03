import { METADATA, PARAMS, PAYLOAD_PICURE, PAYLOAD_RESPONSE } from "@/constants/SchemaConstant";
import * as z from 'zod'

export const categoryParamsSchema = PARAMS.extend({
    f_name : z.string().optional(),
    f_status : z.string().optional()
})

export const categoryListResponseSchema = z.object({
    id : z.string(),
    name : z.string(),
    title : z.string(),
    picture : PAYLOAD_PICURE,
    status : z.string(),
    slug : z.string(),
    createdAt : z.string(),
    updatedAt : z.string()
})

export const categoryListSchema = PAYLOAD_RESPONSE.extend({
    data : z.array(categoryListResponseSchema),
    metadata : METADATA
})

export const categoryListItemResponseSchema = z.object({
    id : z.string(),
    name : z.string(),
    title : z.string(),
    picture : z.string(),
    content : z.string(),
    status : z.string(),
    slug : z.string(),
    type : z.string(),
    authorId : z.string(),
    categoryId : z.string(),
    timeToRead : z.string(),
    createdAt : z.string(),
    updatedAt : z.string(),
    category : z.object({
        id : z.string(),
        name : z.string()
    }),
    author : z.object({
        id : z.string(),
        firstName : z.string(),
        lastName : z.string()
    })
})

export const categoryListItemSchema = PAYLOAD_RESPONSE.extend({
    data : categoryListItemResponseSchema
})