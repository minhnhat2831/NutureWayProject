import axiosInstance from "@/services/Axios";
import type { careList, careListDetail, careMedicationListItemResponse, careMedicationListResponse, careMedicationRequest, myCareParams, myPackageResponse } from "../schema/CareSchema.type";
import { API_ENDPOINT } from "@/services/Api";
import type { packageListResponse, packageParams, packageRequest } from "../schema/PackageSchema.type";

export const getMyCares = async (params: myCareParams): Promise<careList> => {
    const response = await axiosInstance.get<careList>(
        API_ENDPOINT.API_MY_CARES, {
        params
    }
    )
    return response.data
}

export const getCareById = async (id: string): Promise<careListDetail> => {
    const response = await axiosInstance.get<careListDetail>(
        API_ENDPOINT.API_CARE_BY_ID(id)
    )
    return response.data
}

export const getMyDoulaPackage = async (params : packageParams): Promise<packageListResponse> => {
    const response = await axiosInstance.get<packageListResponse>(
        API_ENDPOINT.API_DOULA_PACKAGE,{
            params
        }
    )
    return response.data
}

export const postDoulaPackage = async (data: packageRequest): Promise<packageListResponse> => {
    const response = await axiosInstance.post<packageListResponse>(
        API_ENDPOINT.API_DOULA_PACKAGE,
        data
    )
    return response.data
}

export const getCareMedication = async (id: string): Promise<careMedicationListResponse> => {
    const response = await axiosInstance.get<careMedicationListResponse>(
        API_ENDPOINT.API_CARE_MEDICATION_ID(id)
    )
    return response.data
}

export const postCareMedication = async (data: careMedicationRequest): Promise<careMedicationListItemResponse> => {
    const response = await axiosInstance.post<careMedicationListItemResponse>(
        API_ENDPOINT.API_CARE_MEDICATION,
        data
    )
    return response.data
}

export const getMyPackage = async (): Promise<myPackageResponse> => {
    const response = await axiosInstance.get<myPackageResponse>(
        API_ENDPOINT.API_DOULA_PROFILE
    )
    return response.data
}