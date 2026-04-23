import Header from "@/layout/HeaderLayout";
import useCare from "../../care/hook/useCare";

export default function DetailContainer({ children }: React.PropsWithChildren) {
    const { useGetCareById } = useCare()
    const { data } = useGetCareById('d3f13fb0-dccc-467e-a785-4b056da44585')

    return (<>
        <Header showBack />
        <div className="h-screen bg-[#f5f5f5] overflow-y-auto pb-10">
            <div className="px-5">
                <div className="flex-row-reverse flex justify-between items-center py-5">
                    <img src="https://i.pravatar.cc/150?img=13" className="w-14 h-14 rounded-3xl" />
                    <div className="font-serif leading-5">
                        <p className="font-semibold text-xl leading-6">{data?.status}</p>
                        <p className="font-normal text-gray-500 text-sm leading-6">P</p>
                    </div>
                </div>
                {children}
            </div>
        </div>
    </>)
}