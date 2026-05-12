import { Icons } from "@/components/common/Icons";
import type { doulaListDetailResponse } from "../schema/DoulaSchema.type";
import useDoula from "../hook/useDoula";

function RowItem({ label, process, value }: { label: string, process: number, value: number }) {
    return (
        <div className="flex flex-row items-center">
            <label className="text-sm font-serif w-[40%]">{label}</label>
            <div className="bg-gray-200 w-[60%] h-3 rounded-2xl">
                <div className={`bg-gray-400 w-${String(process)} h-3 rounded-2xl`}></div>
            </div>
            <p className="text-lg font-serif w-[10%] ml-5">{value}</p>
        </div>
    )
}

export default function SectionDoulaReview({ data }: { data: doulaListDetailResponse }) {
    const { useGetDoulaReviewStar, useGetDoulaReview } = useDoula()
    const { data: doulaReview, isLoading } = useGetDoulaReview(data.id)
    const { data: doulaReviewStar, loading: loadingDoulaReviewStar } = useGetDoulaReviewStar(data.id)

    const loading = isLoading || loadingDoulaReviewStar
    
    if (loading) {
        return <div className="flex flex-col justify-center items-center"><Icons.buttonIcon /></div>
    }

    return (<>
        <div className="flex flex-row items-center">
            <p className="text-xl font-serif">{doulaReviewStar?.avgStart ?? 0}</p><Icons.starIcon />
        </div>
        <div className="flex flex-col gap-2 border-b my-4">
            <RowItem label="Expertise" value={doulaReviewStar?.avgExpertiseStar ?? 0} process={doulaReviewStar?.avgExpertiseStar ?? 0} />
            <RowItem label="Communication" value={doulaReviewStar?.avgExpertiseStar ?? 0} process={doulaReviewStar?.avgExpertiseStar ?? 0} />
            <RowItem label="Punctuality" value={doulaReviewStar?.avgExpertiseStar ?? 0} process={doulaReviewStar?.avgExpertiseStar ?? 0} />
            <RowItem label="Support" value={doulaReviewStar?.avgExpertiseStar ?? 0} process={doulaReviewStar?.avgExpertiseStar ?? 0} />
            <p className="text-sm text-gray-500 font-serif mb-5">Based in {doulaReviewStar?.totalReview} client ratings</p>
        </div>

        <div className="flex py-4 mb-8">
            {doulaReview.map((item, index) => (
                <div key={index}>
                    <img src={item.user.picture ?? 'https://i.pravatar.cc/150?img=1'} className="w-12 h-12 rounded-full" />
                    <div className="px-2">
                        <div className="flex">
                            {item.start ?? 0} <Icons.starIcon />
                        </div>
                        <p className="font-serif font-bold">{item?.user?.fullName}<span className="text-sm text-gray-400 ml-2 font-normal">20 Nov 2023</span></p>
                        <p className="font-serif text-left mt-1">{item?.comment}</p>
                    </div>
                </div>
            ))}
            {doulaReview.length < 1 &&
                <div className="mt-10 m-auto">
                    <p className="text-gray-400 font-serif text-center">This person don't have any review yet!</p>
                </div>}
        </div>

    </>)
}