export default function DoulaCardSkeleton() {
    return (<>
        <div className="flex-1 flex-col min-w-50 h-50 animate-pulse overflow-hidden">
            <img className="w-full h-30 rounded-3xl border-0.5 shadow-lg bg-[#cecece]"></img>
            <div className="mt-3">
                <div className="flex flex-row justify-between items-center w-[80%]">
                    <div className="w-full h-2 bg-[#cecece]"></div>
                </div>
                <div className="w-[70%] h-2 bg-[#cecece] mt-2 animate-pulse" />
            </div>
        </div>
    </>)
}