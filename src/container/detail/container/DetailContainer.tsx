import Header from "@/layout/HeaderLayout";
import { useLocation, useParams } from "react-router";
import avatar from '/public/profile.jpg'
import DetailSkeleton from "../components/DetailSkeleton";
import useCare from "@/container/care/hook/useCare";

export default function DetailContainer({ children }: React.PropsWithChildren) {
    const { id } = useParams<{ id: string }>()

    const from = useLocation()
    const isDoula = from.pathname.includes("/doula");

    const { useGetCareById } = useCare()
    const { data, loading } = useGetCareById(id ?? '')

    if (loading) {
        return <DetailSkeleton />
    }

    return (<>
        <Header showBack />
        <div className="h-screen bg-[#f5f5f5] overflow-y-auto pb-10">
            <div className="px-5">
                <div className="flex-row-reverse flex justify-between items-center py-5">
                    <img src={(isDoula ? data?.doula?.user?.picture?.uri : data?.user?.picture?.uri) ?? avatar} className="w-14 h-14 rounded-3xl" />
                    <div className="font-serif leading-5">
                        <p className="font-semibold text-xl leading-6">{isDoula ? data?.doula?.user?.fullName : data?.user?.fullName }</p>
                        <p className="font-normal text-gray-500 text-sm leading-6">{data?.doulaPackage?.name}</p>
                    </div>
                </div>
                {children}
            </div>
        </div>
    </>)
}