export const DEFAULT_API_SERVER = {
    BASE_URL: import.meta.env.VITE_REACT_PUBLIC_API_BASE_URL,
    TIMEOUT: 30000,
    HEADERS: {
        'Content-Type': 'application/json'
    }
}

export const API_ENDPOINT = {
    //login
    API_LOGIN: `/auth/login`,
    API_CHECK_EMAIL_OR_PHONE: `/auth/check-email-or-phone`,

    API_SEND_OTP: `/auth/send-otp`,
    API_VERIFY_OTP: `/auth/verify-otp`,

    API_REGISTER_CLIENT: `/auth/register`,
    API_REGISTER_DOULA: `/auth/register-for-doula`,

    API_REFRESH_TOKEN: `/auth/refresh-access-token`,

    API_FORGOT_PASSWORD: `/auth/forgot-password`,
    API_RESET_PASSWORD: `/auth/reset-password`,
    API_CHECK_RESET_PASSWORD: `/auth/check-reset-password`,

    API_AUTO_ADDRESS: `/address/autocomplete`,
    API_ADDRESS_ID: (id: string) => `/address/metadata/${id}`,

    //Category
    API_CATEGORY: `/categories`,
    API_CATEGORY_ID: (id: string) => `/categories/${id}`,
    API_CATEGORY_BY_SLUG: (slug: string) => `/categories/by-slug/${slug}`,

    //Article
    API_ARTICLE: `/articles`,
    API_ARTICLE_BY_ID: (id: string) => `/articles/by-id/${id}`,
    API_ARTICLE_FAVORITE: (id: string) => `/articles/favorite/${id}`,
    API_ARTICLE_UNFAVORITE: (id: string) => `/articles/unfavorite/${id}`,

    //doula
    API_DOULA_NEAR_ME: '/doulas/nearby',
    API_DOULA_BY_ID: (id: string) => `/doulas/${id}`,
    API_DOULA_PACKAGE: '/doula-packages',
    API_DOULA_PACKAGE_BY_ID: (id: string) => `/doula-packages/${id}`,
    API_DOULA_PROFILE : '/doulas/me',

    //Care
    API_MY_CARES: '/cares/my/ongoing',
    API_CARE_BY_ID: (id: string) => `/cares/${id}`,

    API_CARE_MEDICATION_ID: (id: string) => `/care-medication/${id}`,
    API_CARE_MEDICATION: '/care-medication',

    API_CARE_DOCUMENT : '/care-documents/',
    API_CARE_DOCUMENT_BY_ID : (id : string) => `/care-documents/${id}`,

    API_NOTE : `/care-notes`,
    API_NOTE_BY_ID : (id : string) => `/care-notes/${id}`,

    //Appointment
    API_APPOINTMENT_BY_ROLE : '/appointments',

    //Doula Client
    API_DOULA_CLIENT : '/users/doula-clients',

    //Package
    API_MY_PACKAGE_REQUEST: '/package-requests/my/requests',
    API_PACKAGE_REQUEST : '/package-requests',
    API_PACKAGE_REQUEST_BY_ID : (id : string) => `/package-requests/${id}`,
    API_PACKAGE_REQUEST_MANUALLY_CLIENT : '/package-requests/add-manually-client',

    //Media
    API_MEDIA: "/medias/signed-url",

    //setting
    API_SETTING_HELP_CENTER: '/help-centres',

    //User
    API_USER_BY_ID : (id : string) => `/users/${id}`

}
