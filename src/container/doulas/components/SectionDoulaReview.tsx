import { Icons } from "@/components/common/Icons";
import type { doulaListDetailResponse } from "../schema/DoulaSchema.type";

function RowItem({ label, process, value }: { label: string, process: string, value: string }) {
    return (
        <div className="flex flex-row items-center">
            <label className="text-sm font-serif w-[40%]">{label}</label>
            <div className="bg-gray-200 w-[60%] h-3 rounded-2xl">
                <div className={`bg-gray-400 w-${process} h-3 rounded-2xl`}></div>
            </div>
            <p className="text-lg font-serif w-[10%] ml-5">{value}</p>
        </div>
    )
}

export default function SectionDoulaReview({ data }: { data: doulaListDetailResponse }) {
    return (<>
        <div className="flex flex-row items-center">
            <p className="text-xl font-serif">{data.starAvg}</p><Icons.starIcon />
        </div>
        <div className="flex flex-col gap-2 border-b my-4">
            <RowItem label="Expertise" value="4.5" process='40' />
            <RowItem label="Communication" value="5" process='45' />
            <RowItem label="Punctuality" value="3" process='30' />
            <RowItem label="Support" value="3.5" process='35' />
            <p className="text-sm text-gray-500 font-serif mb-5">Based in 96 client ratings</p>
        </div>

        <div className="flex py-4 mb-8">
            <img src='https://i.pravatar.cc/150?img=1' className="w-12 h-12 rounded-full" />
            <div className="px-2">
                <div className="flex">
                    {[5, 4, 3, 2, 1].map((e) =>
                        <Icons.starIcon />
                    )}
                </div>
                <p className="font-serif font-bold">Jeannette Smitham <span className="text-sm text-gray-400 ml-2 font-normal">20 Nov 2023</span></p>
                <p className="font-serif text-left mt-1">I had pleasure of having Nellie as my doula during my pregnancy and childbirth journey, and I can't praise her enough. Her warm, empathetic approach combined with her extensive knowledge made a significant difference in my experience. Nellie was always available to answer my questions, provide comfort, and offer pracitical advice.</p>
            </div>
        </div>

    </>)
}