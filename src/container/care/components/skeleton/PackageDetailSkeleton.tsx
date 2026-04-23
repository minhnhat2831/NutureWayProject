import { Icons } from "@/components/common/Icons";
import Header from "@/layout/HeaderLayout";

export default function PackageDetailSkeleton() {
    return (<>
        <Header
            showBack
            title="Package Detail"
            titleAlign="center"
            iconR1={<Icons.editPenIcon />}
        />
        <div className="h-screen bg-white overflow-y-auto">
            <img src={''} className="w-100 h-47 bg-[#cecece] animate-pulse"></img>

            <div className="px-4 my-8 font-serif">
                <div className="w-[80%] h-4 bg-[#cecece] animate-pulse" />
                <div className="w-[50%] h-4 bg-[#cecece] mt-2 animate-pulse" />

                <div className="border-gray-300 border rounded-xl p-4 my-4">
                    <div className="w-[30%] h-4 bg-[#cecece] animate-pulse" />
                    <div className="w-[90%] h-4 bg-[#cecece] mt-2 animate-pulse" />
                    <div className="w-[90%] h-4 bg-[#cecece] mt-2 animate-pulse" />
                    <div className="w-[70%] h-4 bg-[#cecece] mt-2 animate-pulse" />
                </div>

                <div className="border-gray-300 border rounded-xl p-4 my-4 ">
                    <div className="w-[30%] h-4 bg-[#cecece] animate-pulse" />
                    <div className="w-[90%] h-4 bg-[#cecece] mt-2 animate-pulse" />
                    <div className="w-[70%] h-4 bg-[#cecece] mt-2 animate-pulse" />
                    <div className="w-[80%] h-4 bg-[#cecece] mt-2 animate-pulse" />
                </div>

                <div className="border-gray-300 border rounded-xl p-4 my-4">
                    <div className="w-[30%] h-4 bg-[#cecece] animate-pulse" />
                    <div className="w-[90%] h-4 bg-[#cecece] mt-2 animate-pulse" />
                    <div className="w-[90%] h-4 bg-[#cecece] mt-2 animate-pulse" />
                    <div className="w-[90%] h-4 bg-[#cecece] mt-2 animate-pulse" />

                    <div className="w-[90%] h-4 bg-[#cecece] mt-8 animate-pulse" />
                    <div className="w-[90%] h-4 bg-[#cecece] mt-2 animate-pulse" />
                    <div className="w-[90%] h-4 bg-[#cecece] mt-2 animate-pulse" />
                </div>
            </div>
        </div>
    </>)
}