import { toast } from "react-toastify"

export interface ApiErrorResponse {
    data: number 
    message: string
}

export interface ApiError {
    response?: {
        data: ApiErrorResponse
    }
    message: string
}

export function isApiError(err: unknown): err is ApiError {
    return (
        typeof err === 'object' &&
        err !== null &&
        'response' in err
    )
}

export function getErrorMessage(err: unknown): string {
    if (isApiError(err)) {
        return err.response?.data?.message ?? 'Đã có lỗi xảy ra'
    }
    return 'Đã có lỗi xảy ra'
}

export function handleError(err: unknown) {
    toast.error(getErrorMessage(err))
}