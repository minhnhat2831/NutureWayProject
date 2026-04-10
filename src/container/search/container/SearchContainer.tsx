import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";
import Header from "@/layout/HeaderLayout";
import { useState } from "react";

function TabCard({ name }: { name: string }) {
    return <button type="button" className="w-fit p-2 bg-gray-200 rounded-3xl cursor-pointer">
        <p className="text-sm leading-4 font-serif p-1">{name}</p>
    </button>
}

const HISTORY = ['birth plan', 'postnatal', 'sibling integation', 'kids and pets', 'Current plan']

const RECOMMENDED_DOULAS = [
    { avatar: 'https://i.pravatar.cc/150?img=12', name: 'Nellie King', sub: 'Prenatal expert', rate: 5.0 },
    { avatar: 'https://i.pravatar.cc/150?img=22', name: 'Thomas Kertzmann', sub: 'Pregnancy management expert', rate: 4.2 },
    { avatar: 'https://i.pravatar.cc/150?img=15', name: 'Dianna Osinski', sub: 'Obstetrician', rate: 2.6 },
    { avatar: 'https://i.pravatar.cc/150?img=19', name: 'Estelle Hermann', sub: 'Certified midwife (CM )', rate: 3.5 },
    { avatar: 'https://i.pravatar.cc/150?img=11', name: 'Stephen Nitzsche', sub: 'Childbirth professional', rate: 1.9 },
]

const SEARCH = ['birth plan', 'birthday', 'birth and labour', 'childbirth', ' midwife', 'prenancy']

export default function SearchContainer() {
    const [value, setValue] = useState('')
    const [search, setSearch] = useState(SEARCH)

    const searchFilterFunction = (text: string) => {
        if (text) {
            const newData = SEARCH?.filter(function (item) {
                const itemData = item ? item.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setSearch(newData);
            setValue(text);
        } else {
            setSearch(SEARCH);
            setValue(text);
        }
    }

    const searchLength= search.length

    return (<>
        <div className="h-screen bg-white">
            <Header
                showBack
                showSearch
                searchValue={value}
                onSearchChange={(s) => searchFilterFunction(s)}
                onSearchClear={() => setValue('')}
                searchPlaceholder="Search for doulas, articles, anything,..." 
                />
            {!value && <>
                <div className="px-4 py-2">
                <h1 className="font-serif italic leading-5 text-sm">Search history<span className="font-serif text-gray-400"> 5</span></h1>
                <div className="flex flex-wrap flex-row gap-2 mt-4">
                    {HISTORY.map((history) => (
                        <TabCard name={history} />
                    ))}
                </div>
            </div>
            <div className="px-4 py-2">
                <h1 className="font-serif italic leading-5 text-sm">Recommended doulas<span className="font-serif text-gray-400"> 5</span></h1>
                <div>
                    {RECOMMENDED_DOULAS.map((res, index) => (
                        <ComponentCard
                            key={index}
                            avatar={res.avatar}
                            imgStyle="rounded-xl"
                            title={res.name}
                            subTitle={res.sub}
                            showRateStar
                            rateStar={res.rate}
                            onClick={() => { }}
                        />
                    ))}
                </div>
            </div>
            </>}

            {value && <div className="px-4 py-2">
                <p className="font-serif font-bold">Are you looking for...<span className="text-gray-400">{searchLength}</span></p>
                <div>
                    {search.map((e, index) => (
                        <ComponentCard 
                            key={index}
                            title={e}
                            iconL1={<Icons.searchIcon />}
                            onClick={() => {}}
                        />
                    ) )}
                </div>
            </div>}
            
        </div>
    </>)
}