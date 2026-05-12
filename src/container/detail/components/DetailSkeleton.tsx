import Header from "@/layout/HeaderLayout";

export default function DetailSkeleton() {
    return (<>
        <Header showBack />
        <div className="h-screen bg-[#f5f5f5] overflow-y-auto pb-10">
            <div className="px-5">
                <div className="flex-row-reverse flex justify-between items-center py-5">
                    <img src={ '' } className="w-14 h-14 rounded-3xl bg-[#cecece] animate-pulse" />
                    <div className="flex flex-col justify-center w-[80%] animate-pulse">
                        <div className="w-[40%] h-2 bg-[#CECECE]" />
                        <div className="w-[80%] h-2 bg-[#CECECE] mt-2" />
                    </div>
                </div>
                <div className={`w-full h-20 px-2 bg-[#CECECE] flex flex-row items-center justify-between rounded-2xl animate-pulse`} />
                <div className={`w-full h-20 px-2 bg-[#CECECE] flex flex-row items-center justify-between rounded-2xl animate-pulse mt-4`} />
                <div className={`w-full h-20 px-2 bg-[#CECECE] flex flex-row items-center justify-between rounded-2xl animate-pulse mt-4`} />
                <div className={`w-full h-20 px-2 bg-[#CECECE] flex flex-row items-center justify-between rounded-2xl animate-pulse mt-4`} />

                <div className="w-[40%] h-2 p-1 bg-[#CECECE] mt-4" />

                <div className={`w-full h-20 px-2 bg-[#CECECE] flex flex-row items-center justify-between rounded-2xl animate-pulse mt-4`} />
                <div className={`w-full h-20 px-2 bg-[#CECECE] flex flex-row items-center justify-between rounded-2xl animate-pulse mt-4`} />
                <div className={`w-full h-20 px-2 bg-[#CECECE] flex flex-row items-center justify-between rounded-2xl animate-pulse mt-4`} />
                <div className={`w-full h-20 px-2 bg-[#CECECE] flex flex-row items-center justify-between rounded-2xl animate-pulse mt-4`} />
            </div>
        </div>
    </>)
}