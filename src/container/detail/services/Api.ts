import axiosInstance from "@/services/Axios";
import type { packageListResponse, packageRequest } from "../schema/PackageSchema.type";
import { API_ENDPOINT } from "@/services/Api";

export const postPackageRequest = async (data: packageRequest): Promise<packageListResponse> => {
    const response = await axiosInstance.post<packageListResponse>(
        API_ENDPOINT.API_PACKAGE_REQUEST,
        data
    )
    return response.data
}