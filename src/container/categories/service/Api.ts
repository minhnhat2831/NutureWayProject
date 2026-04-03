import axiosInstance from "@/services/Axios";
import type { categoryList, categoryListItem, categoryParams } from "../schema/CategorySchema.type";
import { API_ENDPOINT } from "@/services/Api";

export const getAllCategory = async (params : categoryParams):Promise<categoryList> => {
    const response = await axiosInstance.get<categoryList>(
        API_ENDPOINT.API_CATEGORY,{
            params
        }
    )
    return response.data
}

export const getCategoryDetail = async (id : string):Promise<categoryListItem> => {
    const response = await axiosInstance.get<categoryListItem>(
        API_ENDPOINT.API_CATEGORY_ID(id)
    )
    return response.data
}

export const getArticalBySlug = async (id : string):Promise<categoryListItem> => {
    const response = await axiosInstance.get<categoryListItem>(
        API_ENDPOINT.API_CATEGORY_BY_SLUG(id)
    )
    return response.data
}