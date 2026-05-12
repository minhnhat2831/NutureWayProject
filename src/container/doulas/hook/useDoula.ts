import { useTableManager } from "@/hook/useTableManager";
import { getDoulaById, getDoulaClient, getDoulaIdPackage, getDoulaNearYou, getDoulaPackageById, getDoulaReview, getDoulaReviewStar, getMyPackage } from "../service/Api";
import { handleError } from "@/utils/ErrorHandle";
import { useQuery } from "@tanstack/react-query";
import { type doulaListDetail, type doulaPackageList, type doulaReviewStarListItemResponse } from "../schema/DoulaSchema.type";
import type { myPackageListResponse, myPackageResponse } from "@/container/care/schema/CareSchema.type";

export default function useDoula() {
    const useGetDoulaNear = () => {
        const f_id = `ni[${'2689bc7a-edba-4eb8-95fc-dac4aafbbc40'}]`
        const {
            data,
            metadata,
            search,
            setSearch,
            isLoading
        } = useTableManager({
            queryKey: ['doula'],
            queryFn: async ({ page, limit, search, sort, offset }) => {
                try {
                    const response = await getDoulaNearYou({
                        page,
                        limit,
                        offset,
                        sort,
                        search,
                        f_id: f_id,
                        f_categoryIds: '47793d92-14c7-4f35-b470-600cf0138115'
                    })
                    return {
                        data: response.data,
                        metadata: response.meatadata
                    }
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            }
        })
        return {
            data: data ?? [],
            metadata: metadata ?? null,
            loading: isLoading,
            search,
            setSearch
        }
    }

    const useGetDoulaById = (id: string) => {
        const query = useQuery<doulaListDetail>({
            queryKey: ['doula-profile', id],
            queryFn: async () => {
                try {
                    return await getDoulaById(id)
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            },
            enabled: !!id
        })
        return {
            data: query?.data?.data,
            loading: query?.isLoading
        }
    }

    const useGetDoulaIdPackage = (id: string) => {
        const query = useQuery<myPackageListResponse>({
            queryKey: ['doula-profile-package', id],
            queryFn: async () => {
                try {
                    return await getDoulaIdPackage(id)
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            },
            enabled: !!id
        })
        return {
            data: query?.data?.data,
            loading: query?.isLoading
        }
    }

    const useGetDoulaPackageById = (id: string) => {
        const query = useQuery<doulaPackageList>({
            queryKey: ['doula-package', id],
            queryFn: async () => {
                try {
                    return await getDoulaPackageById(id)
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            },
            enabled: !!id
        })
        return {
            data: query?.data?.data,
            loading: query?.isLoading
        }
    }

    const useGetDoulaPackage = () => {
        const query = useQuery<myPackageResponse>({
            queryKey: ['doula-package'],
            queryFn: async () => {
                try {
                    return await getMyPackage()
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            },
        })
        return {
            data: query?.data,
            loading: query?.isLoading
        }
    }

    const useGetDoulaClent = () => {
        const {
            data,
            isLoading
        } = useTableManager({
            queryKey: ['doula-client'],
            queryFn: async ({ page, limit, sort, offset, search }) => {
                try {
                    return await getDoulaClient({
                        page,
                        limit,
                        offset,
                        sort,
                        search
                    })
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            }
        })

        return {
            data: data ?? [],
            isLoading
        }
    }

    const useGetDoulaReviewStar = (id: string) => {
        const query = useQuery<doulaReviewStarListItemResponse>({
            queryKey: ['doula-review-star', id],
            queryFn: async () => {
                try {
                    return await getDoulaReviewStar(id)
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            },
        })
        return {
            data: query?.data?.data,
            loading: query?.isLoading
        }
    }

    const useGetDoulaReview = (id: string) => {
        const {
            data,
            isLoading
        } = useTableManager({
            queryKey: ['doula-review', id],
            queryFn: async ({ page, limit, sort, offset, search }) => {
                try {
                    return await getDoulaReview({
                        page,
                        limit,
                        offset,
                        sort,
                        search,
                        f_doulaId: id
                    })
                } catch (err: unknown) {
                    handleError(err)
                    throw err
                }
            }
        })

        return {
            data: data ?? [],
            isLoading
        }
    }

    return {
        useGetDoulaNear,
        useGetDoulaById,
        useGetDoulaPackageById,
        useGetDoulaClent,
        useGetDoulaPackage,
        useGetDoulaReviewStar,
        useGetDoulaReview,
        useGetDoulaIdPackage
    }
}