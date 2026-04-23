import type { doulaListDetailResponse } from "../schema/DoulaSchema.type";

export default function SectionDoulaProfile({ data }: { data: doulaListDetailResponse }) {
    return (<>
        <p className="font-serif text-gray-500 text-xl">About me</p>
        <p className="font-serif text-black text-md">{data?.description || '-'}</p>

        <p className="font-serif text-gray-500 text-xl mt-4">Qualifications</p>
        {data?.qualifications?.map((e) => (
            <p className="list-disc">- {e}</p>
        ))}
        {data?.qualifications?.length < 1 && (
            <p className="list-disc">-</p>
        )}

        <p className="font-serif text-gray-500 text-xl mt-4">Photos</p>
        <div className="flex flex-wrap gap-4">
            {data?.photos?.map((item, index) => (
                <img key={index} src={item?.media?.uri} className="w-25 h-25 rounded-2xl" />
            ))}
        </div>

    </>)
}