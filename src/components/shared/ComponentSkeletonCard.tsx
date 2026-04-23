export default function ComponentSkeletonCard() {
    return (<>
        <div className="w-full h-20 px-2 flex flex-row items-center justify-between rounded-2xl animate-pulse">
            <img src={''} className={`rounded-2xl w-20 h-20 bg-[#cecece] `} />
            <div className={'flex-1 flex-wrap ml-5 border-b-gray-200 border-b pb-2'}>
                <div className={`w-[30%] h-2 bg-[#cecece]`} />
                <div className={`w-[90%] h-2 bg-[#cecece] mt-2`} />
                <div className={`w-[75%] h-2 bg-[#cecece] mt-2`} />
                <div className={`w-[55%] h-2 bg-[#cecece] my-2`} />
            </div>
        </div>
    </>)
}