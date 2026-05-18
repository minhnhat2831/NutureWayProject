import { useNavigate, useParams } from "react-router";
import img from '/public/profile.jpg'
import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";
import UserProfileSkeleton from "../components/UserProfileSkeleton";
import useCare from "@/container/care/hook/useCare";

const CONTACT = [
    { name: 'Call client', icon: <Icons.phoneIcon /> },
    { name: 'Direction to client residence', icon: <Icons.mapIcon /> }
]

export default function UserProfileContainer() {
    const { id } = useParams<{ id: string }>()
    const nav = useNavigate()

    const { useGetCareById } = useCare()
    const { data, loading } = useGetCareById(id ?? '')

    if (loading) {
        return <UserProfileSkeleton />
    }

    return (<>
        <div className="h-screen bg-white overflow-y-auto">
            <div className="h-40 bg-blue-400 z-10">
                <button type="button" className="relative p-2 w-fit bg-white rounded-full mx-5 top-8 cursor-pointer hover:bg-violet-100" onClick={() => nav(-1)}>
                    <Icons.arrowLeftIcon />
                </button>
            </div>
            <div className="h-screen bg-white px-2">
                <div className="relative z-20 bottom-8 ml-2">
                    <img src={data?.user?.picture?.uri ?? img} className="w-19 h-19 rounded-3xl border-white border-3 bg-gray-300 " />
                </div>
                <div className="flex flex-row justify-between mx-2">
                    <div className="font-serif">
                        <p className="font-bold text-xl">{data?.user?.fullName}</p>
                        <p className="text-gray-500 text-sm">{ }</p>
                    </div>
                    <button className="w-fit px-5 bg-blue-700 rounded-3xl" onClick={() => nav('/home/message/0')}>
                        <p className="font-serif text-white">Chat</p>
                    </button>
                </div>
                <div className="w-full h-auto px-4 p-4 bg-gray-200 mt-4 rounded-2xl cursor-default">
                    <p className="font-medium text-gray-400 leading-4 italic">Service request</p>
                    <p className="font-medium text-sm leading-5 text-[#474747] mt-2">{data?.packageRequest?.message ?? '-'}</p>
                </div>
                <div className="mt-4">
                    <h3 className="text-gray-400 font-medium leading-5">Contact</h3>
                    {CONTACT.map((item, index) => (
                        <ComponentCard
                            key={index}
                            iconL1={item.icon}
                            iconStyle="bg-white"
                            title={item.name}
                            showExpandRight
                        />
                    ))}
                </div>
            </div>
        </div>
    </>)
}