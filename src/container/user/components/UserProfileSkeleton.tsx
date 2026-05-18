import { Icons } from "@/components/common/Icons";

export default function UserProfileSkeleton() {
    return (<>
        <div className="h-screen bg-white">
            <div className="h-40 bg-blue-400 z-10">
                <button type="button" className="relative p-2 w-fit bg-white rounded-full mx-5 top-8 cursor-pointer hover:bg-violet-100">
                    <Icons.arrowLeftIcon />
                </button>
            </div>
            <div className="h-screen bg-white px-2">
                <div className="relative z-20 bottom-8 ml-2 animate-pulse">
                    <img className="w-19 h-19 rounded-3xl border-white border-3 bg-[#cecece]" />
                </div>
                <div className="flex flex-row justify-between mx-2 animate-pulse">
                    <div className="flex flex-col w-[80%]">
                        <div className="w-[40%] h-2 bg-[#cecece]" />
                        <div className="w-[60%] h-2 bg-[#cecece] mt-1" />
                    </div>
                    <button className="w-fit px-5 bg-[#cecece] rounded-3xl animate-pulse">
                    </button>
                </div>
                <div className="w-full h-auto px-4 p-4 bg-gray-200 mt-4 rounded-2xl">
                    <div className="w-[40%] h-3 bg-[#CECECE] animate-pulse"/>
                    <div className="w-[90%] h-3 bg-[#CECECE] mt-1 animate-pulse"/>
                    <div className="w-[80%] h-3 bg-[#CECECE] mt-1 animate-pulse"/>
                    <div className="w-[70%] h-3 bg-[#CECECE] mt-1 animate-pulse"/>
                </div>
            </div>
        </div>
    </>)
}