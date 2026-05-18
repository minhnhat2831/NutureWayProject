import ComponentCard from "@/components/shared/ComponentCard"
import { useNavigate } from "react-router"
import usePackage from "../../hook/usePackage"
import ComponentSkeletonCard from "@/components/shared/ComponentSkeletonCard"

export default function RequestContainer() {
    const { useGetMyPackageRequest } = usePackage()
    const { data, loading } = useGetMyPackageRequest()
    const nav = useNavigate()
    if (loading) {
        return <>
            <div className="h-screen bg-white z-0 relative">
                <div className="flex flex-col gap-4 px-2">
                    {[1, 2, 3].map((e) => (
                        <ComponentSkeletonCard key={e} />
                    ))}
                </div>
            </div>
        </>
    }

    return (<>
        <div className="flex flex-col gap-4 px-2">
            {data.map((care, index) => (
                <ComponentCard
                    key={index}
                    img={care?.package?.picture?.uri}
                    imgStyle="w-15 h-15 rounded-2xl bg-gray-300"
                    title={care?.package?.name}
                    subTitle={care?.package?.shortDescription}
                    showExpandRight
                    onClick={() => nav(`/home/detail/package-detail/${care.doulaPackageId}`)}
                />
            ))}
            {data.length < 1 &&
                <div>
                    <p className="text-gray-400 font-serif text-center">You don't have any package yet!</p>
                </div>}
        </div>
    </>)
}