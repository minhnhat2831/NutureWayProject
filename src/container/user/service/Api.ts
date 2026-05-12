import axiosInstance from "@/services/Axios";
import type { userListItemResponse } from "../schema/UserSchema.type";
import { API_ENDPOINT } from "@/services/Api";

export const getUserById = async (id : string):Promise<userListItemResponse> => {
    const response = await axiosInstance.get<userListItemResponse>(
        API_ENDPOINT.API_USER_BY_ID(id)
    )
    return response.data
}