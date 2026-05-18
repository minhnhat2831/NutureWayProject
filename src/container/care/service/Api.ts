import axiosInstance from "@/services/Axios";
import type { careList, careListDetail, manuallyClientRequest, manuallyClientResponse, myCareParams } from "../schema/CareSchema.type";
import { API_ENDPOINT } from "@/services/Api";
import type { myPackageListResponse, myPackageParams, packageListResponse, packageParams, packageRequest } from "../schema/PackageSchema.type";
import type { careMedicationListItemResponse, careMedicationListResponse, careMedicationRequest } from "@/container/detail/schema/MedicationSchema.type";

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

export const getMyDoulaPackage = async (params: packageParams): Promise<packageListResponse> => {
    const response = await axiosInstance.get<packageListResponse>(
        API_ENDPOINT.API_DOULA_PACKAGE, {
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

export const putDoulaPackage = async (id : string, data : packageRequest): Promise<packageListResponse> => {
    const response = await axiosInstance.put<packageListResponse>(
        API_ENDPOINT.API_DOULA_PACKAGE_BY_ID(id),
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

export const postManuallyClient = async (data: manuallyClientRequest): Promise<manuallyClientResponse> => {
    const response = await axiosInstance.post<manuallyClientResponse>(
        API_ENDPOINT.API_MANUALLY_CLIENT,
        data
    )
    return response.data
}

export const getMyPackageRequest = async (params : myPackageParams): Promise<myPackageListResponse> => {
    const response = await axiosInstance.get<myPackageListResponse>(
        API_ENDPOINT.API_MY_PACKAGE_REQUEST,{
            params
        }
    )
    return response.data
}

