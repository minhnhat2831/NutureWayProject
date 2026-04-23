import ComponentCard from "@/components/shared/ComponentCard";
import useArticle from "../hook/useArticle";
import { useNavigate } from "react-router";
import ComponentSkeletonCard from "@/components/shared/ComponentSkeletonCard";

export default function ArticalDoulaContainer() {
    const { useGetListArticle } = useArticle()
    const { data, loading } = useGetListArticle()
    const nav = useNavigate()

    if (loading) {
        return (<>
            <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Articles</p>
            <div className="gap-4 flex flex-row my-5 px-2 overflow-x-auto">
                {[1, 2].map((e) => (
                    <div className="min-w-40 h-22 border-b-gray-400 border-b text-left cursor-pointer animate-pulse" key={e}>
                        <div className="w-[30%] h-2 bg-[#cecece]" />
                        <div className="w-[80%] h-3 bg-[#cecece] mt-1" />
                        <div className="w-[65%] h-3 bg-[#cecece] mt-1" />
                        <div className="w-[80%] h-3 bg-[#cecece] mt-1" />
                        <div className="w-[55%] h-2 bg-[#cecece] mt-2" />
                    </div>
                ))}
            </div>

            <div className="gap-5 flex flex-col my-5 px-2">
                {[1, 2].map((e) => (
                    <ComponentSkeletonCard key={e} />
                ))}
            </div>
        </>)
    }

    return (<>
        <div className="flex flex-col h-full">
            <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Articles</p>
            <div className="gap-4 flex flex-row my-2 px-2 overflow-x-auto">
                {data.map((item, index) => (
                    <button onClick={() => nav(`/home/article/${item.id}`)} type="button" className="min-w-40 h-30 border-b-gray-400 border-b text-left cursor-pointer" key={index}>
                        <p className="text-violet-400 text-md font-normal leading-3">{item.slug}</p>
                        <p className="font-semibold text-lg leading-5.5">{item.title}</p>
                        <p className="font-normal text-sm text-gray-400 leading-4">{item.timeToRead} min to read</p>
                    </button>
                ))}
            </div>

            <div className="gap-5 flex flex-col my-5 px-2">
                {data.map((item, index) => (
                    <ComponentCard
                        key={index}
                        img={item.picture.uri}
                        containerStyle="hover:bg-white"
                        imgStyle="w-20 h-20"
                        title={item.slug}
                        titleStyle="text-violet-400 text-md font-normal leading-3"
                        textStyle="font-semibold text-lg leading-5.5"
                        subSubTitle={item.title}
                        subTitle={`${item.timeToRead} min to read`}
                        onClick={() => nav(`/home/article/${item.id}`)}
                        showTextLine
                    />
                ))}
            </div>
            {data.length < 1 && <div className="px-4 mt-1 font-serif">
                <p className="text-sm text-gray-500 text-center">No data available!</p>
            </div>}
        </div>
    </>)
}