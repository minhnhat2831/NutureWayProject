import { Icons } from "@/components/common/Icons"

const TABS = [
    { id: 1, title: 'Profile' },
    { id: 2, title: 'Package' },
    { id: 3, title: 'Review' },
]

export default function DoulaProfileSkeleton() {
    return (<>
        <div className="h-screen bg-white">
            <div className="h-40 bg-blue-400 z-10">
                <button type="button" className="relative p-2 w-fit bg-white rounded-full mx-5 top-8 cursor-pointer hover:bg-violet-100">
                    <Icons.arrowLeftIcon />
                </button>
            </div>
            <div className="h-screen bg-white px-2">
                <div className="relative z-20 bottom-8 ml-2 animate-pulse">
                    <img src={''} className="w-19 h-19 rounded-3xl border-white border-3 bg-[#cecece]" />
                </div>
                <div className="flex flex-row justify-between mx-2 animate-pulse">
                    <div className="flex flex-col w-[80%]">
                        <div className="w-[40%] h-2 bg-[#cecece]" />
                        <div className="w-[60%] h-2 bg-[#cecece] mt-1" />
                    </div>
                    <button className="w-fit px-5 bg-[#cecece] rounded-3xl animate-pulse">
                    </button>
                </div>
                <div className="relative border-b my-4">
                    <div className="flex">
                        {TABS.map((index) => (
                            <div
                                className={`flex-1 pb-3 ml-9 text-center capitalize font-medium transition`}>
                                <div className="w-[70%] h-2 bg-[#cecece]" />
                            </div>
                        ))}
                    </div>

                </div>
                <div className="px-2 animate-pulse">
                    <div className="w-[40%] h-2 bg-[#cecece]" />
                    <div className="w-[80%] h-2 bg-[#cecece] mt-2" />
                    <div className="w-[75%] h-2 bg-[#cecece] mt-1" />
                    <div className="w-[70%] h-2 bg-[#cecece] mt-1" />

                    <div className="w-[40%] h-2 bg-[#cecece] mt-4" />
                    <div className="w-[80%] h-2 bg-[#cecece] mt-2" />
                    <div className="w-[75%] h-2 bg-[#cecece] mt-1" />
                    <div className="w-[70%] h-2 bg-[#cecece] mt-1" />

                    <div className="w-[40%] h-2 bg-[#cecece] my-4" />
                    <div className="flex flex-wrap gap-4">
                        {[1, 2, 3, 4, 5]?.map((index) => (
                            <img key={index} src={''} className="w-25 h-25 bg-[#cecece] rounded-2xl" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>)
}