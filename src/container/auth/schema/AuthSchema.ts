import { EMAIL_REQUIRED, PAYLOAD_PICURE, PAYLOAD_RESPONSE, STRING_NULL_OR_OPTIONAL, STRING_REQUIRED } from '@/constants/SchemaConstant'
import { isAgeGreaterThan18, isStrongPassword, validateEmail } from '@/utils/validation'
import * as z from 'zod'

//---------------------------- LOGIN ---------------------------------
export const userDataList = z.object({
    user: z.object({
        "fullName": z.string(),
        "id": z.string(),
        "firstName": z.string(),
        "middleName": z.string(),
        "lastName": z.string(),
        "birthDate": z.string(),
        "email": z.email(),
        "phoneNumber": z.number(),
        "googleId": z.string(),
        "appleId": z.string(),
        "status": z.string(),
        "verifiedEmail": z.boolean(),
        "countryCode": z.string(),
        "verifiedPhoneNumber": z.boolean(),
        "deActiveAt": z.string(),
        "isExternal": z.string(),
        "createdAt": z.string(),
        "updatedAt": z.string(),
        "doula": z.object({
            "id": z.string(),
            "title": z.string(),
            "description": z.string(),
            "businessName": z.string(),
            "starAvg": z.number(),
            "status": z.string(),
            "qualifications": z.string(),
            "stripeCustomerId": z.string(),
            "createdAt": z.string(),
            "updatedAt": z.string(),
            "deletedAt": z.string(),
        }),
        picture: PAYLOAD_PICURE,
    }),
    role: z.string(),
    tokens: z.object({
        accessToken: z.string(),
        refreshToken: z.string(),
        cometchat : z.object({
            appID : z.string(),
            authToken : z.string(),
            createdAt : z.string(),
            region : z.string(),
            uid : z.string(),
        })
    })
})

export const loginRequestSchema = z.object({
    email: EMAIL_REQUIRED,
    password: STRING_REQUIRED
}).superRefine((data, ctx) => {
    if(!validateEmail(data.email)){
        ctx.addIssue({
            path : ['email'],
            message : "Invail email input",
            code : z.ZodIssueCode.custom,
        })
    }
    if(!data.password || data.password.length < 6 || data.password.length > 32){
        ctx.addIssue({
            path : ['password'],
            message : "Password must be from 6 to 32 characters.",
            code : z.ZodIssueCode.custom,
        })
    }
    if(!data.password || !isStrongPassword(data.password)){
        ctx.addIssue({
            path : ['password'],
            message : "Password must contain at least one uppercase, one lowercase, and one number character.",
            code : z.ZodIssueCode.custom,
        })
    }
})

export const userResponseSchema = PAYLOAD_RESPONSE.extend({
    data: userDataList
})

//---------------------------- CHECK EMAIL ---------------------------------
export const checkEmailRequestSchema = z.object({
    email: EMAIL_REQUIRED
}).superRefine((data, ctx) => {
    if(!validateEmail(data.email)){
        ctx.addIssue({
            path : ['email'],
            message : "Invail email input",
            code : z.ZodIssueCode.custom,
        })
    }
})

export const responseSchema = PAYLOAD_RESPONSE.extend({
    data: z.boolean()
})

//---------------------------- OTP ---------------------------------
export const sendOtpResponseSchema = PAYLOAD_RESPONSE.extend({
    data: z.object({
        email: z.email(),
        phoneNumber: z.number(),
        otp: z.number(),
        expireTime: z.string()
    })
})

export const verifiedRequestSchema = z.object({
    email: EMAIL_REQUIRED,
    otp: STRING_REQUIRED
})

export const verifiedResponseSchema = PAYLOAD_RESPONSE.extend({
    data: z.object({
        action: z.string(),
        token: z.string()
    })
})

//---------------------------- Register ---------------------------------
export const registerRequestSchema = z.object({
    email: EMAIL_REQUIRED,
    password: STRING_REQUIRED,
    confirmPassword : STRING_REQUIRED,
    firstName: STRING_REQUIRED,
    middleName: STRING_NULL_OR_OPTIONAL,
    lastName: STRING_REQUIRED,
    birthDate: STRING_REQUIRED,
    picture: PAYLOAD_PICURE,
    addressId: STRING_REQUIRED,
    title: STRING_REQUIRED,
    description: STRING_REQUIRED,
    qualifications: z.string().array(),
    categoryIds: z.string().array(),
    photos: PAYLOAD_PICURE,
    subscription: z.object({
        id: STRING_REQUIRED,
        priceName: STRING_REQUIRED
    }),
    voucherId: STRING_REQUIRED,
    stripePaymentMethodId: STRING_REQUIRED
})

export const registerClientRequestSchema = registerRequestSchema.pick({
    email: true,
    password: true,
    firstName: true,
    middleName: true,
    lastName: true,
    birthDate: true,
    picture: true,
    addressId: true
})

export const registerDoulaRequestSchema = registerRequestSchema.pick({
    email: true,
    password: true,
    firstName: true,
    middleName: true,
    lastName: true,
    birthDate: true,
    picture: true,
    addressId: true,
    title: true,
    description: true,
    qualifications: true,
    categoryIds: true,
    photos: true,
    subscription: true,
    voucherId: true,
    stripePaymentMethodId: true
})

export const registerStepSchema = z.object({
    password: STRING_REQUIRED,
    confirmPassword : STRING_REQUIRED,
    firstName: STRING_REQUIRED,
    middleName: STRING_NULL_OR_OPTIONAL,
    lastName: STRING_REQUIRED,
    birthDate: STRING_REQUIRED,
    otp : STRING_REQUIRED,
    addressId : STRING_REQUIRED
}).superRefine((data, ctx) => {
    if(!data.password || data.password.length < 6 || data.password.length > 32){
        ctx.addIssue({
            path : ['password'],
            message : "Password must be from 6 to 32 characters.",
            code : z.ZodIssueCode.custom,
        })
    }
    if(!data.password || !isStrongPassword(data.password)){
        ctx.addIssue({
            path : ['password'],
            message : "Password must contain at least one uppercase, one lowercase, and one number character.",
            code : z.ZodIssueCode.custom,
        })
    }
    if(data.password !== data.confirmPassword){
        ctx.addIssue({
            path : ['confirmPassword'],
            message : "Confirm Password doesn't match Password",
            code : z.ZodIssueCode.custom,
        })
    }
    if(!data.birthDate || !isAgeGreaterThan18(data.birthDate)){
        ctx.addIssue({
            path : ['birthDate'],
            message : "Your age must be greater than 18.",
            code : z.ZodIssueCode.custom,
        })
    }
})

export const forgotPasswordStepSchema = z.object({
    email: EMAIL_REQUIRED,
    password: STRING_REQUIRED,
    confirmPassword : STRING_REQUIRED,
    otp : STRING_REQUIRED,
}).superRefine((data, ctx) => {
    if(!validateEmail(data.email)){
        ctx.addIssue({
            path : ['email'],
            message : "Invail email input",
            code : z.ZodIssueCode.custom,
        })
    }
    if(!data.password || data.password.length < 6 || data.password.length > 32){
        ctx.addIssue({
            path : ['password'],
            message : "Password must be from 6 to 32 characters.",
            code : z.ZodIssueCode.custom,
        })
    }
    if(!data.password || !isStrongPassword(data.password)){
        ctx.addIssue({
            path : ['password'],
            message : "Password must contain at least one uppercase, one lowercase, and one number character.",
            code : z.ZodIssueCode.custom,
        })
    }
    if(data.password !== data.confirmPassword){
        ctx.addIssue({
            path : ['confirmPassword'],
            message : "Confirm Password doesn't match Password",
            code : z.ZodIssueCode.custom,
        })
    }
})

//---------------------------- refreshToken ---------------------------------
export const refreshTokenRequestSchema = z.object({
    refreshToken : z.string()
})

export const refreshTokenResponseSchema = PAYLOAD_RESPONSE.extend({
    user : z.object({
        id : z.string(),
        email : z.email(),
        firstName : z.string(),
        lastName : z.string(),
        phoneNumber : z.number(),
        status : z.string(),
    }),
    role : z.string(),
    tokens : z.object({
        accessToken : z.string(),
        refreshToken : z.string()
        
    })
})

//---------------------------- password ---------------------------------
export const forgotPasswordResponseSchema = PAYLOAD_RESPONSE.extend({
    data : z.object({
        email : z.email(),
        otp : z.number(),
        expireMinutes : z.number()
    })
})

export const resetPasswordRequestSchema = z.object({
    newPassword : z.string(),
    rePassword : z.string()
})

//---------------------------- address ---------------------------------
export const addressListItemResponseSchema = z.object({
    id : z.string(),
    fullAddress : z.string()
})

export const addressResponseSchema = PAYLOAD_RESPONSE.extend({
    data : z.array(addressListItemResponseSchema)
})

export const addressDetailSchema = z.object({
    id : z.string(),
    fullAddress : z.string(),
    streetNumber : z.string(),
    streetName : z.string(),
    streetType : z.string(),
    localityName : z.string(),
    stateTerritory : z.string(),
    postalCode : z.string(),
    longitude : z.string(),
    latitude : z.string(),
})

export const addressDetailResponseSchema = PAYLOAD_RESPONSE.extend({
    data : addressDetailSchema
})

export const addressParams = z.object({
    q : z.string()
})