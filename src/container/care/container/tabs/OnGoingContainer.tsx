import ComponentCard from "@/components/shared/ComponentCard"
import useCare from "../../hook/useCare"
import { useNavigate } from "react-router"
import ComponentSkeletonCard from "@/components/shared/ComponentSkeletonCard"

export default function OnGoingContainer() {
    const { useGetMycare } = useCare()
    const { data, loading: loadingMyCare } = useGetMycare()
    const nav = useNavigate()
    
    if (loadingMyCare) {
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
                    avatar={care?.doula?.user?.picture?.uri}
                    title={care?.doula?.user?.fullName}
                    subTitle={care?.doulaPackage?.name}
                    showExpandRight
                    onClick={() => nav(`/home/detail/${care.id}/doula`)}
                />
            ))}
            {data.length < 1 &&
                <div>
                    <p className="text-gray-400 font-serif text-center">You don't have any package yet!</p>
                </div>}
        </div>
    </>)
}