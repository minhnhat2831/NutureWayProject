export const DEFAULT_API_SERVER = {
    BASE_URL: import.meta.env.VITE_REACT_PUBLIC_API_BASE_URL,
    TIMEOUT: 30000,
    HEADERS: {
        'Content-Type': 'application/json'
    }
}

export const API_ENDPOINT = {
    //login
    API_LOGIN : `/auth/login`,
    API_CHECK_EMAIL_OR_PHONE : `/auth/check-email-or-phone`,

    API_SEND_OTP : `/auth/send-otp`,
    API_VERIFY_OTP : `/auth/verify-otp`,

    API_REGISTER_CLIENT : `/auth/register`,
    API_REGISTER_DOULA : `/auth/register-for-doula`,

    API_REFRESH_TOKEN : `/auth/refresh-access-token`,

    API_FORGOT_PASSWORD : `/auth/forgot-password`,
    API_RESET_PASSWORD : `/auth/reset-password`,
    API_CHECK_RESET_PASSWORD : `/auth/check-reset-password`,

    API_AUTO_ADDRESS : `/address/autocomplete`,
    API_ADDRESS_ID : (id : string) => `/address/metadata/${id}`,

    //Category
    API_CATEGORY : `/categories`,
    API_CATEGORY_ID : (id : string) => `/categories/${id}`,
    API_CATEGORY_BY_SLUG : (slug : string) =>`/categories/by-slug/${slug}`,

    //Article
    API_ARTICLE : `/articles`
    
}
