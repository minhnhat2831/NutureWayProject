import axiosInstance from "@/services/Axios";
import type { doulaList, doulaListDetail, doulaPackageList, doulaParam } from "../schema/DoulaSchema.type";
import { API_ENDPOINT } from "@/services/Api";

export const getDoulaNearYou = async ( params : doulaParam):Promise<doulaList> => {
    const response = await axiosInstance.get<doulaList>(
        API_ENDPOINT.API_DOULA_NEAR_ME,{
            params
        }
    )
    return response.data
}

export const getDoulaById = async (id : string):Promise<doulaListDetail> => {
    const response = await axiosInstance.get<doulaListDetail>(
        API_ENDPOINT.API_DOULA_BY_ID(id)
    )
    return response.data
}

export const getDoulaPackageById = async (id : string):Promise<doulaPackageList> => {
    const response = await axiosInstance.get<doulaPackageList>(
        API_ENDPOINT.API_DOULA_PACKAGE_BY_ID(id)
    )
    return response.data
}