import axiosInstance from "@/services/Axios";
import type { addressParam, addressResponse, forgotPasswordResponse, loginRequest, registerClientRequest, registerDoulaRequest, resetPasswordRequest, response, sendOtpResponse, userResponse, verifiedRequest, verifiedResponse } from "../schema/AuthSchema.type";
import { API_ENDPOINT } from "@/services/Api";

export const postLogin =
    async (data: loginRequest): Promise<userResponse> => {
        const response = await axiosInstance.post<userResponse>(
            API_ENDPOINT.API_LOGIN,
            data
        )
        return response.data
    }

export const postCheckEmailorPhone =
    async (email: string): Promise<response> => {
        const response = await axiosInstance.post<response>(
            API_ENDPOINT.API_CHECK_EMAIL_OR_PHONE, {
            email
        }
        )
        return response.data
    }

export const postSendOtp = async (email: string): Promise<sendOtpResponse> => {
    const response = await axiosInstance.post<sendOtpResponse>(
        API_ENDPOINT.API_SEND_OTP, {
        email
    }
    )
    return response.data
}

export const postVerifyOtp = async (data: verifiedRequest): Promise<verifiedResponse> => {
    const response = await axiosInstance.post<verifiedResponse>(
        API_ENDPOINT.API_VERIFY_OTP, data
    )
    return response.data
}

export const postRegisterClient = async (
    data: registerClientRequest,
    verifyData: { action: string; token: string }
): Promise<userResponse> => {
    const response = await axiosInstance.post<userResponse>(
        API_ENDPOINT.API_REGISTER_CLIENT,
        {
            ...data,
            ...verifyData
        },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${verifyData.token}`
            }
        }
    )
    return response.data
}

export const postRegisterDoula = async (data: registerDoulaRequest): Promise<userResponse> => {
    const response = await axiosInstance.post<userResponse>(
        API_ENDPOINT.API_REGISTER_DOULA,
        data
    )
    return response.data
}

export const postForgotPassword = async (email: string): Promise<forgotPasswordResponse> => {
    const response = await axiosInstance.post<forgotPasswordResponse>(
        API_ENDPOINT.API_FORGOT_PASSWORD,
        { email }

    )
    return response.data
}

export const postResetPassword = async (
    data: resetPasswordRequest,
    verifyData: { action: string; token: string }
): Promise<response> => {
    const response = await axiosInstance.post<response>(
        API_ENDPOINT.API_RESET_PASSWORD, {
        ...data,
        ...verifyData
    },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${verifyData.token}`
            }
        }

    )
    return response.data
}

export const getAddress = async (params: addressParam): Promise<addressResponse> => {
    const response = await axiosInstance.get<addressResponse>(
        API_ENDPOINT.API_AUTO_ADDRESS,
        { params }
    )
    return response.data
}

export const postCheckResetPassword = async (data: verifiedRequest): Promise<verifiedResponse> => {
    const response = await axiosInstance.post<verifiedResponse>(
        API_ENDPOINT.API_CHECK_RESET_PASSWORD, data
    )
    return response.data
}