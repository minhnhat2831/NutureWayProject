import Header from "@/layout/HeaderLayout";
import { useLocation, useParams } from "react-router";
import useUser from "@/container/user/hook/useUser";
import avatar from '/public/profile.jpg'
import DetailSkeleton from "../components/DetailSkeleton";
import useDoula from "@/container/doulas/hook/useDoula";

export default function DetailContainer({ children }: React.PropsWithChildren) {
    const { id } = useParams<{ id: string }>()

    const from = useLocation()
    const isDoula = from.pathname.includes("/doula");
    const isClient = from.pathname.indexOf('/client')

    const { doulaPackage } = from.state

    const { useGetUserById } = useUser()
    const { data : userData, loading : userLoading } = useGetUserById(isClient ? id ?? '' : '')

    const { useGetDoulaById } = useDoula()
    const { data : doulaData , loading : doulaLoaing } = useGetDoulaById(isDoula ?  id ?? '' : '')

    const loading = userLoading || doulaLoaing

    if (loading) {
        return <DetailSkeleton />
    }

    return (<>
        <Header showBack />
        <div className="h-screen bg-[#f5f5f5] overflow-y-auto pb-10">
            <div className="px-5">
                <div className="flex-row-reverse flex justify-between items-center py-5">
                    <img src={(isDoula ? doulaData?.picture?.uri : userData?.picture?.uri) ?? avatar} className="w-14 h-14 rounded-3xl" />
                    <div className="font-serif leading-5">
                        <p className="font-semibold text-xl leading-6">{isDoula ? doulaData?.title : userData?.fullName}</p>
                        <p className="font-normal text-gray-500 text-sm leading-6">{doulaPackage}</p>
                    </div>
                </div>
                {children}
            </div>
        </div>
    </>)
}