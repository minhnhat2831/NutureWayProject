import axiosInstance from "@/services/Axios";
import type { helpCenterList } from "../schema/SettingSchema.type";
import { API_ENDPOINT } from "@/services/Api";

export const getHelpCenter = async ():Promise<helpCenterList> => {
    const response = await axiosInstance.get<helpCenterList>(
        API_ENDPOINT.API_SETTING_HELP_CENTER
    )
    return response.data
}