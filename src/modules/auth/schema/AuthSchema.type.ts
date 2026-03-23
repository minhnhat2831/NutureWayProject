import * as z from 'zod'
import type { 
    addressDetailResponseSchema,
    addressDetailSchema,
    addressListItemResponseSchema,
    addressResponseSchema,
    checkEmailRequestSchema,
    checkPasswordSchema,
    forgotPasswordResponseSchema, 
    loginRequestSchema, 
    refreshTokenRequestSchema, 
    refreshTokenResponseSchema, 
    registerClientRequestSchema, 
    registerDoulaRequestSchema, 
    registerDetailSchema, 
    resetPasswordRequestSchema, 
    responseSchema, 
    sendOtpResponseSchema, 
    userResponseSchema, 
    verifiedRequestSchema, 
    verifiedResponseSchema, 
} from './AuthSchema'

export type loginRequest = z.infer<typeof loginRequestSchema>

export type checkEmailRequest = z.infer<typeof checkEmailRequestSchema>
export type userResponse = z.infer<typeof userResponseSchema>
export type response = z.infer<typeof responseSchema>

export type sendOtpResponse = z.infer<typeof sendOtpResponseSchema>

export type verifiedRequest = z.infer<typeof verifiedRequestSchema>
export type verifiedResponse = z.infer<typeof verifiedResponseSchema>

export type registerClientRequest = z.infer<typeof registerClientRequestSchema>
export type registerDoulaRequest = z.infer<typeof registerDoulaRequestSchema>
export type checkPassword = z.infer<typeof checkPasswordSchema>
export type registerDetail = z.infer<typeof registerDetailSchema>

export type refreshTokenRequest = z.infer<typeof refreshTokenRequestSchema>
export type refreshTokenResponse = z.infer<typeof refreshTokenResponseSchema>

export type forgotPasswordResponse = z.infer<typeof forgotPasswordResponseSchema>
export type resetPasswordRequest= z.infer<typeof resetPasswordRequestSchema>

export type addressListItemResponse = z.infer<typeof addressListItemResponseSchema>
export type addressResponse = z.infer<typeof addressResponseSchema>
export type addressDetail = z.infer<typeof addressDetailSchema>
export type addressDetailResponse = z.infer<typeof addressDetailResponseSchema>
