import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";
import useDoula from "@/container/doulas/hook/useDoula";
import Header from "@/layout/HeaderLayout";
import Scrollbar from "react-scrollbars-custom";

function TabCard({ name }: { name: string }) {
    return <button type="button" className="w-fit p-2 bg-gray-200 rounded-3xl cursor-pointer">
        <p className="text-sm leading-4 font-serif p-1">{name}</p>
    </button>
}

const HISTORY = ['birth plan', 'postnatal', 'sibling integation', 'kids and pets', 'Current plan']

export default function SearchContainer() {
    const { useGetDoulaNear } = useDoula()
    const { data, setSearch, search } = useGetDoulaNear()
    const limitedData = data.slice(0, 5) || [];
    const lenghtLimitData = limitedData.length

    const searchLength = data.length
    
    return (<>
        <div className="h-screen bg-white">
            <Header
                showBack
                showSearch
                searchValue={search}
                onSearchChange={(s) => setSearch(s)}
                onSearchClear={() => setSearch('')}
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
                                avatarStyle="rounded-xl"
                                title={res?.user?.fullName}
                                subTitle={res?.title}
                                showRateStar
                                rateStar={res?.starAvg}
                                onClick={() => { }}
                            />
                        ))}
                    </div>
                </div>
            </>}

            {search && <Scrollbar width={'auto'} height={'auto'}>
                <div className="px-4 py-2">
                    <p className="font-serif font-bold">Are you looking for...<span className="text-gray-400">{searchLength}</span></p>
                    {data.map((res, index) => (
                        <ComponentCard
                            key={index}
                            title={res?.title}
                            iconL1={<Icons.searchIcon />}
                            onClick={() => { }}
                        />
                    ))}
                </div>
            </Scrollbar>}

        </div>
    </>)
}