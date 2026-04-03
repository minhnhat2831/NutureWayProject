import axiosInstance from "@/services/Axios";
import type { articleList, articleParams } from "../schema/ArticleSchema.type";
import { API_ENDPOINT } from "@/services/Api";

export const getListArticle = async (params : articleParams):Promise<articleList> => {
    const response = await axiosInstance.get<articleList>(
        API_ENDPOINT.API_ARTICLE,{
            params
        }
    )
    return response.data
}