import axiosInstance from "@/services/Axios";
import type { packageListResponse, packageRequest } from "../schema/PackageSchema.type";
import { API_ENDPOINT } from "@/services/Api";
import type { documentParams, documentsListResponse } from "../schema/DocumentSchema.type";

export const postPackageRequest = async (data: packageRequest): Promise<packageListResponse> => {
    const response = await axiosInstance.post<packageListResponse>(
        API_ENDPOINT.API_PACKAGE_REQUEST,
        data
    )
    return response.data
}

export const getCareDocument = async (id : string, params : documentParams):Promise<documentsListResponse> => {
    const response = await axiosInstance.get<documentsListResponse>(
        API_ENDPOINT.API_CARE_DOCUMENT_BY_ID(id),{
            params
        }
    )
    return response.data
}