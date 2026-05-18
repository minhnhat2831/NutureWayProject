import type { dataResponse } from "@/constants/SchemaConstant";
import { API_ENDPOINT } from "@/services/Api";
import axiosInstance from "@/services/Axios";
import type { packageStatus } from "../schema/PackageSchema.type";
import type { myPackageListItemResponse } from "@/container/care/schema/PackageSchema.type";

export const postPackageRequest = async (id : string, data : packageStatus):Promise<dataResponse> => {
    const response = await axiosInstance.patch<dataResponse>(
        API_ENDPOINT.API_PACKAGE_REQUEST_BY_ID(id),
            data
    )
    return response.data
}

export const getPackageRequestById = async (id : string):Promise<myPackageListItemResponse> => {
    const response = await axiosInstance.get<myPackageListItemResponse>(
        API_ENDPOINT.API_PACKAGE_REQUEST_BY_ID(id)
    )
    return response.data
}