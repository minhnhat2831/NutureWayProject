import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";
import ComponentSkeletonCard from "@/components/shared/ComponentSkeletonCard";
import useDoula from "@/container/doulas/hook/useDoula";
import Header from "@/layout/HeaderLayout";
import { useState } from "react";
import { useNavigate } from "react-router";
import Scrollbar from "react-scrollbars-custom";

function TabCard({ name }: { name: string }) {
    return <button type="button" className="w-fit p-2 bg-gray-200 rounded-3xl cursor-pointer">
        <p className="text-sm leading-4 font-serif p-1">{name}</p>
    </button>
}

const HISTORY = ['birth plan', 'postnatal', 'sibling integation', 'kids and pets', 'Current plan']

export default function SearchContainer() {
    const { useGetDoulaNear } = useDoula()
    const { data, setSearch, search, loading } = useGetDoulaNear()
    const limitedData = data.slice(0, 5) || [];
    const lenghtLimitData = limitedData.length
    const [isSubmitted, setIsSubmitted] = useState(false);
    const nav = useNavigate()

    const searchLength = data.length

    if (loading) {
        return <>
            <Header showBack showSearch />
            <div className="h-screen bg-white">
                <div className="px-4 py-2">
                    <div className="w-30 h-4 bg-[#cecece] animate-pulse" />
                    <div className="flex flex-wrap flex-row gap-2 mt-4">
                        {HISTORY.map((his: any) => (
                            <div className="w-[28%] p-4 bg-[#cecece] rounded-3xl animate-pulse" />
                        ))}
                    </div>
                </div>
                <div className="px-4 py-2">
                    <div className="w-45 h-4 bg-gray-300 animate-pulse" />
                    <div className="gap-5 flex flex-col my-5 px-2">
                        {[1, 2, 3, 4].map((e) => (
                            <ComponentSkeletonCard key={e} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    }

    return (<>
        <div className="h-screen bg-white">
            <Header
                showBack
                showSearch
                searchValue={search}
                onSearchChange={(s) => {
                    setSearch(s);
                    setIsSubmitted(false);
                }}
                onSearchClear={() => {
                    setSearch('');
                    setIsSubmitted(false);
                }}
                onClickSearch={() => setIsSubmitted(true)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setIsSubmitted(true);
                    }
                }}
                searchPlaceholder="Search for doulas, articles, anything,..."
            />
            {!search && <>
                <div className="px-4 py-2">
                    <h1 className="font-serif italic leading-5 text-sm">Search history<span className="font-serif text-gray-400"> {HISTORY.length}</span></h1>
                    <div className="flex flex-wrap flex-row gap-2 mt-4">
                        {HISTORY.map((his: any) => (
                            <TabCard name={his} />
                        ))}
                    </div>
                </div>
                <div className="px-4 py-2">
                    <h1 className="font-serif italic leading-5 text-sm">Recommended doulas<span className="font-serif text-gray-400"> {lenghtLimitData}</span></h1>
                    <div>
                        {limitedData.map((res, index) => (
                            <ComponentCard
                                key={index}
                                avatar={res?.picture?.uri}
                                avatarStyle="rounded-xl w-10 h-10 bg-gray-300"
                                title={res?.user?.fullName}
                                subTitle={res?.title}
                                showRateStar
                                rateStar={res?.starAvg}
                                onClick={() => nav(`/home/doula-profile/${res.id}`)}
                            />
                        ))}
                    </div>
                </div>
            </>}

            {search && !isSubmitted && (<Scrollbar width={'auto'} height={'auto'}>
                <div className="px-4 py-2">
                    <p className="font-serif font-bold">Are you looking for...<span className="text-gray-400">{searchLength}</span></p>
                    {data.map((res, index) => (
                        <ComponentCard
                            key={index}
                            title={res?.title}
                            iconL1={<Icons.searchIcon />}
                            onClick={() => (
                                setSearch(res.title),
                                setIsSubmitted(true)
                            )}
                        />
                    ))}
                </div>
            </Scrollbar>)}

            {search && isSubmitted && (
                <Scrollbar>
                    <div className="px-4 py-2">
                        <p className="font-serif font-bold">
                            Search results
                            <span className="text-gray-400">{searchLength}</span>
                        </p>

                        {data.map((res, index) => (
                            <ComponentCard
                                key={index}
                                avatar={res?.picture?.uri}
                                avatarStyle="rounded-xl bg-gray-300 w-12 h-12"
                                title={res?.user?.fullName}
                                subTitle={res?.title}
                                showRateStar
                                rateStar={res?.starAvg}
                                onClick={() => { }}
                            />
                        ))}
                    </div>
                </Scrollbar>
            )}
        </div>
    </>)
}