import axiosInstance from "@/services/Axios";
import type { articleList, articleListItem, articleParams, statusArticle } from "../schema/ArticleSchema.type";
import { API_ENDPOINT } from "@/services/Api";

export const getListArticle = async (params : articleParams):Promise<articleList> => {
    const response = await axiosInstance.get<articleList>(
        API_ENDPOINT.API_ARTICLE,{
            params
        }
    )
    return response.data
}

export const getArticleDetail = async (id : string):Promise<articleListItem> => {
    const response = await axiosInstance.get<articleListItem>(
        API_ENDPOINT.API_ARTICLE_BY_ID(id)
    )
    return response.data
}

export const postArticleFavorite = async (id : string, status : boolean):Promise<statusArticle> => {
    const response = await axiosInstance.post<statusArticle>(
        API_ENDPOINT.API_ARTICLE_FAVORITE(id), {
            status
        }
    )
    return response.data
}

export const deleteArticleFavorite = async (id : string):Promise<statusArticle> => {
    const response = await axiosInstance.delete<statusArticle>(
        API_ENDPOINT.API_ARTICLE_UNFAVORITE(id),
    )
    return response.data
}