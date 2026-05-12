import axiosInstance from "@/services/Axios";
import type { doulaClientListResponse, doulaClientParams, doulaList, doulaListDetail, doulaPackageList, doulaParam, doulaReviewListResponse, doulaReviewParams, doulaReviewStarListItemResponse } from "../schema/DoulaSchema.type";
import { API_ENDPOINT } from "@/services/Api";
import type { myPackageListResponse, myPackageResponse } from "@/container/care/schema/CareSchema.type";

export const getDoulaNearYou = async (params: doulaParam): Promise<doulaList> => {
    const response = await axiosInstance.get<doulaList>(
        API_ENDPOINT.API_DOULA_NEAR_ME, {
        params
    }
    )
    return response.data
}

export const getDoulaById = async (id: string): Promise<doulaListDetail> => {
    const response = await axiosInstance.get<doulaListDetail>(
        API_ENDPOINT.API_DOULA_BY_ID(id)
    )
    return response.data
}

export const getDoulaPackageById = async (id: string): Promise<doulaPackageList> => {
    const response = await axiosInstance.get<doulaPackageList>(
        API_ENDPOINT.API_DOULA_PACKAGE_BY_ID(id)
    )
    return response.data
}

export const getDoulaClient = async (params: doulaClientParams): Promise<doulaClientListResponse> => {
    const response = await axiosInstance.get<doulaClientListResponse>(
        API_ENDPOINT.API_DOULA_CLIENT, {
        params
    }
    )
    return response.data
}

export const getMyPackage = async (): Promise<myPackageResponse> => {
    const response = await axiosInstance.get<myPackageResponse>(
        API_ENDPOINT.API_DOULA_PROFILE
    )
    return response.data
}

export const getDoulaReviewStar = async (id: string): Promise<doulaReviewStarListItemResponse> => {
    const response = await axiosInstance.get<doulaReviewStarListItemResponse>(
        API_ENDPOINT.API_DOULA_REVIEW_STAR(id)
    )
    return response.data
}

export const getDoulaReview = async (params: doulaReviewParams): Promise<doulaReviewListResponse> => {
    const response = await axiosInstance.get<doulaReviewListResponse>(
        API_ENDPOINT.API_DOULA_REVIEW, {
        params
    }
    )
    return response.data
}

export const getDoulaIdPackage = async (id: string): Promise<myPackageListResponse> => {
    const response = await axiosInstance.get<myPackageListResponse>(
        API_ENDPOINT.API_DOULA_ID_PACKAGE(id)
    )
    return response.data
}