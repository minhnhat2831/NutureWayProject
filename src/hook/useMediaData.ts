import { API_ENDPOINT } from "@/services/Api"
import axiosInstance from "@/services/Axios"
import type { Media, MediaUrlRequest, MediaUrlResponse } from "@/utils/UploadToS3"
import { useState } from "react"
import { toast } from "react-toastify"

export const GetMedia = async (
    payload: MediaUrlRequest
): Promise<MediaUrlResponse> => {
    const response = await axiosInstance.post<MediaUrlResponse>(
        API_ENDPOINT.API_MEDIA,
        payload
    )
    return response.data
}

export const useMediaData = (type : string) => {
    const [data, setData] = useState<Media | null>(null)
    const [loading, setLoading] = useState(false)

    const getUploadUrl = async () => {
        setLoading(true)
        try {
            const res = await GetMedia({ type })
            setData(res.data)
            return res.data
        } catch (err: any) {
            toast.error(err.response?.data?.message)
            throw err
        } finally {
            setLoading(false)
        }
    }

    return { data, loading, getUploadUrl }
}